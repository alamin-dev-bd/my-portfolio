import React from 'react'
import { assets } from '../assets/asstes';
import { FaArrowRight } from 'react-icons/fa';
import { FaRegPaperPlane } from "react-icons/fa";
import { FaArrowDown } from 'react-icons/fa6';
import { BiMessageRoundedDetail } from "react-icons/bi";
import HeroBackground from './HeroBackground';



const Hero = () => {
    return (
        <div id='hero'>
            <div className='min-h-screen flex items-center pt-16 bg-hero  hero-orange'>
                <HeroBackground />
                <div className="w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-32 2xl:px-50 py-10 sm:py-12 md:py-16 lg:py-20">
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <div className='text-center lg:text-left group'>
                            <h1 className='text-5xl sm:text-7xl md:text-8xl font-bold font-SpaceGrotesk mb-10'>
                                <span className='text-zinc-800 dark:text-zinc-100'>Fullstack Developer</span>
                                <br />
                                <span className='text-orange-500'>Python</span>
                            </h1>
                            <p className='text-xl text-zinc-900 mb-6 dark:text-zinc-100'>
                                Hi, I'm Al Amin — a Creative Full-Stack Developer specializing in high-performance web applications. Designing and building modern websites that feel as good as they function.
                            </p>
                            <div className='flex flex-col md:flex-row items-center gap-4'>
                                <a href="#projects">
                                    <button data-cursor="view"
                                        data-cursor-label="Click"
                                        data-cursor-label-color="white"
                                        className='flex gap-2 items-center px-5 py-4 rounded-full bg-black border-2 text-white hover:border-orange-500 cursor-pointer hover:translate-x-1 transition-all duration-300'>
                                        <p className='font-bold'>View My Work</p>
                                        <FaArrowDown />

                                    </button>
                                </a>
                                <a href="#contact">
                                    <button data-cursor="view"
                                        data-cursor-label="View"
                                        data-cursor-label-color="Black"
                                        className='flex gap-2 items-center border border-slate-400 hover:border-orange-500 text-black px-9 py-4 rounded-full   cursor-pointer hover:translate-x-1 transition-all duration-300 bg-white'>
                                        <p className='font-bold '>Let's Talk</p>
                                        <FaRegPaperPlane />
                                    </button>
                                </a>
                            </div>
                        </div>
                        {/* right side cared */}
                        <div className="flex flex-col items-center lg:items-end gap-5 ">

                            {/* Terminal */}
                            <div className="w-full hero-m-width glass-panel rounded-2xl p-6 text-left border border-white/10 shadow-2xl reveal-element font-mono text-sm sm:text-base bg-white dark:bg-mist-950 floating">
                                <div className="flex items-center gap-2.5 mb-4 border-b border-white/10 pb-4">
                                    <span className="w-3.5 h-3.5 rounded-full bg-red-500/80 inline-block" />
                                    <span className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 inline-block" />
                                    <span className="w-3.5 h-3.5 rounded-full bg-green-500/80 inline-block" />
                                    <span className="text-sm text-subtleText  ml-2">dev-environment.ts</span>
                                </div>
                                <div className="space-y-1.5 text-slate-300">
                                    <p>
                                        <span className="text-[#BC13FE]">const</span>{" "}
                                        <span className="text-slate-800 dark:text-white">developer = {"{"}</span>
                                    </p>
                                    <p className="pl-5">
                                        <span className="text-[#00FFFF]">name</span>:{" "}
                                        <span className="text-emerald-400">'Al Amin'</span>,
                                    </p>
                                    <p className="pl-5">
                                        <span className="text-[#00FFFF]">role</span>:{" "}
                                        <span className="text-emerald-400">'Fullstack Developer'</span>,
                                    </p>
                                    <p className="pl-5">
                                        <span className="text-[#00FFFF]">stack</span>: [
                                        <span className="text-emerald-400"> 'React'</span>,{" "}
                                        <span className="text-emerald-400">'Tailwind'</span>,{" "}
                                        <span className="text-emerald-400">'Python'</span>,{" "}
                                        <span className="text-emerald-400">'Django' </span> ],
                                    </p>
                                    <p className="pl-5">
                                        <div className="text-emerald-400 flex items-center gap-1.5">
                                            <span className="text-[#00FFFF]">status</span>:{" "}
                                            <span>'Ready for new challenges </span>
                                            <span><BiMessageRoundedDetail /></span>
                                            <span> A </span>
                                            <span>'</span>
                                        </div>
                                    </p>
                                    <p className="text-slate-800">{"}"};</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Marquee */}
            <div className="w-full overflow-hidden border-y border-gray-200 py-5 marquee-section font-bold font-Manrope">

                <div className="flex w-max items-center gap-6 sm:gap-8 md:gap-10 animate-marquee text-lg sm:text-xl md:text-2xl tracking-[0.12em] text-black dark:text-white whitespace-nowrap">

                    {/* First copy */}
                    <span>CREATIVE DEVELOPMENT</span>
                    <b>✳</b>
                    <span>INTERACTIVE DESIGN</span>
                    <b>✳</b>
                    <span>FRONTEND MAGIC</span>
                    <b>✳</b>
                    <span>DJANGO BACKEND</span>
                    <b>✳</b>
                    <span>CLEAN CODE</span>
                    <b>✳</b>
                    <span>API HANDLING</span>
                    <b>✳</b>

                    {/* Second copy */}
                    <span>CREATIVE DEVELOPMENT</span>
                    <b>✳</b>
                    <span>INTERACTIVE DESIGN</span>
                    <b>✳</b>
                    <span>FRONTEND MAGIC</span>
                    <b>✳</b>
                    <span>DJANGO BACKEND</span>
                    <b>✳</b>
                    <span>CLEAN CODE</span>
                    <b>✳</b>
                    <span>API HANDLING</span>
                    <b>✳</b>

                </div>

            </div>
        </div>
    )
}

export default Hero