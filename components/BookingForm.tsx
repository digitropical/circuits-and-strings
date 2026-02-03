
import React, { useState } from 'react';

const BookingForm: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate API call
        setTimeout(() => setStatus('success'), 1500);
    };

    if (status === 'success') {
        return (
            <div className="p-12 text-center bg-[#1a1a1a] border border-[#d4af37]">
                <h3 className="text-3xl font-serif mb-4">Bench Reserved</h3>
                <p className="text-[#999999] mb-8">A technical specialist will review your request and contact you within 24 hours.</p>
                <button 
                    onClick={() => setStatus('idle')}
                    className="text-xs tracking-widest uppercase font-bold text-[#d4af37]"
                >
                    Submit another ticket
                </button>
            </div>
        );
    }

    return (
        <section id="contact" className="py-32 px-6 bg-[#1a1a1a]">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-20">
                    <div className="lg:w-1/3">
                        <h2 className="text-sm tracking-[0.4em] uppercase text-[#d4af37] mb-4">Intake</h2>
                        <h3 className="text-4xl font-serif font-bold mb-8">Start Your Repair Commission</h3>
                        <p className="text-[#999999] font-light leading-relaxed mb-12">
                            Provide details regarding your instrument and the symptoms observed. We prioritize quality over quantity—our bench space is strictly limited.
                        </p>
                        <div className="space-y-4 text-sm">
                            <div className="flex justify-between border-b border-[#e0e0e0]/10 pb-2">
                                <span className="text-[#d4af37]">Workshop Hours</span>
                                <span>Mon - Fri, 10am - 6pm</span>
                            </div>
                            <div className="flex justify-between border-b border-[#e0e0e0]/10 pb-2">
                                <span className="text-[#d4af37]">Primary Hub</span>
                                <span>Miami (Westchester), FL</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:w-2/3 bg-[#121212] p-8 md:p-12 shadow-2xl border border-[#d4af37]/10">
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-widest uppercase text-[#999999]">Full Name</label>
                                <input 
                                    required
                                    type="text" 
                                    className="w-full bg-[#1a1a1a] border border-[#e0e0e0]/10 px-4 py-3 text-[#e0e0e0] focus:border-[#d4af37] outline-none transition-all placeholder:text-[#333]"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-widest uppercase text-[#999999]">Email Address</label>
                                <input 
                                    required
                                    type="email" 
                                    className="w-full bg-[#1a1a1a] border border-[#e0e0e0]/10 px-4 py-3 text-[#e0e0e0] focus:border-[#d4af37] outline-none transition-all placeholder:text-[#333]"
                                    placeholder="john@studio.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-widest uppercase text-[#999999]">Service Category</label>
                                <select className="w-full bg-[#1a1a1a] border border-[#e0e0e0]/10 px-4 py-3 text-[#e0e0e0] focus:border-[#d4af37] outline-none transition-all">
                                    <option>Guitar/Bass Luthier</option>
                                    <option>Tube Amp & Electronics</option>
                                    <option>Pro Audio Electronics</option>
                                    <option>Piano/Keyboard Service</option>
                                    <option>Drum Restoration</option>
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] tracking-widest uppercase text-[#999999]">Transport Option</label>
                                <select className="w-full bg-[#1a1a1a] border border-[#e0e0e0]/10 px-4 py-3 text-[#e0e0e0] focus:border-[#d4af37] outline-none transition-all">
                                    <option>Standard Drop-Off (Westchester)</option>
                                    <option>Zone 1 Courier (0–5 miles)</option>
                                    <option>Zone 2 Courier (5–10 miles)</option>
                                    <option>Zone 3 Courier (10–20 miles)</option>
                                    <option>Zone 4 Courier (20–35 miles)</option>
                                    <option>HOTSHOT (Immediate Dispatch)</option>
                                    <option>On-Site Service Request</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="text-[10px] tracking-widest uppercase text-[#999999]">Problem Description / Specs</label>
                                <textarea 
                                    required
                                    rows={4}
                                    className="w-full bg-[#1a1a1a] border border-[#e0e0e0]/10 px-4 py-3 text-[#e0e0e0] focus:border-[#d4af37] outline-none transition-all resize-none placeholder:text-[#333]"
                                    placeholder="Please describe the noise, physical damage, or desired modification..."
                                ></textarea>
                            </div>

                            <div className="md:col-span-2 space-y-4">
                                <div className="flex items-center gap-3">
                                    <input type="checkbox" id="rush" className="w-4 h-4 accent-[#d4af37] bg-[#1a1a1a]" />
                                    <label htmlFor="rush" className="text-xs uppercase tracking-widest text-[#999999] cursor-pointer">
                                        Request 24hr Bench Rush (+$50)
                                    </label>
                                </div>
                                <div className="flex items-start gap-3">
                                    <input required type="checkbox" id="diag" className="mt-1 w-4 h-4 accent-[#d4af37] bg-[#1a1a1a]" />
                                    <label htmlFor="diag" className="text-[10px] leading-relaxed uppercase tracking-widest text-[#d4af37] cursor-pointer">
                                        I acknowledge the $50 non-refundable diagnostic fee (waived if repair is approved).
                                    </label>
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-4">
                                <button 
                                    type="submit"
                                    disabled={status === 'submitting'}
                                    className="w-full py-5 bg-[#d4af37] text-[#121212] tracking-widest uppercase font-bold hover:bg-[#a68a2e] transition-all disabled:opacity-50"
                                >
                                    {status === 'submitting' ? 'Transmitting...' : 'Submit Repair Ticket'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingForm;
