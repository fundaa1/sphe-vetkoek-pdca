export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || "27821234567";
export const WHATSAPP_DISPLAY_NUMBER = import.meta.env.VITE_WHATSAPP_DISPLAY_NUMBER || "+27 82 123 4567";

type OrderLine = {
  name: string;
  price: number;
  quantity?: number;
};

type OrderMessageOptions = {
  items?: OrderLine[];
  intro?: string;
  includeCampusPrompt?: boolean;
};

const formatOrderLine = ({ name, price, quantity = 1 }: OrderLine) => {
  const subtotal = price * quantity;
  return `${quantity} x ${name} - R${subtotal}`;
};

export const createWhatsAppLink = ({
  items = [],
  intro = "Hi Sphe! I'd like to place an order.",
  includeCampusPrompt = true,
}: OrderMessageOptions = {}) => {
  const orderLines = items.length
    ? items.map(formatOrderLine).join("\n")
    : "[Your order here]";

  const total = items.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
  const totalLine = items.length ? `\n\nEstimated total: R${total}` : "";
  const campusLine = includeCampusPrompt ? "\nCampus/residence: [UKZN / residence / area]" : "";

  const message = encodeURIComponent(
    `${intro}\n\n${orderLines}${totalLine}${campusLine}\nDelivery address: [Your address]\nPreferred time: [Now / later]`,
  );

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
};
