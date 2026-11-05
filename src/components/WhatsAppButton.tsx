import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { createWhatsAppLink, ORDERING_AVAILABLE } from "@/lib/order";

const WhatsAppButton = () => {
  return (
    <motion.a
      aria-label={ORDERING_AVAILABLE ? "Order on WhatsApp" : "Ordering information"}
      href={createWhatsAppLink()}
      target={ORDERING_AVAILABLE ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#25D366] text-white px-5 py-4 rounded-full shadow-elevated hover:shadow-2xl transition-shadow duration-300"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="font-semibold hidden sm:inline">{ORDERING_AVAILABLE ? "Order on WhatsApp" : "Ordering information"}</span>
    </motion.a>
  );
};

export default WhatsAppButton;
