import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="bg-zinc-50">
            <footer className="border-t border-zinc-200 px-6 md:px-12 lg:px-40 pt-[clamp(2.5rem,6vh,4rem)] pb-6">

                {/* Footer top */}
                <div className="pb-[clamp(2rem,6vh,4rem)] flex flex-col md:flex-row items-start md:items-center justify-between gap-10">

                    {/* Back to top */}
                    <a
                        href="#hero"
                        className="inline-block text-[clamp(2.5rem,10vw,5.5rem)] tracking-tighter uppercase leading-none transition-colors duration-300 hover:text-orange-500"
                    >
                        Back to top ↑
                    </a>

                    {/* Social Links */}
                    <div className="glass-panel p-5 md:p-6 border rounded-2xl bg-white border-gray-200 w-full md:w-fit">
                        <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-4">
                            Connect Online
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href="https://github.com/alamin-dev-bd"
                                className="w-11 h-11 rounded-xl bg-black hover:bg-gray-900 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-white text-lg" />
                            </a>

                            <a
                                href="https://wa.me/message/J76OYGSH6PFUM1"
                                className="w-11 h-11 rounded-xl bg-black hover:bg-gray-900 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="text-white text-lg" />
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-xl bg-black hover:bg-gray-900 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedinIn className="text-white text-lg" />
                            </a>

                            <a
                                href="mailto:alamin.dev44@gmail.com"
                                className="w-11 h-11 rounded-xl bg-black hover:bg-gray-900 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                aria-label="Gmail"
                            >
                                <BiLogoGmail className="text-white text-lg" />
                            </a>

                            <a
                                href="#"
                                className="w-11 h-11 rounded-xl bg-black hover:bg-gray-900 border border-white/10 flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                                aria-label="Behance"
                            >
                                <FaBehance className="text-white text-lg" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer bottom */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between font-mono text-[0.66rem] tracking-wider uppercase text-zinc-500 pt-5 border-t border-zinc-200 text-center sm:text-left">
                    <span>© 2026 Alamin</span>
                    <span>Built with React · Tailwind CSS</span>
                    <span>--:--:-- BST</span>
                </div>

            </footer>
        </div>
    )
}

export default Footer