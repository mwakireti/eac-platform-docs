

import React from 'react'

const Hero = () => {
  return (
      <div className='w-full rounded-br-[150px] rounded-tl-[80px] bg-linear-to-r from-blue-50 to-purple-50 py-24 px-6'>
      <h1 className="text-blue-950 font-bold text-4xl md:text-5xl max-w-3xl leading-tight">
        Welcome to EAC Platform Documentation
      </h1>

      <p className="mt-6 text-gray-700 max-w-2xl text-lg leading-relaxed">
        This platform provides comprehensive guides, references, and tools to help you understand and use the EAC system effectively.
      </p>

      <p className="mt-4 text-gray-700 max-w-2xl leading-relaxed">
        Whether you're just getting started or looking to dive deeper into advanced features, you'll find everything you need right here in one place.
      </p>

    </div>
  )
}

export default Hero
