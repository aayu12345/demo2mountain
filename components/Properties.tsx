"use client";

import { motion } from "framer-motion";
import { Bed, Bath, Users, MapPin, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const properties = [
    {
        id: 1,
        title: "Three Dog Night Cabin",
        location: "Whittier, NC",
        type: "Mountain Retreat",
        guests: 8,
        beds: 4,
        baths: 3,
        image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070&auto=format&fit=crop",
        price: "From $250/night",
    },
    {
        id: 2,
        title: "Seaside Sanctuary",
        location: "North Topsail Beach, NC",
        type: "Beachfront Villa",
        guests: 10,
        beds: 5,
        baths: 4,
        image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
        price: "From $350/night",
    },
    {
        id: 3,
        title: "Coastal Breeze",
        location: "North Myrtle Beach, SC",
        type: "Ocean View Condo",
        guests: 6,
        beds: 3,
        baths: 2,
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
        price: "From $200/night",
    },
];

export default function Properties() {
    return (
        <section id="properties" className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4"
                    >
                        Featured Destinations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-600 max-w-2xl mx-auto"
                    >
                        From the serene heights of the Great Smoky Mountains to the pristine sands of the Atlantic Coast.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide text-slate-800">
                                    {property.type}
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-1">{property.title}</h3>
                                        <div className="flex items-center text-slate-500 text-sm">
                                            <MapPin size={16} className="mr-1" />
                                            {property.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 py-4 border-t border-b border-slate-100 mb-4">
                                    <div className="flex items-center gap-1.5 text-sm text-slate-600">
                                        <Users size={16} />
                                        <span>{property.guests} Guests</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-slate-600">
                                        <Bed size={16} />
                                        <span>{property.beds} Beds</span>
                                    </div>
                                    <div className="flex items-center gap-1.5 text-sm text-slate-600">
                                        <Bath size={16} />
                                        <span>{property.baths} Baths</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between">
                                    <div>
                                        <span className="text-2xl font-bold text-slate-900">{property.price}</span>
                                    </div>
                                    <button className="p-2 rounded-full bg-slate-100 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors">
                                        <ArrowUpRight size={20} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
