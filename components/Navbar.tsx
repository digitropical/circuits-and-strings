
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'bg-[#121212]/95 backdrop-blur-md py-4 border-b border-[#d4af37]/20 shadow-2xl' : 'bg-transparent py-8'
        }`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-xl md:text-2xl font-serif tracking-widest text-[#d4af37] font-bold">
                        CIRCUITS & STRINGS
                    </span>
                </div>
                
                <div className="hidden md:flex gap-8 items-center text-sm tracking-widest uppercase font-medium">
                    <a href="#services" className="hover:text-[#d4af37] transition-colors">Services</a>
                    <a href="#pricing" className="hover:text-[#d4af37] transition-colors">Pricing</a>
                    <a href="#contact" className="px-6 py-2 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#121212] transition-all">
                        Book Bench
                    </a>
                </div>

                <div className="md:hidden">
                    <a href="#contact" className="text-xs tracking-widest font-bold text-[#d4af37] border border-[#d4af37] px-4 py-2 uppercase">
                        Book
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
