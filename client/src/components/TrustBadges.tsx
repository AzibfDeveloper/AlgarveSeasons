import { Award, Zap, Star, Lightbulb } from "lucide-react";

/**
 * TrustBadges Component
 * 
 * Displays four distinct trust indicators:
 * 1. Daikin D1+ Premium Partner - highest Daikin accreditation
 * 2. 200+ Installations Since 2016 - proven track record
 * 3. 5-Star Google Reviews - customer satisfaction
 * 4. Tesla Powerwall Authorised Dealer - advanced technology
 * 
 * Responsive 4-column layout (2×2 on mobile)
 * Each badge includes icon, headline, and supporting subtext
 */
export default function TrustBadges() {
  const badges = [
    {
      icon: Award,
      title: "Daikin D1+ Premium Partner",
      subtitle: "Highest Daikin accreditation for installation quality and expertise.",
      color: "blue",
      bgGradient: "from-blue-50 to-blue-100",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      borderColor: "border-blue-200",
    },
    {
      icon: Zap,
      title: "200+ Installations Since 2016",
      subtitle: "AC, solar and heat pumps across the Algarve.",
      color: "orange",
      bgGradient: "from-orange-50 to-orange-100",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      icon: Star,
      title: "5★ Google Reviews",
      subtitle: "Rated 5.0 by Algarve homeowners.",
      color: "amber",
      bgGradient: "from-amber-50 to-amber-100",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      icon: Lightbulb,
      title: "Tesla Powerwall Authorised Dealer",
      subtitle: "Algarve Authorised Dealer for battery storage solutions.",
      color: "emerald",
      bgGradient: "from-emerald-50 to-emerald-100",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      borderColor: "border-emerald-200",
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Four-column badge grid - responsive to 2x2 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, idx) => {
            const IconComponent = badge.icon;
            return (
              <div
                key={idx}
                className={`bg-gradient-to-br ${badge.bgGradient} rounded-lg p-4 md:p-6 border ${badge.borderColor} shadow-sm hover:shadow-md transition-all`}
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  {/* Icon */}
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full ${badge.iconBg} flex items-center justify-center flex-shrink-0`}>
                    <IconComponent className={`w-5 h-5 md:w-6 md:h-6 ${badge.iconColor}`} />
                  </div>

                  {/* Title - short and readable */}
                  <h3 className="text-sm md:text-base font-bold text-slate-900 leading-tight">
                    {badge.title}
                  </h3>

                  {/* Subtext - smaller on mobile */}
                  <p className="text-xs md:text-sm text-slate-600 leading-snug">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
