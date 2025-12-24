import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import caregiverImage from '@assets/stock_images/caregiver_helping_sm_e40195a6.jpg';

const services = [
  {
    title: "Supported Living",
    description: "24/7 support in shared or individual homes, designed to foster independence while ensuring safety and care.",
    features: ["Personal care assistance", "Meal preparation & nutrition", "Medication management", "Social activities & outings"]
  },
  {
    title: "Independent Living Support",
    description: "Outreach support for individuals living in their own homes who need a helping hand with daily tasks.",
    features: ["Financial budgeting help", "Shopping assistance", "Appointment companionship", "Household management"]
  },
  {
    title: "Respite Care",
    description: "Short-term care options providing relief for family caregivers while ensuring their loved ones are safe and happy.",
    features: ["Flexible scheduling", "Engaging activities", "Safe, welcoming environment", "Peace of mind for families"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <PageHeader 
        title="Our Services" 
        subtitle="Tailored support solutions designed to meet unique needs and aspirations."
        image={caregiverImage}
      />

      <section className="py-24">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-1 bg-primary rounded-full mb-6" />
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">{service.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-4 pt-4">
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center space-x-3 text-foreground">
                        <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6">
                    <Link href="/contact">
                      <Button className="rounded-full px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all">
                        Enquire About This Service
                      </Button>
                    </Link>
                  </div>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] bg-slate-100 rounded-3xl overflow-hidden shadow-2xl relative">
                    <div className="absolute inset-0 bg-primary/5 mix-blend-multiply" />
                    {/* In a real app, use specific images for each service */}
                    <img 
                      src={caregiverImage} 
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
