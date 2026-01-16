"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import BookingWidget from "./BookingWidget";

export default function Hero() {
    return (
        <div className="relative h-screen w-full bg-slate-900">
            {/* Background Container - clipped */}
            <div className="absolute inset-0 overflow-hidden z-0">
                {/* Background Image Fallback */}
                <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{ backgroundImage: 'url("https://images.pexels.com/videos/855613/pictures/preview-0.jpg")' }}
                />

                {/* Background Video */}
                <div className="absolute inset-0 w-full h-full z-0">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="object-cover w-full h-full scale-105" // Slight scale to avoid borders
                        poster="https://images.pexels.com/videos/855613/pictures/preview-0.jpg"
                    >
                        <source
                            src="https://videos.pexels.com/video-files/855613/855613-hd_1920_1080_25fps.mp4"
                            type="video/mp4"
                        />
                        Your browser does not support the video tag.
                    </video>
                    {/* Advanced Gradient Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30" />
                </div>
            </div>

            {/* Content Container - Centered - Safe from overlap */}
            <div className="relative z-10 h-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center justify-center pt-32 lg:pt-48 pb-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    className="text-center"
                >
                    <span className="text-white/80 text-xs md:text-sm font-sans font-medium tracking-[0.3em] uppercase mb-4 block drop-shadow-md">
                        Salt Mountain Properties
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
                        Gateway to the <br />
                        <span className="italic font-light text-white/90">Backwaters</span>
                    </h1>

                    <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto mb-8 font-light leading-relaxed drop-shadow-md">
                        Experience the perfect blend of mountain tranquility and coastal charm.
                        Luxury rentals managed by veterans who care.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#properties"
                            className="px-8 py-3 bg-white text-slate-900 rounded-full font-sans font-bold hover:bg-emerald-50 transition-all flex items-center justify-center gap-2 hover:scale-105 duration-300 shadow-lg"
                        >
                            View Properties
                        </Link>
                        <Link
                            href="#contact"
                            className="px-8 py-3 bg-black/30 backdrop-blur-md border border-white/30 text-white rounded-full font-sans font-bold hover:bg-black/50 transition-all hover:scale-105 duration-300"
                        >
                            Contact Concierge
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Booking Widget - Straddling the bottom edge */}
            <div className="absolute bottom-0 left-0 right-0 z-30 translate-y-1/2 px-4">
                <BookingWidget />
            </div>

            {/* Scroll Arrow - Right aligned now for uniqueness */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 2 }}
                className="absolute bottom-24 right-12 z-20 hidden lg:block"
            >
                <div className="text-xs text-white/50 tracking-[0.3em] rotate-90 origin-right whitespace-nowrap">
                    SCROLL TO DISCOVER
                </div>
            </motion.div>
        </div>
    );
}
