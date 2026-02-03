import { useEffect, useState } from 'react';

/**
 * SeasonalHeroText Component
 * 
 * Displays animated hero text with seasonal color cycling to emphasize
 * the "All Seasons" branding. The animation cycles through four seasonal
 * color palettes with smooth transitions.
 * 
 * Design Philosophy:
 * - Subtle, continuous animation that reinforces brand identity
 * - Each season gets a distinct color that reflects Algarve climate
 * - Smooth transitions create a calming, professional effect
 * - Animation cycles every 12 seconds (3 seconds per season)
 */

interface SeasonalHeroTextProps {
  children: React.ReactNode;
  className?: string;
}

export default function SeasonalHeroText({ children, className = '' }: SeasonalHeroTextProps) {
  const [season, setSeason] = useState(0);

  // Seasonal color palette for "All-In-One" text
  // Each season represents a different climate context for Algarve
  const seasonColors = [
    { name: 'Spring', color: '#10b981', description: 'Fresh green - renewal and growth' },      // Emerald
    { name: 'Summer', color: '#ff9900', description: 'Warm orange - peak heat and sunshine' },   // Brand orange
    { name: 'Autumn', color: '#f59e0b', description: 'Golden amber - harvest and transition' },  // Amber
    { name: 'Winter', color: '#3b82f6', description: 'Cool blue - mild winters and comfort' },   // Blue
  ];

  useEffect(() => {
    // Cycle through seasons every 3 seconds, total 12-second loop
    const interval = setInterval(() => {
      setSeason((prev) => (prev + 1) % seasonColors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span
      className={`inline-block transition-colors duration-1000 ease-in-out ${className}`}
      style={{
        color: seasonColors[season].color,
      }}
      title={`${seasonColors[season].name}: ${seasonColors[season].description}`}
    >
      {children}
    </span>
  );
}
