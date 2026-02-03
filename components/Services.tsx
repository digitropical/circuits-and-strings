import React from 'react';
import { SERVICES_DATA } from '../constants';
import { CheckCircle2 } from 'lucide-react';

const Services: React.FC = () => {
    return (
        <section id="services" className="py-32 px-6 bg-brand-bg">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-24">
                    <h2 className="text-sm tracking-[0.4em] uppercase text-[#d4af37] mb-4">Our Expertise</h2>
                    <h3 className="text-4xl md:text-5xl font-serif font-bold">Comprehensive Atelier Services</h3>
                    <div className="h-1 w-20 bg-[#d4af37] mx-auto mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {SERVICES_DATA.map((service, index) => (
                        <div 
                            key={index} 
                            className="group relative bg-[#1a1a1a] border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-700 flex flex-col h-full overflow-hidden"
                        >
                            {/* Card Image Header with Shimmer Placeholder */}
                            <div className="relative h-48 overflow-hidden bg-[#121212] shimmer-bg animate-shimmer">
                                <img 
                                    src={service.imageUrl} 
                                    alt={service.title}
                                    onLoad={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.parentElement?.classList.remove('animate-shimmer');
                                    }}
                                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent"></div>
                                <div className="absolute bottom-4 left-6 p-2 rounded-full glass-panel text-[#d4af37] transform group-hover:-translate-y-2 transition-transform duration-500 shadow-xl">
                                    {service.icon}
                                </div>
                            </div>

                            <div className="p-8 pt-4 flex flex-col flex-grow">
                                <h4 className="text-xl font-serif font-bold mb-4 group-hover:text-[#d4af37] transition-colors">{service.title}</h4>
                                <p className="text-[#999999] text-sm leading-relaxed mb-8">
                                    {service.description}
                                </p>
                                <ul className="space-y-3 mb-8 flex-grow">
                                    {service.features.map((feature, i) => (
                                        <li key={i} className="flex items-center gap-3 text-xs tracking-wide text-[#e0e0e0]/70">
                                            <CheckCircle2 className="w-3 h-3 text-[#d4af37]/40 group-hover:text-[#d4af37] transition-colors" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <a 
                                    href="#contact" 
                                    className="text-[10px] tracking-widest uppercase font-bold text-[#d4af37] group-hover:translate-x-2 transition-transform inline-flex items-center gap-2"
                                >
                                    Request Service <span>&rarr;</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;