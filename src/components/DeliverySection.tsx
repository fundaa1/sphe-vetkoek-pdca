import { motion } from "framer-motion";
import { Clock, MapPin, Truck, CreditCard } from "lucide-react";

const deliveryInfo = [
  {
    icon: MapPin,
    title: "Delivery Area",
    description: "UKZN Howard College, Westville Campus & surrounding areas",
  },
  {
    icon: Clock,
    title: "Operating Hours",
    description: "Monday - Friday: 10am - 6pm, Saturday: 11am - 4pm",
  },
  {
    icon: Truck,
    title: "Delivery Time",
    description: "30-45 minutes from order confirmation",
  },
  {
    icon: CreditCard,
    title: "Payment",
    description: "Cash on delivery or EFT/SnapScan",
  },
];

const DeliverySection = () => {
  return (
    <section id="delivery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
            Delivery Info
          </span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mt-3 mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Ordering is simple: choose your vetkoek, confirm on WhatsApp, then meet at your residence, campus gate, or pickup point.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {deliveryInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-xl p-6 text-center shadow-soft hover:shadow-card transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <info.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {info.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {info.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 bg-accent/5 rounded-xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="font-heading font-bold text-xl text-center text-foreground mb-8">
            Order in 3 Easy Steps
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold">
                1
              </span>
              <span className="text-foreground font-medium">Click WhatsApp</span>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-border" />
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold">
                2
              </span>
              <span className="text-foreground font-medium">Send your order</span>
            </div>
            <div className="hidden md:block w-8 h-0.5 bg-border" />
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold">
                3
              </span>
              <span className="text-foreground font-medium">Get it delivered!</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeliverySection;
