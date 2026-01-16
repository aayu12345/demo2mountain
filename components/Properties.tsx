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
        <section id="properties" className="relative py-32 overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2664&auto=format&fit=crop"
                    alt="Luxury Mountains"
                    fill
                    className="object-cover opacity-100"
                />
                <div className="absolute inset-0 bg-slate-900/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-slate-950/80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-emerald-400 font-sans font-medium tracking-[0.2em] uppercase text-sm mb-4 block"
                        >
                            Curated Collection
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6 leading-tight"
                        >
                            Featured <br /> Destinations
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-lg text-slate-300 font-light leading-relaxed max-w-lg"
                        >
                            Discover our hand-picked selection of properties, where the serenity of nature meets refined luxury living.
                        </motion.p>
                    </div>

                    <motion.button
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="hidden md:flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white hover:text-slate-900 transition-all group"
                    >
                        View All Properties
                        <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
                    </motion.button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative bg-white rounded-[2rem] overflow-hidden shadow-2xl hover:shadow-emerald-900/20 transition-all duration-500 hover:-translate-y-2 h-[500px]"
                        >
                            {/* Card Image */}
                            <div className="absolute inset-0 h-full w-full">
                                <Image
                                    src={property.image}
                                    alt={property.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                            </div>

                            {/* Card Content - Overlay */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider mb-4 border border-white/10">
                                        {property.type}
                                    </div>

                                    <h3 className="text-2xl font-serif mb-2">{property.title}</h3>
                                    <div className="flex items-center text-white/80 text-sm mb-6">
                                        <MapPin size={16} className="mr-2 text-emerald-400" />
                                        {property.location}
                                    </div>

                                    {/* Reveal on Hover/Always visible but subtle */}
                                    <div className="grid grid-cols-3 gap-2 py-4 border-t border-white/20 bg-white/5 backdrop-blur-sm rounded-xl px-4 mb-4">
                                        <div className="flex flex-col items-center gap-1 text-center">
                                            <span className="text-xs text-white/50 uppercase tracking-widest">Guests</span>
                                            <div className="flex items-center gap-1 font-medium">
                                                <Users size={14} /> {property.guests}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 text-center border-l border-white/10">
                                            <span className="text-xs text-white/50 uppercase tracking-widest">Beds</span>
                                            <div className="flex items-center gap-1 font-medium">
                                                <Bed size={14} /> {property.beds}
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 text-center border-l border-white/10">
                                            <span className="text-xs text-white/50 uppercase tracking-widest">Baths</span>
                                            <div className="flex items-center gap-1 font-medium">
                                                <Bath size={14} /> {property.baths}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between mt-2">
                                        <div>
                                            <p className="text-xs text-white/60 uppercase tracking-wider mb-1">Starting at</p>
                                            <span className="text-2xl font-serif text-emerald-400">{property.price}</span>
                                        </div>
                                        <div className="w-12 h-12 rounded-full bg-white text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300 shadow-lg">
                                            <ArrowUpRight size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <button className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-full hover:bg-white hover:text-slate-900 transition-all">
                        View All Properties
                        <ArrowUpRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
