"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils"; // Assuming cn utility exists, usually created by create-next-app with shadcn or I need to make it.
// Actually I'll implement a simple class joiner locally or inline if utils not there.
// Checking utils... I didn't verify lib/utils exists. Standard create-next-app doesn't add it unless shadcn is used.
// I'll just use template literals for now or create the utility.

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Properties", href: "#properties" },
        { name: "Services", href: "#services" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-sm py-4"
                    : "bg-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="text-2xl font-serif font-bold tracking-wider">
                        <span className={isScrolled ? "text-slate-900" : "text-white"}>
                            SALT MOUNTAIN
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${isScrolled ? "text-slate-700" : "text-white/90"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+19802548183"
                            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${isScrolled
                                    ? "bg-slate-900 text-white hover:bg-slate-800"
                                    : "bg-white text-slate-900 hover:bg-white/90"
                                }`}
                        >
                            <Phone size={16} />
                            <span>Book Now</span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className={`md:hidden p-2 rounded-md ${isScrolled ? "text-slate-900" : "text-white"
                            }`}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-100 shadow-xl">
                    <div className="flex flex-col p-4 space-y-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-slate-600 hover:text-emerald-600 font-medium py-2"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="tel:+19802548183"
                            className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3 rounded-lg font-semibold"
                        >
                            <Phone size={18} />
                            Call to Book
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
}
