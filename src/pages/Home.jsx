import React from 'react';
import { motion } from 'motion/react';
import Hero from '../components/ui/Hero';
import assets from '../assets/assets';
import { Card } from '../components/ui/card';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Hero />
            <div className='p-10 '>
                <h2 className='font-normal text-3xl max-w-xl text-blue-950 py-2'>How This Documentation is Organized</h2>
                <p className='text-gray-600 mb-4'>The documentation is organized into several key sections, each designed to provide you with the information you need to effectively use the EAC platform. Here's a brief overview of what you'll find in each section:</p>
                <div  className='mt-6 text-sm text-gray-700  leading-relaxed'>
                    {
                        assets.sections.map(section => (
                            <motion.div className='mb-6' key={section.id} whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
                            <Link to={section.path} className=' hover:shadow-lg rounded-lg transition-shadow duration-300 block'>
                                <Card className='my-4 pl-12 p-6'>
                                    <h4 className='font-semibold text-xl text-blue-950 py-2'>{section.title}</h4>
                                    <p className='text-gray-600'>{section.description}</p>
                                </Card>
                            </Link>
                            </motion.div>    
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Home;