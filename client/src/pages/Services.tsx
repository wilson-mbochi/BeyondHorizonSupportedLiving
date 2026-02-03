import { motion } from "framer-motion";
import { Check, Heart, Users, Clock, Truck, Home, Pill, Briefcase, Utensils, Activity } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import caregiverImage from "@assets/stock_images/caregiver_helping_sm_e40195a6.jpg";
import communityImage from "@assets/stock_images/diverse_group_of_adu_d59229a3.jpg";

const services = [
  { icon: Heart, title: "Dedicated Personal Care", description: "Compassionate assistance with daily living activities tailored to individual needs." },
  { icon: Clock, title: "Care Staff Including RNs 24/7", description: "Round-the-clock professional nursing and care support for peace of mind." },
  { icon: Briefcase, title: "Vocational Development", description: "Programs to build job skills and support meaningful employment opportunities." },
  { icon: Users, title: "Habilitation Support", description: "Services that help individuals develop and maintain skills for daily living." },
  { icon: Pill, title: "Medication Management", description: "Safe, accurate medication administration and health monitoring." },
  { icon: Activity, title: "Community Service Activities", description: "Engaging programs that connect individuals with their local community." },
  { icon: Truck, title: "Transportation & Errands", description: "Reliable transportation for appointments, shopping, and community outings." },
  { icon: Utensils, title: "Light Housekeeping & Meal Prep", description: "Assistance with household tasks and nutritious meal preparation." },
  { icon: Home, title: "Wellness Guidance & Counseling", description: "Support for mental and emotional well-being through professional guidance." },
];

const serviceCategories = [
  {
    title: "Supported Living",
    description: "24/7 support in shared or individual homes, designed to foster independence while ensuring safety and comprehensive care. Our trained staff provides continuous assistance tailored to each resident's unique needs.",
    features: ["Personal care assistance", "Meal preparation & nutrition", "Medication management", "Social activities & outings", "24/7 on-site support"]
  },
  {
    title: "Independent Living Support",
    description: "Outreach support for individuals living in their own homes who need assistance with daily tasks. We help maintain independence while providing the support needed to thrive.",
    features: ["Financial budgeting help", "Shopping assistance", "Appointment companionship", "Household management", "Community integration"]
  },
  {
    title: "Caregiver Collaboration",
    description: "We work closely with families and caregivers to ensure seamless, coordinated care. Our team maintains open communication and provides respite options when needed.",
    features: ["Family communication", "Care plan coordination", "Respite care options", "Flexible scheduling", "Progress updates"]
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored support solutions designed to meet unique needs and aspirations, empowering individuals to live fulfilling, independent lives.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive services designed to support every aspect of daily living.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <Card className="p-6 h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {serviceCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
              >
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-1 bg-primary rounded-full" />
                  <h2 className="text-3xl md:text-4xl font-bold">{category.title}</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                  <ul className="space-y-3 pt-4">
                    {category.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4">
                    <Link href="/contact">
                      <Button className="rounded-full px-8" data-testid={`button-enquire-${idx}`}>
                        Enquire About This Service
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={idx === 0 ? caregiverImage : communityImage}
                      alt={category.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Learn More?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can support you or your loved one.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg" data-testid="button-services-contact">
              Get in Touch
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
