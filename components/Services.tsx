"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Heart, CircleDollarSign } from "lucide-react";
import Image from "next/image";

const services = [
    {
        icon: ShieldCheck,
        title: "Property Management",
        description: "Full-service management for your vacation rental. We handle everything from listings to maintenance.",
    },
    {
        icon: Sparkles,
        title: "Professional Cleaning",
        description: "Hotel-grade cleaning services ensuring every guest arrives to a pristine environment.",
    },
    {
        icon: Heart,
        title: "Guest Experience",
        description: "24/7 support for guests, ensuring 5-star reviews and repeat bookings.",
    },
    {
        icon: CircleDollarSign,
        title: "Revenue Optimization",
        description: "Dynamic pricing strategies to maximize your occupancy and income throughout the year.",
    },
];

export default function Services() {
    return (
        <section id="services" className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2670&auto=format&fit=crop")' }}>
            {/* Soft White Overlay for readability */}
            <div className="absolute inset-0 bg-white/60 backdrop-blur-[2px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="max-w-3xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-emerald-700 font-sans font-semibold tracking-wider uppercase text-sm mb-4 block"
                        >
                            The Salt Mountain Standard
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-slate-900 mb-6 leading-tight"
                        >
                            Excellence in every interaction.
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-slate-600 leading-relaxed max-w-2xl"
                        >
                            Whether you're a property owner or a guest, our veteran-led team brings military-grade precision to hospitality.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
                    {/* First Large Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="md:col-span-1 bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group h-full min-h-[350px]"
                    >
                        <div>
                            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-700 mb-8 group-hover:scale-110 transition-transform">
                                <ShieldCheck size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Property Management</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Full-service management for your vacation rental. From listing optimization to 24/7 maintenance, we handle the details so you can enjoy the revenue.
                            </p>
                        </div>
                    </motion.div>

                    {/* Second Card (Dark Mode Highlight) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="md:col-span-1 bg-slate-900/95 backdrop-blur-md text-white rounded-[2.5rem] p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-800 flex flex-col justify-between group h-full min-h-[350px]"
                    >
                        <div>
                            <div className="w-14 h-14 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center text-white mb-8 group-hover:scale-110 transition-transform">
                                <Heart size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-white mb-4">Guest Experience</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We don't just host; we curate experiences. Our 24/7 concierge support ensures 5-star reviews and repeat bookings for years to come.
                            </p>
                        </div>
                    </motion.div>

                    {/* Third Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="md:col-span-1 bg-white/80 backdrop-blur-md rounded-[2.5rem] p-8 lg:p-10 shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col justify-between group h-full min-h-[350px]"
                    >
                        <div>
                            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-700 mb-8 group-hover:scale-110 transition-transform">
                                <CircleDollarSign size={28} />
                            </div>
                            <h3 className="text-2xl font-serif font-medium text-slate-900 mb-4">Revenue Optimization</h3>
                            <p className="text-slate-600 leading-relaxed">
                                Our dynamic pricing algorithms analyze market demand in real-time to maximize occupancy and ensure you get the best daily rate.
                            </p>
                        </div>
                    </motion.div>

                    {/* Fourth Wide Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="md:col-span-3 bg-emerald-900/95 backdrop-blur-md text-white rounded-[2.5rem] p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group min-h-[300px] flex items-center"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-800/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8 w-full">
                            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-3xl flex items-center justify-center text-white shrink-0 group-hover:rotate-12 transition-transform duration-500">
                                <Sparkles size={40} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-3xl font-serif font-medium text-white mb-4">Pristine Standards</h3>
                                <p className="text-emerald-100 text-lg max-w-2xl leading-relaxed">
                                    Cleanliness is our hallmark. We utilize hotel-grade cleaning protocols and rigorous quality checks to certify that every property is immaculate before arrival.
                                </p>
                            </div>
                            <div className="hidden md:block">
                                <button className="px-8 py-4 bg-white text-emerald-950 rounded-full font-bold hover:bg-emerald-50 transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
