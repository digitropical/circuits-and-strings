
import React, {useState} from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LocalSEOSection from './components/LocalSEOSection';
import Services from './components/Services';
import Pricing from './components/Pricing';
import PremiumServices from './components/PremiumServices';
import BookingForm from './components/BookingForm';
import Footer from './components/Footer';
import SchemaMarkup from './components/SchemaMarkup';

const App: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [input, setInput] = useState('');

    if (!isAuthenticated) {
        return (
            <div className="h-screen bg-[#121212] flex flex-col items-center justify-center gap-4">
                <input 
                    type="password" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="p-2 bg-[#1a1a1a] text-[#d4af37] border border-[#d4af37]"
                    placeholder="Enter Password"
                />
                <button 
                    onClick={() => input === 'jameson' && setIsAuthenticated(true)}
                    className="text-[#d4af37] border border-[#d4af37] px-4 py-2"
                >
                    Unlock
                </button>
            </div>
        );
    }
    return (
        <div className="min-h-screen font-sans selection:bg-[#d4af37] selection:text-[#121212]">
            <SchemaMarkup />
            <Navbar />
            
            <main>
                <Hero />
                <LocalSEOSection />
                <Services />
                <PremiumServices />
                <Pricing />
                <BookingForm />
            </main>

            <Footer />

            {/* Mobile Sticky CTA */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-[#121212] to-transparent pointer-events-none">
                <a 
                    href="#contact" 
                    className="pointer-events-auto block w-full py-4 bg-[#d4af37] text-[#121212] text-center text-xs tracking-widest font-bold uppercase shadow-[0_-10px_20px_rgba(0,0,0,0.5)]"
                >
                    Book Repair Bench
                </a>
            </div>
        </div>
    );
};

export default App;
