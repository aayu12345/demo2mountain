import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Properties from "@/components/Properties";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <Hero />
      <Properties />
      <Services />

      {/* About Section (Inline for now) */}
      <section id="about" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 background-pattern" /> {/* Add a pattern if possible, or just dark */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Values Forged in Service</h2>
            <p className="text-lg text-white/80 mb-6 leading-relaxed">
              Salt Mountain Properties was founded by three veterans—Mike, Tim, and Mitch.
              Our mission is simple: to bring the core values of integrity, service, and excellence
              to the vacation rental market.
            </p>
            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              We understand what it means to serve, and we apply that same dedication to serving our
              guests and property owners. When you stay with us, you're not just booking a room;
              you're joining a community built on trust.
            </p>
            <button className="px-8 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full font-semibold transition-colors">
              Learn More About Us
            </button>
          </div>
          <div className="flex-1 relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder for founders image or generic handshake/team image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop")' }}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
