import { afterEach, describe, expect, it, vi } from "vitest";

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe("WhatsApp order destination", () => {
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
});
