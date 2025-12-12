import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Catalog from "@/components/Catalog";
import Benefits from "@/components/Benefits";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <Benefits />
        <Gallery />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
