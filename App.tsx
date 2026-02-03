
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
    const [error, setError] = useState(''); // New state for error message

    const handleUnlock = (e: React.FormEvent) => {
        e.preventDefault(); // Prevents the page from refreshing
        if (input === 'jameson') {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('INCORRECT PASSWORD');
            setInput(''); // Optional: clears the field on fail
        }
    };

    if (!isAuthenticated) {
        return (
            <div className="h-screen bg-[#121212] flex flex-col items-center justify-center">
                <form onSubmit={handleUnlock} className="flex flex-col items-center gap-6">
                    <div className="text-center space-y-2">
                        <span className="text-[#d4af37] tracking-[0.4em] text-xs uppercase font-bold">
                            Restricted Access
                        </span>
                        {/* Error Message Display */}
                        <div className="h-4"> 
                            {error && (
                                <p className="text-red-500 text-[10px] tracking-widest uppercase font-bold animate-pulse">
                                    {error}
                                </p>
                            )}
                        </div>
                    </div>

                    <input 
                        autoFocus
                        type="password" 
                        value={input}
                        onChange={(e) => {
                            setInput(e.target.value);
                            setError(''); // Clear error when user types
                        }}
                        className="w-64 p-3 bg-[#1a1a1a] text-[#d4af37] border border-[#d4af37]/30 focus:border-[#d4af37] outline-none text-center tracking-widest transition-all"
                        placeholder="ENTER PASSWORD"
                    />
                    
                    <button 
                        type="submit"
                        className="px-8 py-3 bg-[#d4af37] text-[#121212] font-bold text-xs uppercase tracking-widest hover:bg-[#b5952f] transition-colors"
                    >
                        Unlock
                    </button>
                </form>
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
        </div>
    );
};

export default App;
