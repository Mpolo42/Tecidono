import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import InfoCards from "@/components/InfoCards";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="flex min-h-screen flex-col">
    <Header />
    <main className="flex-1">
      <HeroSection />
      <InfoCards />
    </main>
    <Footer />
  </div>
);

export default Index;
