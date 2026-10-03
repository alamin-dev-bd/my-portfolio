import { projectData } from '../assets/asstes'
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'

const services = [
    {
        number: '01',
        title: 'Web Design',
        description: 'Scroll animations, micro-interactions and cinematic transitions.',
        image: '/images/web-design.jpg',
    },
    {
        number: '02',
        title: 'Frontend Development',
        description: 'Semantic HTML, modern CSS and JavaScript interactions.',
        image: '/images/frontend.jpg',
    },
    {
        number: '03',
        title: 'React Development',
        description: 'Component-based interfaces built for real-world products.',
        image: '/images/motion.jpg',
    },
    {
        number: '04',
        title: 'Django Development',
        description: 'Creative Admin Dahsbord built for real-world products.',
        image: '/images/react.jpg',
    },
]

const Work = () => {

    const [activeImage, setActiveImage] = useState(null)

    const mousePosition = useRef({
        x: 0,
        y: 0,
    })

    const imagePosition = useRef({
        x: 0,
        y: 0,
    })

    const imageRef = useRef(null)

    const handleMouseMove = (e) => {
        mousePosition.current = {
            x: e.clientX,
            y: e.clientY,
        }
    }

    useEffect(() => {

        let animationFrame

        const animate = () => {

            imagePosition.current.x +=
                (mousePosition.current.x - imagePosition.current.x) * 0.12

            imagePosition.current.y +=
                (mousePosition.current.y - imagePosition.current.y) * 0.12

            if (imageRef.current) {
                imageRef.current.style.left =
                    `${imagePosition.current.x}px`

                imageRef.current.style.top =
                    `${imagePosition.current.y}px`
            }

            animationFrame = requestAnimationFrame(animate)
        }

        animate()

        return () => cancelAnimationFrame(animationFrame)

    }, [])
    return (
        <div id="projects" className='py-10 skills-gradient-soft'>
            <div className=" about-bg  mr-50 w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-40 2xl:px-50 py-2 md:py-4 lg:py-6">

                <div className="min-h-150 px-8 md:px-16 relative ">

                    {/* Section Label */}
                    <span className="absolute top-0 left-8 md:left-16 text-xs tracking-[0.2em] text-zinc-800 font-bold px-20">
                         // WHAT I DO
                    </span>

                    {/* Heading */}
                    <div className="pt-32 md:pt-24 flex justify-end ">
                        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-bold leading-[0.9] text-zinc-900 font-Manrope mt-40">
                            From idea
                            <br />
                            to <em className="text-orange-500 font-[Playfair_Display]">interface.</em>
                        </h1>
                    </div>

                </div>

            </div>

            <div
                className="relative max-w-7xl mx-auto py-12  "
            >

                <div className="px-5">

                    <div className="border-t border-zinc-200">

                        {services.map((service) => (

                            <div
                                key={service.number}
                                onMouseEnter={() => setActiveImage(service.image)}
                                onMouseLeave={() => setActiveImage(null)}
                                onMouseMove={handleMouseMove}
                                className=" group relative grid grid-cols-[50px_1fr] md:grid-cols-[70px_1.5fr_1fr_50px] items-center gap-5 md:gap-8 min-h-32.5 border-b border-zinc-200 transition-all duration-300 hover:bg-linear-to-r hover:from-orange-50 hover:via-orange-50/50 hover:to-white ">

                                {/* Number */}
                                <span className=" text-xs tracking-widest text-zinc-400 ">
                                    {service.number}
                                </span>


                                {/* Title */}
                                <h3 className=" text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-zinc-900 transition-all duration-300 group-hover:text-orange-600 ">
                                    {service.title}
                                </h3>


                                {/* Description */}
                                <p className=" hidden md:block max-w-xs text-sm leading-relaxed text-zinc-500 ">
                                    {service.description}
                                </p>


                                {/* Arrow */}
                                <div className="hidden md:flex justify-end">
                                    <span className=" text-zinc-400 transition-all duration-300 group-hover:text-orange-500 group-hover:translate-x-1 group-hover:-translate-y- ">
                                        ↗
                                    </span>
                                </div>

                            </div>

                        ))}

                    </div>

                </div>


                {/* Cursor Following Image */}

                {activeImage && (
                    <div
                        ref={imageRef}
                        className=" pointer-events-none fixed z-50 w-67.5 h-85 overflow-hidden rounded-2xl shadow-2xl -translate-y-1/2 "
                        style={{
                            left: `${imagePosition.current.x + 180}px`,
                            top: `${imagePosition.current.y}px`,
                        }}
                    >
                        <img
                            src={activeImage}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                )}

            </div>

            <div className='max-w-7xl mx-auto px-6 py-6 '>
                <div className='text-center mb-16'>
                    <span className="font-Sora text-sm font-bold tracking-widest uppercase">
                        02. Projects
                    </span>
                    <h2 className='text-4xl sm:text-5xl font-bold text-slate-800 mb-6'>Featured <span className='text-orange-400'>Projects</span></h2>
                    <p className='text-xl max-w-4xl mx-auto text-slate-800'>A selection of recent work — each built with performance, motion, and clean code in mind.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 lg:grid-cols-4'>
                    {
                        projectData.map((project, index) => (
                            <div key={index} className='group relative rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:translate-y-1 bg-white duration-300'>
                                <div className='relative flex items-center justify-center overflow-hidden w-full h-60'>
                                    <img src={project.image} alt={project.title} className='w-full h-60 object-cover group-hover:scale-110 transition-transform duration-300' />
                                    <div className='absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                        <p className='text-white text-lg font-semibold'>{project.title}</p>
                                    </div>
                                </div>
                                <div className='p-6 '>
                                    <h3 className='text-lg font-semibold text-slate-800 mb-2'>{project.title}</h3>
                                    <p className='text-slate-600 text-sm mb-2'>{project.description}</p>
                                </div>
                                <div className='px-6 pb-6'>
                                    {project.tech.map((tech, techIndex) => (
                                        <span key={techIndex} className='inline-block bg-gray-100 text-gray-800 text-xs font-medium mr-2 mb-2 px-4 py-1 rounded-full'>{tech}</span>
                                    ))}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Work