import React from 'react';
import { 
    Guitar, 
    Zap, 
    Mic2, 
    Music, 
    Truck, 
    Clock, 
    Settings 
} from 'lucide-react';
import { ServiceCardProps, PricingSection, Testimonial } from './types';

export const NEIGHBORHOODS = [
    'Brickell', 'Coral Gables', 'Doral', 'Kendall', 'Miami Beach', 'Wynwood', 'Coconut Grove', 'Westchester'
];

export const SERVICES_DATA: ServiceCardProps[] = [
    {
        title: "Luthier Services",
        description: "Exquisite setup and structural restoration for electric, acoustic, and bass guitars.",
        icon: <Guitar className="w-8 h-8 text-[#d4af37]" />,
        features: ["Precision Fretwork", "Bone Nut Fabrication", "Floyd Rose Specialist", "Nitro Refinishing"],
        imageUrl: "https://images.unsplash.com/photo-1525201548942-d8b8bb66ecfb?auto=format&fit=crop&q=80&w=1200"
    },
    {
        title: "Tube Amp & Electronics",
        description: "Meticulous bench service for vintage and boutique analog amplification and pedals.",
        icon: <Zap className="w-8 h-8 text-[#d4af37]" />,
        features: ["Bias & Retube", "Capacitor Jobs", "Pedal Modifications", "Point-to-Point Rewiring"],
        imageUrl: "https://images.unsplash.com/photo-1560023602-41617565b90a?auto=format&fit=crop&q=80&w=1200"
    },
    {
        title: "Pro Audio Repair",
        description: "Studio-grade maintenance for outboard gear, monitors, and analog consoles.",
        icon: <Mic2 className="w-8 h-8 text-[#d4af37]" />,
        features: ["Monitor Reconing", "Console Cleaning", "Path Calibration", "Power Supply Repair"],
        imageUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80&w=1200"
    },
    {
        title: "Drums & Piano",
        description: "White-glove tuning and technical support for acoustic pianos and percussion.",
        icon: <Music className="w-8 h-8 text-[#d4af37]" />,
        features: ["Piano Tuning", "Pitch Raising", "Drum Head Swaps", "Hardware Restoration"],
        imageUrl: "https://images.unsplash.com/photo-1552422535-c45813c61732?auto=format&fit=crop&q=80&w=1200"
    }
];

export const PRICING_DATA: PricingSection[] = [
    {
        category: "Guitar & Bass Luthier",
        items: [
            { label: "Standard Setup (Electric/Bass)", price: "$65", note: "Truss, Action, Intonation" },
            { label: "Floyd Rose / Floating Trem Setup", price: "$85" },
            { label: "Bone Nut Fabrication", price: "$90" },
            { label: "Fret Level, Crown & Polish", price: "$140" },
            { label: "Pickup Install (1-2 Pickups)", price: "$60" },
            { label: "Full Rewire (Pots, Switch, Jack)", price: "$100" },
            { label: "Acoustic Pickup Install", price: "$80" },
            { label: "Output Jack Repair", price: "$35" }
        ]
    },
    {
        category: "Tube Amp & Electronics",
        items: [
            { label: "Diagnostic Bench Fee", price: "$50", note: "Waived with repair" },
            { label: "Bias & Retube Service", price: "$80", note: "+ Cost of tubes" },
            { label: "Capacitor Job (Recap)", price: "$120 – $180" },
            { label: "Transformer Replacement", price: "$100", note: "+ Part cost" },
            { label: "Solid State Repair", price: "$80 Flat" },
            { label: "Effect Pedal Switch Repair", price: "$40" },
            { label: "Input Jack PCB Repair", price: "$50" },
            { label: "Potentiometer Cleaning", price: "$30" }
        ]
    },
    {
        category: "Pro Audio Repair",
        items: [
            { label: "Subwoofer Reconing (15\"-18\")", price: "$120", note: "+ Kit cost" },
            { label: "Horn Diaphragm Replacement", price: "$60", note: "+ Part cost" },
            { label: "Passive Crossover Repair", price: "$80" },
            { label: "Studio Monitor Repair", price: "$90" },
            { label: "Analog Console Cleaning", price: "$15", note: "Per channel" },
            { label: "Power Supply Repair", price: "$100" },
            { label: "Fader Replacement", price: "Quote" },
            { label: "Digital/Firmware", price: "N/A", note: "Analog only" }
        ]
    },
    {
        category: "Drums & Piano Services",
        items: [
            { label: "Standard Piano Tuning", price: "$150", note: "Upright/Grand" },
            { label: "Pitch Raise (>1yr since tune)", price: "+$50" },
            { label: "Broken String Replacement", price: "$40", note: "+ String cost" },
            { label: "Action Regulation", price: "Quote" },
            { label: "Snare Drum Tuning & Head Swap", price: "$25" },
            { label: "Full Kit Tuning (5 Piece)", price: "$75" },
            { label: "Hardware Repair (Pedals/Stands)", price: "$40/hr" },
            { label: "Bearing Edge Restoration", price: "Quote" }
        ]
    }
];

export const TRANSPORT_PRICING = [
    { label: "Standard Drop-Off (Westchester)", price: "Free" },
    { label: "Zone 1 (0–5 miles)", price: "$25" },
    { label: "Zone 2 (5–10 miles)", price: "$45" },
    { label: "Zone 3 (10–20 miles)", price: "$75" },
    { label: "Zone 4 (20–35 miles)", price: "$125" },
    { label: "HOTSHOT (Immediate Dispatch)", price: "Quote" },
    { label: "On-Site Service Call", price: "Quote" }
];

export const PREMIUM_FEATURES = [
    {
        title: "White Glove Transport",
        description: "Insured door-to-door concierge transport for your prized collection.",
        icon: <Truck className="w-6 h-6" />
    },
    {
        title: "24hr Bench Rush",
        description: "Emergency turnaround available for touring professionals and session dates.",
        icon: <Clock className="w-6 h-6" />
    },
    {
        title: "On-Site Calibration",
        description: "Piano tuning and studio maintenance performed at your location.",
        icon: <Settings className="w-6 h-6" />
    }
];

export const TESTIMONIALS: Testimonial[] = [
    {
        id: 1,
        name: "Julian V.",
        role: "Lead Guitarist, Touring Professional",
        quote: "The only shop in South Florida I trust with my 1954 Strat. Their attention to detail on fretwork is unmatched."
    },
    {
        id: 2,
        name: "Elena S.",
        role: "Recording Engineer, Ocean Drive Studios",
        quote: "They revitalized our vintage Neve preamps. Truly world-class craftsmanship right here in Miami."
    }
];