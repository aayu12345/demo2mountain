"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="object-cover w-full h-full"
                    poster="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2940&auto=format&fit=crop"
                >
                    <source
                        src="https://videos.pexels.com/video-files/4763824/4763824-uhd_2560_1440_24fps.mp4"
                        type="video/mp4"
                    />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay */}
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white/90 text-sm md:text-base font-medium tracking-[0.2em] uppercase mb-4"
                >
                    Welcome to Salt Mountain
                </motion.h2>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-serif leading-tight max-w-4xl"
                >
                    Your Gateway to the <br /> Backwaters
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-white/80 max-w-2xl mb-10"
                >
                    Experience the perfect blend of mountain tranquility and coastal charm.
                    Luxury rentals managed by veterans who care.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mb-16"
                >
                    <Link
                        href="#properties"
                        className="px-8 py-4 bg-white text-slate-900 rounded-full font-semibold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 hover:scale-105 transform duration-200"
                    >
                        Explore Properties
                        <ArrowRight size={18} />
                    </Link>
                    <Link
                        href="#contact"
                        className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold hover:bg-white/20 transition-colors hover:scale-105 transform duration-200"
                    >
                        Contact Us
                    </Link>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/70"
            >
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </div>
    );
}
