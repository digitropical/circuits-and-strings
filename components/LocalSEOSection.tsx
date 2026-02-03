
import React from 'react';
import { NEIGHBORHOODS } from '../constants';

const LocalSEOSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#1a1a1a]">
            <div className="max-w-4xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-12 items-start">
                    <div className="md:w-1/3">
                        <h2 className="text-3xl font-serif text-[#d4af37] sticky top-32">
                            Miami’s Premier <br/> Analog Workshop
                        </h2>
                    </div>
                    <div className="md:w-2/3 space-y-6 text-[#999999] leading-relaxed text-lg font-light">
                        <p>
                            Based in the heart of Miami, <strong className="text-[#e0e0e0]">Circuits & Strings</strong> provides professional luthier and electronics repair services that bridge the gap between old-world craftsmanship and modern technical precision.
                        </p>
                        <p>
                            From vintage tube amplifier restoration to complex headstock repairs on rare archtops, our bench is dedicated to the preservation of tone. We serve the greater Miami area with a focus on high-fidelity performance and aesthetic integrity.
                        </p>
                        <p>
                            Our clients span from local musicians in <span className="text-[#d4af37]/80">Wynwood</span> to elite recording studios in <span className="text-[#d4af37]/80">Brickell</span> and <span className="text-[#d4af37]/80">Coral Gables</span>. Whether you require a standard seasonal setup or a full circuit overhaul, our meticulous approach ensures your instrument returns better than the day it left the factory.
                        </p>
                        
                        <div className="pt-8 border-t border-[#d4af37]/10">
                            <h3 className="text-xs uppercase tracking-widest text-[#d4af37] mb-4">Neighborhood Service Areas</h3>
                            <div className="flex flex-wrap gap-x-6 gap-y-2">
                                {NEIGHBORHOODS.map(area => (
                                    <span key={area} className="text-sm hover:text-[#d4af37] transition-colors cursor-default">
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LocalSEOSection;
