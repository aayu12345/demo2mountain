"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";

const properties = [
    { id: 1, name: "Good Life Cabin 1 - Rustic Log Cabin", image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&auto=format&fit=crop" },
    { id: 2, name: "3 Dog Night Cabin - Hot Tub | Firepit | Big Views", image: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&auto=format&fit=crop" },
    { id: 3, name: "Good Life Cabin 2 - Bryson City Cabin", image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800&auto=format&fit=crop" },
    { id: 4, name: "Ocean Pier 304 - Ocean View Condo", image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&auto=format&fit=crop" },
    { id: 5, name: "The Squatch Nest - Scenic Mountain Retreat", image: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?w=800&auto=format&fit=crop" },
    { id: 6, name: "Hawk's Nest - Holden Beach", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop" },
    { id: 7, name: "Hummingbird Hill - Big Views", image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800&auto=format&fit=crop" },
];

const mockAvailability: Record<number, number[]> = {
    1: [14, 15, 23, 24, 25],
    2: [16, 17, 18],
    3: [15, 16, 19],
    4: [14, 15, 16, 17, 18, 19, 20],
    5: [21, 22],
    6: [],
    7: [13, 14, 27, 28],
};

const days = Array.from({ length: 31 }, (_, i) => i + 1);

export default function AvailabilityCalendar() {
    const [currentMonth, setCurrentMonth] = useState("January 2026");

    return (
        <section className="pt-40 pb-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Availability Calendar</h2>
                    <p className="text-slate-600">Plan your perfect getaway. Check availability across all our premium properties.</p>
                </div>

                <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8 text-white">
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <ChevronLeft size={24} />
                        </button>
                        <h3 className="text-2xl font-serif tracking-widest uppercase">{currentMonth}</h3>
                        <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    {/* Calendar Grid Container */}
                    <div className="overflow-x-auto pb-4">
                        <div className="min-w-[800px]">
                            {/* Days Header */}
                            <div className="grid grid-cols-[300px_1fr] gap-4 mb-4 text-white/50 text-xs font-bold uppercase tracking-wider">
                                <div className="pl-4">Properties</div>
                                <div className="grid grid-cols-[repeat(31,minmax(0,1fr))] gap-1">
                                    {days.map(d => (
                                        <div key={d} className="text-center">{d}</div>
                                    ))}
                                </div>
                            </div>

                            {/* Properties Rows */}
                            <div className="space-y-2">
                                {properties.map(property => (
                                    <div key={property.id} className="grid grid-cols-[300px_1fr] gap-4 items-center group">
                                        {/* Property Info */}
                                        <div className="bg-slate-800/50 p-3 rounded-lg flex items-center gap-3 border border-white/5 hover:border-emerald-500/50 transition-colors">
                                            <div className="relative w-10 h-10 rounded overflow-hidden shrink-0">
                                                <Image src={property.image} alt={property.name} fill className="object-cover" />
                                            </div>
                                            <span className="text-white text-sm font-medium truncate">{property.name}</span>
                                        </div>

                                        {/* Days Grid */}
                                        <div className="grid grid-cols-[repeat(31,minmax(0,1fr))] gap-1 h-10">
                                            {days.map(day => {
                                                const isBooked = mockAvailability[property.id]?.includes(day);
                                                return (
                                                    <div
                                                        key={day}
                                                        className={`rounded-sm transition-all duration-300 relative group/day ${isBooked
                                                            ? "bg-blue-500/80 cursor-not-allowed"
                                                            : "bg-emerald-500/20 hover:bg-emerald-500/40 cursor-pointer"
                                                            }`}
                                                    >
                                                        {isBooked && (
                                                            <span className="hidden group-hover/day:block absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-slate-900 text-white text-[10px] px-2 py-1 rounded shadow-xl whitespace-nowrap z-10 border border-white/10">
                                                                Booked
                                                            </span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-6 mt-6 text-sm text-white/60 justify-end px-4">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-emerald-500/20 rounded-sm"></div>
                            <span>Available</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-blue-500/80 rounded-sm"></div>
                            <span>Booked</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
