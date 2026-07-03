import { motion } from "framer-motion";
import { Heart, Quote, Sparkles, Users } from "lucide-react";

const testimonials = [
  {
    quote: "The cheese and polony one is a proper lunch. Hot, filling, and still affordable.",
    name: "Lindo",
    detail: "Howard College student",
  },
  {
    quote: "I like that I can order between lectures and collect near campus.",
    name: "Amahle",
    detail: "Westville campus",
  },
];

const AboutSection = () => {
  return (
    <section id="story" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">
              Our Story
            </span>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mt-3 mb-6">
              Made with Love, <span className="text-primary">Served with a Smile</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card rounded-2xl p-8 md:p-12 shadow-card"
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              What started as a passion project has grown into Durban's favorite student comfort food. 
              At Sphe's Vetkoeks, we believe that good food doesn't have to break the bank.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Every vetkoek is made fresh to order using our family recipe passed down through generations. 
              We use only quality ingredients and fry each one to golden perfection. Because you deserve 
              more than just a snack – you deserve a warm, filling meal that feels like home.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Fresh Daily</h3>
                <p className="text-sm text-muted-foreground">Made to order, never sitting around</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">Made with Love</h3>
                <p className="text-sm text-muted-foreground">Family recipe, authentic taste</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">For Students</h3>
                <p className="text-sm text-muted-foreground">Affordable prices, big portions</p>
              </motion.div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-soft"
              >
                <Quote className="w-6 h-6 text-primary mb-4" />
                <p className="text-foreground font-medium leading-relaxed mb-4">
                  "{testimonial.quote}"
                </p>
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">{testimonial.name}</span> - {testimonial.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
