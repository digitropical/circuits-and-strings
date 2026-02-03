// Import React to provide the React namespace for React.ReactNode.
import React from 'react';

export interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    imageUrl?: string;
}

export interface Testimonial {
    id: number;
    name: string;
    role: string;
    quote: string;
}

export interface PricingItem {
    label: string;
    price: string;
    note?: string;
}

export interface PricingSection {
    category: string;
    items: PricingItem[];
}