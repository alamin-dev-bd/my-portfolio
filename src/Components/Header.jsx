import React from 'react'
import { navMenu } from '../assets/asstes'
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";


const Header = () => {
  return (
    <div className="fixed w-full py-4 z-50 backdrop-blur-md">
      <div className="w-full px-5 sm:px-8 md:px-12 lg:px-22 xl:px-25 2xl:px-35">
        <div className="flex justify-between items-center gap-3">

          {/* Logo + Mobile Button */}
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div
              onClick={() => {
                const el = document.getElementById("hero");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="font-bold text-zinc-700 transition-all duration-300 hover:translate-x-1 group cursor-pointer flex items-center gap-1"
            >
              {/* Logo Image */}
              <img
                src="/logo.svg"
                alt="alamin.dev logo"
                className="w-8 h-8 md:w-16 md:h-16 object-contain group-hover:rotate-12 transition-transform duration-300 "
              />

              {/* Text */}
              <span className="text-slate-800 font-Manrope text-[22px] md:text-[40px]">
                alamin.
              </span>
              <span className="text-orange-500 text-lg md:text-3xl">dev</span>
            </div>

            {/* Mobile only - Available button next to logo */}
            <div className="flex md:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
              </span>
              <span>Available</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 border border-gray-200 rounded-full mx-auto px-10 py-4 bg-white">
            {navMenu.map((item) => (
              <a key={item.id} href={`#${item.id}`}>
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-zinc-200 text-sm font-medium text-zinc-700">
            <button className="px-3 py-1 rounded-full flex items-center gap-1 border bg-orange-50 border-orange-200">
              <span>Light</span>
              <GoDotFill className="text-orange-500 text-[20px]" />
            </button>

            <p>Available for selected projects</p>

            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header