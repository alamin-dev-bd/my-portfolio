import React from 'react'
import { assets } from '../assets/asstes';
import { profileData } from '../assets/asstes';
import { FaCode } from 'react-icons/fa6';

const about = () => {
  return (
    <div id='about' className='min-h-screen flex items-center pt-16 hero-grid about-bg'>
      <div className="py-8 px-6 relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left side */}
          <div className="lg:col-span-5">
            <h3 className="text-4xl px-4 sm:text-5xl font-bold text-slate-800 mb-8">
              About<span className="text-orange-500">Me</span>
            </h3>
            <div className="lg:col-span-5 relative reveal-element floating">
              <div className="relative rounded-2xl overflow-hidden glass-panel p-2 border border-white/10 group">
                {/* Image area */}
                <div className="relative w-90 h-100 lg:h-115 rounded-xl  overflow-hidden">

                  <img
                    src={assets.profileImg}
                    alt="Profile Image Here"
                    className="w-full h-full object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"></div>

                  {/* Text */}
                  <div className="absolute bottom-6 left-6 right-6 font-Sora">
                    <span className="text-xs text-[#FF5F1F] tracking-widest uppercase font-semibold">
                  // Full-Stack Craftsman
                    </span>

                    <h3 className="text-xl font-bold text-white mt-1">
                      BASED IN DHAKA, BD
                    </h3>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 reveal-element ">
            <span className="font-Sora text-sm font-bold tracking-widest uppercase">
              01. About Me
            </span>
            <h3 className="text-3xl sm:text-4xl font-bold leading-tight text-slate-800">
              Driven by Curiosity<span className="text-orange-500">,</span> <br />
              <span className="text-gradient-cyan">
                Obsessed with <span className="text-orange-500">Pixel</span> Perfection.
              </span>
            </h3>

            <p className="text-subtleText leading-relaxed font-Sora">
              I'm a Django & React Full-Stack Developer starting my journey in web development. I focus on writing clean code, building practical projects, and learning modern development practices. I'm excited to contribute to real products and grow with every challenge.
            </p>

            <p className="text-subtleText leading-relaxed font-Sora">
              Whether designing interactive WebGL visualizers, structuring serverless
              microservices, or tuning CSS layout performance, I thrive on turning
              complex problems into elegant, intuitive interfaces.
            </p>

            {/* bio card */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-6 ">
              {
                profileData.map((data, index) => (
                  <div key={index} className="w-full h-55 sm:w-50 p-6 border border-zinc-400 bg-white rounded-1xl hover:border-zinc-400 hover:border-b-zinc-800 hover:border-r-zinc-800 hover:border-b-4 hover:border-r-4 cursor-pointer transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <FaCode className="text-3xl text-orange-400 mb-4" />
                    <h1 className="text-lg font-semibold text-slate-800 mb-2">{data.title}</h1>
                    <p className="text-slate-600 text-sm">{data.description.join(', ')}</p>
                  </div>
                ))
              }
            </div>
            <div>
              <a
              href="/cv.pdf"
              download="Alamin_Fullstack_Developer_CV.pdf">
              <button className='flex gap-2 items-center px-5 py-4 rounded-full bg-slate-800 hover:bg-black border-2 text-white hover:border-orange-500 cursor-pointer hover:translate-x-1 transition-all duration-300'>
                <p className='font-bold'>Download Resume</p>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </div >
  )
}

export default about