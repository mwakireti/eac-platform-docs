import React,{useContext, useState, useEffect} from 'react';
import Input from './Input';
import { motion } from "motion/react";
import {FilterContext} from '../../context/filters/FilterContext';

const Search = () => {
  const { search, setSearch } = useContext(FilterContext);
  const [isFixed, setIsFixed] = useState(false);

  console.log(isFixed)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [window.scrollY])

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`w-full flex justify-around mx-auto ${isFixed ? 'fixed top-0 left-0 right-0 z-50 bg-linear-to-br from-gray-100 via-gray-50 to-gray-100 py-8 shadow-gray-100' : 'relative'} transition-all duration-300 ease-in-out mb-8`}
        >
          <Input
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-4xl mx-auto px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>
  )
}

export default Search;