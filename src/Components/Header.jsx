import React from 'react'
import { navMenu } from '../assets/asstes'
import { Link } from 'react-router-dom'
import { GoDotFill } from "react-icons/go";


const Header = ({ darkMode, setDarkMode }) => {
  return (
    <div

      className="fixed inset-x-0 top-0 w-full py-4 z-50 backdrop-blur-md dark:bg-mist-950"
    >
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">

        <div className="flex justify-between items-center gap-3">

          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">

            <div
              data-cursor="contact"
              data-cursor-label="Click here"
              onClick={() => {
                const el = document.getElementById("hero");
                if (el) {
                  el.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="font-bold text-zinc-700 transition-all duration-300
                     hover:translate-x-1 group cursor-pointer
                     flex items-center gap-1"
            >
              <img
                data-cursor="contact"
                data-cursor-label="Click here"
                src="/logo.svg"
                alt="alamin.dev logo"
                className="w-8 h-8 md:w-16 md:h-16 object-contain
                group-hover:rotate-12 transition-transform duration-300"
              />

              <span className="text-slate-800 font-Manrope text-[20px] md:text-[40px] dark:text-gray-200">
                alamin.
              </span>

              <span className="text-orange-500 text-base md:text-3xl">
                dev
              </span>
            </div>
          </div>

          {/* Mobile Theme Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="px-3 py-1.5 rounded-full flex items-center gap-1
               border bg-orange-50 border-orange-200
               text-xs font-medium text-zinc-700 dark:bg-zinc-900 dark:text-gray-200 "
            >
              <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
              <GoDotFill className="text-orange-500 text-[16px]" />
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 border border-gray-200 rounded-full mx-auto px-10 py-4 bg-white dark:bg-zinc-900 dark:text-gray-200 font-bold dark:border-gray-800">
            {navMenu.map((item) => (
              <a
                data-cursor="contact"
                data-cursor-label="Click here"
                key={item.id}
                href={`#${item.id}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Desktop Button */}
          <div className="hidden md:inline-flex shrink-0 items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-zinc-200 dark:bg-zinc-900 dark:text-gray-200 text-sm font-medium text-zinc-700 dark:border-gray-800">

            <button
              data-cursor="hide"
              onClick={() => setDarkMode(!darkMode)}
              aria-label="Toggle theme"
              className="px-3 py-1 rounded-full flex items-center gap-1 border bg-orange-50 border-orange-200 shrink-0 dark:bg-zinc-900 dark:text-gray-200 cursor-pointer ">
              <span>{darkMode ? "🌙 Dark" : "☀️ Light"}</span>
              <GoDotFill className="text-orange-500 text-[20px]" />
            </button>

            <p className="whitespace-nowrap">
              Available for selected projects
            </p>

            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-orange-500"></span>
            </span>

          </div>

        </div >
      </div >
    </div >
  );
};

export default Header