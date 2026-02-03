import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-brand-bg">
            {/* Background Layer with Ken Burns Animation */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                <img 
                    src="https://images.unsplash.com/photo-1519423836910-49d53e49398c?auto=format&fit=crop&q=80&w=2400" 
                    alt="Close up of high-end electric guitar" 
                    className="w-full h-full object-cover opacity-20 animate-ken-burns"
                />
                
                {/* Subtle Moving Heat Glow (Micro Animation) */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vh] bg-brand-gold/10 rounded-full blur-[120px] animate-glow pointer-events-none"></div>

                {/* Vignette & Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-transparent to-[#121212]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/90 via-transparent to-[#121212]/90"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <div className="inline-block mb-6">
                    <h2 className="text-[#d4af37] text-sm md:text-base tracking-[0.4em] uppercase opacity-90">
                        Crafting Tone in Miami
                    </h2>
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent mt-2"></div>
                </div>
                
                <h1 className="text-5xl md:text-8xl font-serif font-bold mb-8 leading-tight tracking-tight text-[#e0e0e0]">
                    Premium Guitar, Amp <br className="hidden md:block"/> & Audio Repair
                </h1>
                
                <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                    Luxury analog repair, meticulous restoration & white-glove service for discerning musicians and professional studios.
                </p>
                
                <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                    <a 
                        href="#contact" 
                        className="group relative overflow-hidden w-full md:w-auto px-10 py-5 bg-[#d4af37] text-[#121212] text-sm tracking-widest font-bold uppercase transition-all shadow-2xl"
                    >
                        <span className="relative z-10">Book Repair Bench</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </a>
                    <a 
                        href="#services" 
                        className="w-full md:w-auto px-10 py-5 border border-[#e0e0e0]/20 text-[#e0e0e0] text-sm tracking-widest font-bold uppercase hover:border-[#d4af37] hover:text-[#d4af37] transition-all"
                    >
                        View Services
                    </a>
                </div>
            </div>

        </section>
    );
};

export default Hero;