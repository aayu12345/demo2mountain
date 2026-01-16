"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section id="about" className="py-32 bg-slate-900 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5"
                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '40px 40px' }}
            ></div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    {/* Visual Side - Video */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute -top-4 -left-4 w-full h-full border border-white/10 rounded-3xl translate-x-4 translate-y-4" />
                        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                                poster="https://cdn.pixabay.com/photo/2016/11/29/04/19/ocean-1867285_1280.jpg"
                            >
                                <source
                                    src="https://cdn.pixabay.com/video/2024/02/10/200044-911680190_large.mp4"
                                    type="video/mp4"
                                />
                                Your browser does not support the video tag.
                            </video>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />

                            <div className="absolute bottom-8 left-8 text-white">
                                <p className="font-serif italic text-2xl mb-2">"Service before self."</p>
                                <p className="text-sm font-sans tracking-widest uppercase opacity-70">The Salt Mountain Motto</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-emerald-500 font-sans font-medium tracking-[0.2em] uppercase text-sm mb-6 block"
                        >
                            Our Story
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl lg:text-5xl font-serif text-white mb-8 leading-tight"
                        >
                            Values Forged in <br />
                            <span className="italic text-white/50">Service</span>
                        </motion.h2>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-slate-400 text-lg leading-relaxed font-light"
                        >
                            <p>
                                Salt Mountain Properties was founded by three veterans—Mike, Tim, and Mitch.
                                In the military, we learned that integrity and attention to detail aren't just
                                buzzwords; they are the difference between success and failure.
                            </p>
                            <p>
                                We bring that same mission-critical mindset to property management.
                                We don't cut corners. We treat every guest's stay as a no-fail mission
                                and every owner's property as if it were our own.
                            </p>
                            <p>
                                When you stay with us, you're not just booking a room;
                                you're joining a community built on trust, honor, and exceptional service.
                            </p>
                        </motion.div>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="mt-10 px-10 py-4 bg-white text-slate-900 rounded-none font-sans font-bold hover:bg-emerald-500 hover:text-white transition-all tracking-wider"
                        >
                            MEET THE TEAM
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}
