import React from 'react'


const Contact = () => {
    return (
        <div className="  contact-bg w-full px-5 sm:px-8 md:px-12 lg:px-20 xl:px-30 2xl:px-35 py-10 md:py-16 lg:py-20" id="contact">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-16 items-stretch">
                {/* text */}
                <div className='order-1'>
                    <div className="flex flex-col justify-between gap-12 ">
                        <div>
                            <div className="flex flex-col justify-between gap-12 font-mono text-[10px] text-zinc-500 order-2 lg:order-1 mb-8">
                                <span className='text-sm font-bold font-mono'>04 / CONTACT</span>
                                <div className='text-xl font-bold font-mono text-orange-400'>
                                    <h5>HAVE A PROJECT IN MIND?</h5>
                                </div>
                            </div>

                            <h3 className="text-6xl sm:text-8xl md:text-9xl xl:text-[160px] font-bold font-Manrope leading-[0.9] tracking-tight mb-10">
                                Let's make
                                <br />
                                <span className="italic font-[Playfair_Display] text-orange-400">something</span>
                                <br />
                                great.
                            </h3>


                        </div>
                    </div>

                </div>

                {/* form */}
                <div className="flex flex-col justify-between gap-12 order-2 group mt-20 ">
                    <div className="glass-panel p-8 rounded-2xl border border-gray-200 ">
                        <form className="space-y-6 ">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-xs font-mono text-zinc-500 mb-2">
                                        YOUR NAME
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        placeholder="Full Name"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-zinc-800 focus:outline-none focus:border-orange-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label className="block text-xs font-mono text-zinc-500 mb-2">
                                        YOUR EMAIL
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        placeholder="Email Address Here"
                                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-zinc-800 focus:outline-none focus:border-orange-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-zinc-500 mb-2">
                                    SUBJECT
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Project Collaboration / Opportunity"
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-zinc-800 focus:outline-none focus:border-orange-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-mono text-zinc-500 mb-2">
                                    MESSAGE
                                </label>
                                <textarea
                                    rows={5}
                                    required
                                    placeholder="Tell me about your project or inquiry..."
                                    className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 text-sm text-zinc-800 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-4 rounded-xl bg-zinc-900 text-white font-medium text-sm hover:bg-orange-500 transition-all duration-300 flex items-center justify-center gap-2"
                            >
                                <span>Send Message</span>
                                <span>↗</span>
                            </button>
                        </form>
                    </div>

                </div>
            </div>
            <a
                href=" alamin.dev44@gmail.com"
                className="group hidden md:inline-flex items-center text-xl border-b hover:text-orange-500 border-zinc-400 pb-2 hover:border-orange-500 transition-colors group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 mt-2 "
            >
                alamin.dev44@gmail.com
                <span className="ml-2 text-orange-500 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                </span>
            </a>
        </div>
    )
}

export default Contact