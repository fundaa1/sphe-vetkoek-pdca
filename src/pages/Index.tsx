import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import DeliverySection from "@/components/DeliverySection";
import Footer from "@/components/Footer";
import { ORDERING_AVAILABLE } from "@/lib/order";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        {!ORDERING_AVAILABLE && (
          <section id="ordering-unavailable" className="scroll-mt-24 bg-muted px-4 py-8 text-center" aria-labelledby="ordering-title">
            <h2 id="ordering-title" className="font-heading text-xl font-bold">Ordering details coming soon</h2>
            <p className="mt-2">The WhatsApp contact has not been configured. Please check back for ordering details.</p>
          </section>
        )}
        <MenuSection />
        <AboutSection />
        <DeliverySection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
