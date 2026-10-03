import React from 'react'
import { skillsData } from '../assets/asstes'

const Skill = () => {
  return (
    <div id="capabilities" className='py-20 projects-bg '>
      <div className='max-w-7xl mx-auto px-6 py-6'>
        <div className='text-center mb-16'>
          <span className="font-Sora text-sm font-bold tracking-widest uppercase py-3">
              03. Capabilities
            </span>
          <h2 className='text-4xl sm:text-5xl font-bold text-slate-800 mb-6'>My <span className='text-orange-500'>Skills</span></h2>
          <p className='text-xl max-w-4xl mx-auto text-slate-800'>Here are some of the technologies and tools I've worked with:</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6 mb-12 lg:grid-cols-5'>
          {
            skillsData.map((skill, index) => (
              <div
                key={index}
                className="group relative rounded-2xl hover:shadow-lg transition cursor-pointer border border-gray-200 text-center hover:-translate-y-1 duration-300 p-6 bg-white"
              >
                <div className="relative flex items-center justify-center w-full h-28 mb-5">
                  <skill.icon className="w-16 h-16 text-orange-500 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  {skill.title}
                </h3>

                <p className="text-slate-600 text-sm">
                  {skill.technologies.join(', ')}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Skill