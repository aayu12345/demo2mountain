import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-slate-900 text-white/80" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-serif font-bold text-white mb-6">SALT MOUNTAIN</h3>
                        <p className="mb-6 leading-relaxed">
                            Veteran-owned luxury property management and rentals. Creating unforgettable experiences in the mountains and on the coast.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                                <Instagram size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Quick Links</h4>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link>
                            </li>
                            <li>
                                <Link href="#properties" className="hover:text-emerald-400 transition-colors">Our Properties</Link>
                            </li>
                            <li>
                                <Link href="#services" className="hover:text-emerald-400 transition-colors">Property Management</Link>
                            </li>
                            <li>
                                <Link href="#about" className="hover:text-emerald-400 transition-colors">About Us</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="text-emerald-400 mt-1 shrink-0" />
                                <span>Serving North Carolina Mountains & Beaches</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={20} className="text-emerald-400 shrink-0" />
                                <a href="tel:+19802548183" className="hover:text-white transition-colors">+1 980-254-8183</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={20} className="text-emerald-400 shrink-0" />
                                <a href="mailto:mitch@saltmountainproperties.com" className="hover:text-white transition-colors">mitch@saltmountainproperties.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Mock) */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Stay Updated</h4>
                        <p className="mb-4 text-sm">Subscribe to receive special offers and updates.</p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full px-4 py-2 rounded bg-white/5 border border-white/10 focus:outline-none focus:border-emerald-400 text-white"
                            />
                            <button className="w-full py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Salt Mountain Properties. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
