
import React from 'react';
import { PREMIUM_FEATURES } from '../constants';

const PremiumServices: React.FC = () => {
    return (
        <section className="py-32 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {PREMIUM_FEATURES.map((feature, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center p-10 border border-[#d4af37]/5 hover:bg-[#1a1a1a] transition-all">
                            <div className="w-16 h-16 rounded-full border border-[#d4af37] flex items-center justify-center text-[#d4af37] mb-8">
                                {feature.icon}
                            </div>
                            <h4 className="text-xl font-serif font-bold mb-4">{feature.title}</h4>
                            <p className="text-[#999999] font-light leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PremiumServices;
