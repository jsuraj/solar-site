import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <HeroSection />
        <Services />
      </main>
      <Footer />
    </>
  );
}
