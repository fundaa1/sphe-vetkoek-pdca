import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("WhatsApp order destination", () => {
  it("uses the provided business number when no override is set", async () => {
    vi.stubEnv("VITE_WHATSAPP_NUMBER", undefined);
    vi.stubEnv("VITE_WHATSAPP_DISPLAY_NUMBER", undefined);
    const order = await import("./order");
    expect(order.ORDERING_AVAILABLE).toBe(true);
    expect(order.WHATSAPP_DISPLAY_NUMBER).toBe("+27 83 124 5678");
    expect(new URL(order.createWhatsAppLink()).pathname).toBe("/27831245678");
  });

  it.each(["", "27821234567", "+27 82 123 4567", "123"])(
    "routes an unset or invalid number to the notice",
    async (number) => {
      vi.stubEnv("VITE_WHATSAPP_NUMBER", number);
      const order = await import("./order");
      expect(order.ORDERING_AVAILABLE).toBe(false);
      expect(order.createWhatsAppLink()).toBe("#ordering-unavailable");
      expect(order.WHATSAPP_DISPLAY_NUMBER).toBe("Ordering contact not configured");
    },
  );

  it("creates an encoded order for a configured number", async () => {
    vi.stubEnv("VITE_WHATSAPP_NUMBER", "27123456789");
    vi.stubEnv("VITE_WHATSAPP_DISPLAY_NUMBER", "+27 12 345 6789");
    const order = await import("./order");
    const url = new URL(order.createWhatsAppLink({
      items: [{ name: "Cheese & Polony", price: 15, quantity: 2 }],
    }));
    expect(url.origin + url.pathname).toBe("https://wa.me/27123456789");
    expect(url.searchParams.get("text")).toContain("2 x Cheese & Polony - R30");
    expect(url.searchParams.get("text")).toContain("Estimated total: R30");
    expect(order.WHATSAPP_DISPLAY_NUMBER).toBe("+27 12 345 6789");
  });

  it("does not display a mismatched number", async () => {
    vi.stubEnv("VITE_WHATSAPP_NUMBER", "27123456789");
    vi.stubEnv("VITE_WHATSAPP_DISPLAY_NUMBER", "+27 82 123 4567");
    const order = await import("./order");
    expect(order.WHATSAPP_DISPLAY_NUMBER).toBe("+27123456789");
  });

  it("includes each item and the combined total in a mixed-order draft", async () => {
    vi.stubEnv("VITE_WHATSAPP_NUMBER", "27123456789");
    const order = await import("./order");
    const url = new URL(order.createWhatsAppLink({
      items: [
        { name: "Vetkoek Plain", price: 10, quantity: 2 },
        { name: "Vetkoek with Polony", price: 13, quantity: 1 },
      ],
    }));
    const message = url.searchParams.get("text");
    expect(message).toContain("2 x Vetkoek Plain - R20");
    expect(message).toContain("1 x Vetkoek with Polony - R13");
    expect(message).toContain("Estimated total: R33");
  });
});
