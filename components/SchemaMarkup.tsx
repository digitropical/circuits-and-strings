
import React from 'react';

const SchemaMarkup: React.FC = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Circuits & Strings",
    "image": "https://picsum.photos/800/600?grayscale",
    "@id": "",
    "url": "https://circuitsandstrings.com",
    "telephone": "+1-305-555-0123",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Analog Lane",
      "addressLocality": "Miami",
      "addressRegion": "FL",
      "postalCode": "33131",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.7617,
      "longitude": -80.1918
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "10:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://facebook.com/circuitsandstrings",
      "https://instagram.com/circuitsandstrings"
    ],
    "priceRange": "$$$"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
