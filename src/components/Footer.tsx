import { Clock, MapPin, MessageCircle } from "lucide-react";
import { WHATSAPP_DISPLAY_NUMBER, createWhatsAppLink } from "@/lib/order";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-heading font-bold text-lg">S</span>
              </div>
              <span className="font-heading font-bold text-xl">
                Sphe's <span className="text-primary">Vetkoeks</span>
              </span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Durban's favorite student comfort food. Fresh vetkoeks made with love, 
              delivered to your door.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={createWhatsAppLink({ intro: "Hi Sphe! I have a question about ordering vetkoeks." })}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{WHATSAPP_DISPLAY_NUMBER}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="w-4 h-4" />
                <span>UKZN, Durban & nearby residences</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Hours</h4>
            <ul className="space-y-2 text-background/70 text-sm">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>Mon - Fri: 10am - 6pm</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>Saturday: 11am - 4pm</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                <span>Sunday: Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-background/50 text-sm">
              © {currentYear} Sphe's Vetkoeks. All rights reserved.
            </p>
            <p className="text-background/50 text-sm">
              Made fresh in Durban
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
