import { motion } from "framer-motion";
import { Clock, MapPin, MessageCircle, ShieldCheck, Truck } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-vetkoek.jpg";
import { createWhatsAppLink } from "@/lib/order";

const trustBadges = [
  { icon: ShieldCheck, label: "Made fresh daily" },
  { icon: Clock, label: "30-45 min delivery" },
  { icon: MapPin, label: "Campus friendly" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Fresh golden vetkoek with steam rising"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="inline-flex items-center gap-2 bg-primary/90 text-primary-foreground px-4 py-2 rounded-full mb-6"
          >
            <Truck className="w-4 h-4" />
            <span className="text-sm font-medium">Hot vetkoeks for Durban students</span>
          </motion.div>

          <h1 className="font-heading font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream mb-6 leading-tight">
            Hot Vetkoek.
            <br />
            <span className="text-primary">Campus Ready.</span>
          </h1>

          <p className="text-cream/90 text-lg sm:text-xl md:text-2xl mb-8 font-body max-w-2xl mx-auto">
            Golden, fluffy vetkoeks made to order for UKZN students, residences, and nearby Durban lunch runs. Prices start at R10.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              variant="hero"
              size="xl"
              asChild
            >
              <a
                href={createWhatsAppLink({
                  intro: "Hi Sphe! I saw the website and I'd like to order vetkoeks.",
                })}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3"
              >
                <MessageCircle className="w-6 h-6" />
                Order on WhatsApp
              </a>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-cream/10 border-cream/30 text-cream hover:bg-cream/20 hover:text-cream"
              asChild
            >
              <a href="#menu">
                View Menu
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 text-cream/85 text-sm"
          >
            {trustBadges.map((badge) => (
              <div key={badge.label} className="flex items-center justify-center gap-2 rounded-lg bg-background/10 px-4 py-3 backdrop-blur-sm">
                <badge.icon className="w-4 h-4 text-primary" />
                <span>{badge.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-cream/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 bg-cream/80 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
