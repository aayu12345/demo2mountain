"use client";

import { useState } from "react";
import { Search, Calendar, Users, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

export default function BookingWidget() {
    const [guests, setGuests] = useState(2);
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="w-full z-30 px-4"
        >
            <div className="max-w-5xl mx-auto backdrop-blur-xl bg-black/40 border border-white/10 rounded-3xl md:rounded-full shadow-2xl p-2 flex flex-col md:flex-row gap-2 ring-1 ring-white/5">
                {/* Check In */}
                <div className="flex-1 relative group px-6 py-4 md:py-3 hover:bg-white/5 rounded-2xl md:rounded-full transition-colors cursor-pointer border-b md:border-b-0 md:border-r border-white/10">
                    <label className="block text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Check In</label>
                    <div className="flex items-center gap-3 text-white">
                        <Calendar size={16} className="text-white/70" />
                        <span className="text-sm font-medium">Add Dates</span>
                        {/* Hidden Input Overlay */}
                        <input
                            type="date"
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            value={checkIn}
                            onChange={(e) => setCheckIn(e.target.value)}
                        />
                    </div>
                </div>

                {/* Check Out */}
                <div className="flex-1 relative group px-6 py-4 md:py-3 hover:bg-white/5 rounded-2xl md:rounded-full transition-colors cursor-pointer border-b md:border-b-0 md:border-r border-white/10">
                    <label className="block text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Check Out</label>
                    <div className="flex items-center gap-3 text-white">
                        <Calendar size={16} className="text-white/70" />
                        <span className="text-sm font-medium">Add Dates</span>
                        {/* Hidden Input Overlay */}
                        <input
                            type="date"
                            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                            value={checkOut}
                            onChange={(e) => setCheckOut(e.target.value)}
                        />
                    </div>
                </div>

                {/* Guests */}
                <div className="flex-1 relative group px-6 py-4 md:py-3 hover:bg-white/5 rounded-2xl md:rounded-full transition-colors cursor-pointer border-b md:border-b-0 border-white/10 md:border-none">
                    <label className="block text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-1">Guests</label>
                    <div className="flex items-center gap-3 text-white justify-between">
                        <div className="flex items-center gap-3">
                            <Users size={16} className="text-white/70" />
                            <span className="text-sm font-medium">{guests} Guest{guests > 1 ? 's' : ''}</span>
                        </div>
                        <ChevronDown size={14} className="text-white/50" />
                    </div>
                    <select
                        value={guests}
                        onChange={(e) => setGuests(Number(e.target.value))}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full appearance-none"
                    >
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(n => (
                            <option key={n} value={n} className="text-slate-900">{n} Guest{n > 1 ? 's' : ''}</option>
                        ))}
                    </select>
                </div>

                {/* Search Button */}
                <button className="bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl md:rounded-full px-8 py-4 md:py-0 font-bold flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-emerald-500/30 active:scale-95 w-full md:w-auto md:min-w-[160px]">
                    <Search size={18} />
                    <span>Search</span>
                </button>
            </div>
        </motion.div>
    );
}
