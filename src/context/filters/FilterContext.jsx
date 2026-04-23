import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
    const [search, setSearch] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");

    return (
        <FilterContext.Provider value={{ search, setSearch, selectedCategory, setSelectedCategory }}>
            {children}
        </FilterContext.Provider>
    )
}
