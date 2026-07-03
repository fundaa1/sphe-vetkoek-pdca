import { motion } from "framer-motion";
import { MessageCircle, Plus, Star } from "lucide-react";
import { Button } from "./ui/button";
import vetkoekPlain from "@/assets/vetkoek-plain.jpg";
import vetkoekPolony from "@/assets/vetkoek-polony.jpg";
import vetkoekCheesePolony from "@/assets/vetkoek-cheese-polony.jpg";
import { createWhatsAppLink } from "@/lib/order";

interface MenuItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  note: string;
  popular?: boolean;
  bestValue?: boolean;
}

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Vetkoek Plain",
    price: 10,
    description: "Classic golden vetkoek, light and fluffy. Perfect on its own or with your own fillings.",
    note: "Best for a quick snack between classes.",
    image: vetkoekPlain,
  },
  {
    id: 2,
    name: "Vetkoek with Polony",
    price: 13,
    description: "Our signature vetkoek stuffed with quality polony slices. A student favorite!",
    note: "Most ordered for lunch breaks.",
    image: vetkoekPolony,
    popular: true,
  },
  {
    id: 3,
    name: "Vetkoek with Cheese & Polony",
    price: 15,
    description: "The ultimate combo! Melted cheese and polony inside warm vetkoek. Best value!",
    note: "The filling meal option.",
    image: vetkoekCheesePolony,
    bestValue: true,
  },
];

const MenuSection = () => {
  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
            Our Menu
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mt-3 mb-4">
            Pick Your Vetkoek
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh from the pot, straight to your door. Choose one item or send a quick quantity order on WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {menuItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 ${
                item.bestValue ? "ring-2 ring-primary md:scale-105" : ""
              }`}
            >
              {/* Best Value Badge */}
              {item.bestValue && (
                <div className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  Best Value
                </div>
              )}

              {/* Popular Badge */}
              {item.popular && (
                <div className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-bold">
                  Popular
                </div>
              )}

              {/* Image */}
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-heading font-bold text-xl text-card-foreground mb-2">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent mb-5">
                  {item.note}
                </p>
                <div className="flex items-center justify-between mb-5">
                  <span className="font-heading font-bold text-3xl text-primary">
                    R{item.price}
                  </span>
                  <span className="rounded-full bg-muted px-3 py-1 text-xs font-semibold text-muted-foreground">
                    Available today
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Button
                    variant="whatsapp"
                    size="sm"
                    asChild
                  >
                    <a
                      href={createWhatsAppLink({ items: [{ name: item.name, price: item.price, quantity: 1 }] })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Order
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                  >
                    <a
                      href={createWhatsAppLink({ items: [{ name: item.name, price: item.price, quantity: 2 }] })}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Plus className="w-4 h-4" />
                      2 for R{item.price * 2}
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
