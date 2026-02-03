import { Star, MessageSquareQuote } from "lucide-react";
import { Button } from "@/components/ui/button";

const reviews = [
  {
    id: 1,
    author: "Dan & Team Client",
    text: "Dan & his team are reliable, tidy, efficient & friendly. Our new system is economically efficient. Highly recommended!",
    rating: 5,
    source: "Google Review"
  },
  {
    id: 2,
    author: "Air to Heat Client",
    text: "Good service and installation. The Air to Heat team did a good job. Professional and efficient service.",
    rating: 5,
    source: "Google Review"
  },
  {
    id: 3,
    author: "Algarve Resident",
    text: "Works were very professional, prices were reasonable, found the issue right away and got it sorted. HIGHLY recommend!",
    rating: 5,
    source: "Google Review"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
              Client Testimonials
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-outfit">
            Trusted by Homeowners Across the Algarve
          </h2>
          <p className="text-lg text-slate-600">
            See what our clients say about our premium HVAC and Solar installations. 
            We pride ourselves on 5-star service and aftercare.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative hover:shadow-md transition-shadow">
              <MessageSquareQuote className="absolute top-8 right-8 w-10 h-10 text-orange-100" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic relative z-10">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-500">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{review.author}</div>
                  <div className="text-sm text-slate-500">{review.source}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            asChild
            size="lg" 
            className="bg-white text-slate-900 border-2 border-slate-200 hover:bg-slate-50 hover:border-slate-300"
          >
            <a 
              href="https://share.google/zKoB6d1XPTznmOjkt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <img src="/google-logo.svg" alt="Google" className="w-5 h-5" onError={(e) => e.currentTarget.style.display = 'none'} />
              Read More Reviews on Google
            </a>
          </Button>
          <div className="mt-4 text-sm text-slate-500">
            Have we worked together? <a href="https://share.google/zKoB6d1XPTznmOjkt" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:underline font-medium">Leave us a review</a>
          </div>
        </div>
      </div>
    </section>
  );
}
