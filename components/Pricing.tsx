
import React from 'react';
import { PRICING_DATA, TRANSPORT_PRICING } from '../constants';

const Pricing: React.FC = () => {
    return (
        <section id="pricing" className="py-32 bg-[#1a1a1a]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-sm tracking-[0.4em] uppercase text-[#d4af37] mb-4">Investment</h2>
                    <h3 className="text-4xl font-serif font-bold">Bench Fees & Services</h3>
                    <p className="mt-4 text-[#999999] max-w-xl mx-auto font-light">
                        Pricing reflects our commitment to premium parts and meticulous labor. Custom quotes provided after diagnostic.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-16">
                    {PRICING_DATA.map((section, idx) => (
                        <div key={idx}>
                            <h4 className="text-[#d4af37] tracking-widest uppercase text-xs font-bold mb-8 pb-4 border-b border-[#d4af37]/10">
                                {section.category}
                            </h4>
                            <div className="space-y-4">
                                {section.items.map((item, i) => (
                                    <div key={i} className="flex justify-between items-baseline gap-4 group cursor-default">
                                        <div className="flex flex-col">
                                            <span className="text-[#e0e0e0] group-hover:text-[#d4af37] transition-colors text-sm">{item.label}</span>
                                            {item.note && <span className="text-[10px] text-[#999999] uppercase tracking-tighter">{item.note}</span>}
                                        </div>
                                        <div className="flex-grow border-b border-dotted border-[#e0e0e0]/10 mb-1"></div>
                                        <span className="font-serif text-[#d4af37] text-sm">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-24">
                     <h4 className="text-[#d4af37] tracking-widest uppercase text-xs font-bold mb-8 pb-4 border-b border-[#d4af37]/10 text-center">
                        Transport & Logistics
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TRANSPORT_PRICING.map((tp, i) => (
                             <div key={i} className="flex justify-between items-center p-4 bg-[#121212] border border-[#d4af37]/5">
                                <span className="text-xs uppercase tracking-wider text-[#999999]">{tp.label}</span>
                                <span className="text-sm font-serif text-[#d4af37]">{tp.price}</span>
                             </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 p-8 border border-[#d4af37]/20 bg-[#121212] text-center max-w-2xl mx-auto">
                    <p className="text-sm text-[#999999] font-light">
                        <span className="text-[#d4af37] font-bold">Diagnostic Fee:</span> A non-refundable bench fee of <span className="text-[#e0e0e0] font-bold">$50</span> is required for all intake. This fee is credited towards the final cost of approved repairs.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
