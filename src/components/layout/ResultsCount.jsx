import React, {useContext} from 'react';
import { motion } from "motion/react";
import assets from '../../assets/assets';
import { FilterContext } from '../../context/filters/FilterContext';

const sections = assets.sections;

const ResultsCount = () => {
    const { search, selectedCategory } = useContext(FilterContext);
    

    const filtered = sections.filter((s) => {
        const matchesSearch =
            s.title.toLowerCase().includes(search.toLowerCase()) ||
            s.content.toLowerCase().includes(search.toLowerCase());
        
        const matchesCategory = selectedCategory === "all" || s.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-black mb-6"
        >
            Showing {filtered.length} of {sections.length} articles
        </motion.div>
    )
}

export default ResultsCount;