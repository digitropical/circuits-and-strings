
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 px-6 border-t border-[#d4af37]/10">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
                <div className="text-center md:text-left">
                    <span className="text-2xl font-serif tracking-widest text-[#d4af37] font-bold block mb-2">
                        CIRCUITS & STRINGS
                    </span>
                    <p className="text-[#999999] text-xs tracking-widest uppercase">
                        Analog Excellence &bull; Miami, FL
                    </p>
                </div>
                
                <div className="flex gap-8 text-[10px] tracking-widest uppercase text-[#999999]">
                    <a href="#" className="hover:text-[#d4af37] transition-colors">Privacy</a>
                    <a href="#" className="hover:text-[#d4af37] transition-colors">Terms</a>
                    <a href="#" className="hover:text-[#d4af37] transition-colors">Instagram</a>
                    <a href="#" className="hover:text-[#d4af37] transition-colors">Email</a>
                </div>

                <div className="text-[10px] tracking-widest uppercase text-[#999999] text-center md:text-right">
                    &copy; {new Date().getFullYear()} CIRCUITS & STRINGS. <br/> 
                    Crafted for the Discerning Musician.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
