import { ServiceHighlight } from "@/lib/serviceHighlights";

interface ServiceHighlightCardProps {
  service: ServiceHighlight;
  serviceName: string;
}

/**
 * ServiceHighlightCard Component
 * 
 * Displays tailored service recommendations for a specific municipality.
 * Shows service title, description, icon, and key benefits.
 */
export default function ServiceHighlightCard({
  service,
  serviceName,
}: ServiceHighlightCardProps) {
  const relevanceColors = {
    high: "border-l-4 border-l-primary bg-primary/5",
    medium: "border-l-4 border-l-blue-400 bg-blue-50/50",
    low: "border-l-4 border-l-slate-300 bg-slate-50/50",
  };

  const relevanceBadgeColors = {
    high: "bg-primary/20 text-primary",
    medium: "bg-blue-100 text-blue-700",
    low: "bg-slate-100 text-slate-600",
  };

  return (
    <div
      className={`p-6 rounded-lg ${relevanceColors[service.relevance]} transition-all hover:shadow-md`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-start gap-3 flex-1">
          <span className="text-3xl">{service.icon}</span>
          <div className="flex-1">
            <h4 className="font-bold text-lg text-slate-900">{service.title}</h4>
            <p className="text-xs text-slate-500 mt-1">
              {serviceName} in {service.title.split(" ").slice(-1)[0]}
            </p>
          </div>
        </div>
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full whitespace-nowrap ml-2 ${relevanceBadgeColors[service.relevance]}`}
        >
          {service.relevance === "high"
            ? "Highly Recommended"
            : service.relevance === "medium"
              ? "Recommended"
              : "Optional"}
        </span>
      </div>

      <p className="text-slate-700 text-sm mb-4">{service.description}</p>

      <div className="bg-white/60 rounded px-3 py-2 border border-slate-200/50">
        <p className="text-xs font-semibold text-slate-600 mb-1">Key Benefit:</p>
        <p className="text-sm font-semibold text-slate-900">{service.benefit}</p>
      </div>
    </div>
  );
}
