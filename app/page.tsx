import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import Services from "@/components/Services";
import Footer from "@/components/Footer";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <AvailabilityCalendar />
      <Properties />
      <Services />
      <About />
      <Footer />
    </main>
  );
}
