import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Heart, Users, Home as HomeIcon, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import heroImage from '@assets/stock_images/supportive_care_envi_147ab1ca.jpg';
import communityImage from '@assets/stock_images/diverse_group_of_adu_d59229a3.jpg';

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Warm supportive living environment" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/30" />
        </div>

        <div className="container relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span>Compassionate care for everyone</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-6 leading-[1.1]">
                Your Life, <br />
                Your Choice, <br />
                <span className="text-primary">Your Support.</span>
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-lg">
                We provide tailored supported living services that empower adults with varying care needs to live independently and with dignity.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-xl shadow-primary/20 hover:shadow-2xl hover:-translate-y-1 transition-all">
                    Get Started
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="outline" size="lg" className="text-lg px-8 py-6 rounded-full bg-white/50 border-2 hover:bg-white hover:border-primary/50 transition-all">
                    Explore Services
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/30 rounded-3xl transform -rotate-3 z-0" />
              <img 
                src={communityImage} 
                alt="Community gathering" 
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
              <div className="absolute bottom-8 right-8 z-20 bg-white p-6 rounded-xl shadow-xl max-w-xs hidden md:block">
                <div className="flex items-center space-x-2 text-primary font-bold mb-2">
                  <Heart className="w-5 h-5 fill-current" />
                  <span>Our Promise</span>
                </div>
                <p className="text-sm text-muted-foreground">"To create a world where everyone belongs and thrives."</p>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Empowering Independence Through Community
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Beyond Horizon, we believe that support isn't just about meeting needs—it's about enabling dreams. Our approach is centered on the individual, fostering environments where people feel safe, valued, and connected.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalized care plans for every individual",
                  "Focus on skill-building and independence",
                  "Strong community integration and social activities",
                  "24/7 compassionate support staff"
                ].map((item, i) => (
                  <li key={i} className="flex items-center space-x-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-secondary/20 text-secondary flex items-center justify-center">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <Button variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 pl-0 font-semibold text-lg group">
                  Learn more about us <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">Why Choose Beyond Horizon?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">We go beyond basic care to provide a holistic living experience that nurtures growth and happiness.</p>
        </div>

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: HomeIcon,
                title: "Homely Environments",
                desc: "Comfortable, modern living spaces that truly feel like home, adapted to individual needs."
              },
              {
                icon: Users,
                title: "Community Focused",
                desc: "Building meaningful connections through shared activities and local community engagement."
              },
              {
                icon: Star,
                title: "Quality of Care",
                desc: "Highly trained, compassionate staff dedicated to maintaining the highest standards of support."
              }
            ].map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100 transition-all hover:shadow-xl hover:border-primary/20"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">Ready to find the right support?</h2>
          <p className="text-primary-foreground/80 text-lg mb-10 max-w-2xl mx-auto">
            Whether you're looking for yourself or a loved one, we're here to answer your questions and guide you through the process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 py-6 rounded-full">
                View All Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
