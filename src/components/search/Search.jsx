import React,{useContext} from 'react';
import Input from './Input';
import { motion } from "motion/react";
import {FilterContext} from '../../context/filters/FilterContext';

const Search = () => {
  const { search, setSearch } = useContext(FilterContext);
  return (
    <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Input
            placeholder="Search documentation..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-white text-black placeholder-gray-400 border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
          />
        </motion.div>
  )
}

export default Search;