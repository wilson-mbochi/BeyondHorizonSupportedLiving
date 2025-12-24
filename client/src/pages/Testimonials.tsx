import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { useTestimonials } from "@/hooks/use-content";
import { Skeleton } from "@/components/ui/skeleton";
import communityImage from '@assets/stock_images/diverse_group_of_adu_d59229a3.jpg';

export default function Testimonials() {
  const { data: testimonials, isLoading, error } = useTestimonials();

  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <PageHeader 
        title="Success Stories" 
        subtitle="Hear from the individuals and families whose lives we've touched."
        image={communityImage}
      />

      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                  <Skeleton className="h-4 w-12 mb-4" />
                  <Skeleton className="h-24 w-full mb-6" />
                  <div className="flex items-center gap-4">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="space-y-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-3 w-16" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-red-500">Failed to load testimonials. Please try again later.</p>
            </div>
          )}

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial, idx) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-lg transition-all duration-300 flex flex-col relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-16 h-16 text-primary rotate-180" />
                </div>
                
                <div className="flex-1 mb-6 relative z-10">
                  <p className="text-muted-foreground leading-relaxed italic text-lg">
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">{testimonial.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {!isLoading && (!testimonials || testimonials.length === 0) && (
            <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-200">
              <p className="text-muted-foreground">No testimonials yet. Check back soon!</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
