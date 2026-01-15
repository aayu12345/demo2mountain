"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Heart, CircleDollarSign } from "lucide-react";

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
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4"
                    >
                        Why Choose Salt Mountain?
                    </motion.h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Whether you're a property owner or a guest, our veteran-led team is dedicated to excellence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-lg transition-all text-center group"
                        >
                            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                                <service.icon size={32} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
