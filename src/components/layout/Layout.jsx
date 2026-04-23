import React from 'react';
import Header from './Header';
import Search from '../search/Search';
import { Outlet } from 'react-router';
import Categorynav from './Categorynav';
import ResultsCount from './ResultsCount';

const Layout = () => {
    return (
        <div className="min-h-screen bg-linear-to-br from-gray-100 via-gray-50 to-gray-100">
            <Header />
            <div className="max-w-6xl mx-auto px-4 py-6">
                <Search />
                <Categorynav />
                <ResultsCount />
            </div>

            <div className="max-w-6xl mx-auto flex gap-6 px-4 py-6">
                {/* Sidebar (optional for now) */}
                <aside className="w-64 hidden md:block">
                    {/* You can add navigation here later */}
                    EAC DOCUMENTATION
                </aside>

                {/* Main Content */}
                <main className="flex-1">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default Layout;