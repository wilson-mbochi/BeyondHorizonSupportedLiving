import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Heart, Phone, Mail, Quote, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useRef, useState, useEffect } from "react";
import heroSlide1 from "@assets/stock_images/black_hero_1.jpg";
import heroSlide2 from "@assets/stock_images/black_hero_2.jpg";
import heroSlide3 from "@assets/stock_images/black_hero_3.jpg";
import communityImage from "@assets/stock_images/black_community_1.jpg";
import caregiverImage from "@assets/stock_images/black_community_2.jpg";
import supportiveImage from "@assets/stock_images/black_community_3.jpg";

const heroSlides = [
  { image: heroSlide1, alt: "Black nurse caring for elderly woman with warm conversation" },
  { image: heroSlide2, alt: "Black seniors enjoying games and activities together" },
  { image: heroSlide3, alt: "African American caregiver helping with art therapy" },
];

const pillars = [
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Personal, social, educational, and professional development that empowers individuals to live fulfilling lives.",
    color: "bg-emerald-500",
    hoverColor: "group-hover:bg-emerald-600",
  },
  {
    icon: Users,
    title: "Support",
    description: "Providing inclusive tools, services, and environments that empower full participation, independence, and dignity.",
    color: "bg-sky-500",
    hoverColor: "group-hover:bg-sky-600",
  },
  {
    icon: Heart,
    title: "Inclusion",
    description: "It's about removing barriers, both physical and attitudinal, and recognizing the value of diverse abilities.",
    color: "bg-rose-500",
    hoverColor: "group-hover:bg-rose-600",
  },
];

const services = [
  "Dedicated Personal Care",
  "Care staff including RNs 24/7",
  "Vocational Development",
  "Habilitation Support",
  "Medication Management",
  "Community Service Activities",
  "Transportation & Errands",
  "Light Housekeeping & Meal Prep",
  "Wellness Guidance & Counseling",
];

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navigation />

      {/* Full-Screen Hero Slider Section */}
      <section ref={heroRef} className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentSlide}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ scale: heroScale }}
          >
            <img 
              src={heroSlides[currentSlide].image} 
              alt={heroSlides[currentSlide].alt} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
          </motion.div>
        </AnimatePresence>

        {/* Slider Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all"
          data-testid="button-hero-prev"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-20 p-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all"
          data-testid="button-hero-next"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-3 h-3 rounded-full transition-all ${idx === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/70'}`}
              data-testid={`button-hero-indicator-${idx}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <motion.div 
          className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-white/30">
              Compassionate Care for Everyone
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Your Life, Your Choice,<br />
            <span className="text-primary">Your Support.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto"
          >
            Empowering individuals with disabilities to lead fulfilling, independent lives within their chosen communities.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/contact">
              <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-2xl hover:scale-105 transition-transform" data-testid="button-hero-contact">
                Get Started Today
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full border-2 border-white text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-foreground transition-all" data-testid="button-hero-services">
                Explore Services
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-8 h-8 text-white/70" />
        </motion.div>
      </section>

      {/* Pillars Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Pillars</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Built on the foundation of growth, support, and inclusion.</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden relative group cursor-pointer">
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${pillar.color} transition-all duration-300 group-hover:h-2`} />
                  <motion.div 
                    className={`w-16 h-16 ${pillar.color} ${pillar.hoverColor} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <pillar.icon className="w-8 h-8" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maya Angelou Quote Section */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          style={{
            backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1px)",
            backgroundSize: "50px 50px"
          }}
        />
        
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
          </motion.div>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl md:text-4xl font-medium italic leading-relaxed mb-8"
          >
            "People will forget what you said, people will forget what you did, but people will never forget how you made them feel."
          </motion.blockquote>
          <motion.cite
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl opacity-80 not-italic font-semibold"
          >
            ~ Maya Angelou
          </motion.cite>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-6 bg-secondary overflow-hidden">
        <motion.div 
          className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link href="/contact">
            <motion.div 
              className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              data-testid="link-contact-cta"
            >
              <span className="text-xl font-bold">Reach Us Today!</span>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(206) 724-9435</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@BeyondHorizonSupportedLiving.org</span>
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Welcome to{" "}
              <span className="text-primary italic">Beyond Horizon</span>{" "}
              <span className="text-secondary italic">Supported Living</span>
            </h1>
            <p className="text-xl text-muted-foreground">Experience the best in Living Assistance Services!</p>
          </motion.div>

          <motion.div 
            className="grid lg:grid-cols-3 gap-12"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {/* Vision */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 inline-block">Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our staff has a simple vision for how we give service to others. It is encompassed by the simple values of <strong className="text-foreground">support</strong>, <strong className="text-foreground">inclusion</strong> and <strong className="text-foreground">growth</strong> for everyone in our community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are glad to offer integrated living services that are dedicated to empowering individuals with disabilities to lead fulfilling, independent lives within their chosen communities.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 inline-block">Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to <strong className="text-foreground">deliver expertise and compassion in every interaction</strong>. Through compassionate, person-centered care, we support meaningful relationships, valued activities, and the dignity of living at home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The experienced caregivers foster environments where clients thrive, maintaining independence and well-being. Guided by the belief that service to others enriches life, we champion inclusion, choice, and lifelong support.
              </p>
            </motion.div>

            {/* Services */}
            <motion.div className="space-y-4" variants={fadeInUp}>
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 inline-block">Services</h2>
              <ul className="space-y-2">
                {services.map((service, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-start gap-2 text-muted-foreground"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <span className="font-bold text-primary">{idx + 1}.</span>
                    <span>{service}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-24 bg-slate-50 overflow-hidden">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="relative group"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-2 z-0 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden">
                <motion.img
                  src={caregiverImage}
                  alt="Compassionate care"
                  className="w-full object-cover aspect-[4/3]"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                />
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border-l-4 border-primary"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6">FOUNDER'S MESSAGE</h2>
              <blockquote className="text-muted-foreground leading-relaxed space-y-4">
                <p>
                  "As a Registered Nurse, Nurse Educator, and a parent of individuals supported by DDA, I understand the importance of care that is both clinically sound and deeply compassionate.
                </p>
                <p>
                  Beyond Horizon Living Services was created to deliver the kind of care I would want for my own family—care that is safe, respectful, individualized, and empowering.
                </p>
                <p>
                  Our mission is to support people not only to live safely, but to thrive with dignity and purpose."
                </p>
              </blockquote>
              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="font-bold text-foreground">— Mary, RN, MSN, BCBA Candidate</p>
                <p className="text-sm text-muted-foreground">Founder, Beyond Horizon Living Services</p>
              </div>
              <Link href="/about">
                <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                  <Button className="mt-6 rounded-full px-6" data-testid="button-read-story">
                    Read Our Story! <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Community Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Beyond Horizon, we believe in the power of connection and belonging. Our community is built on trust, respect, and shared growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[communityImage, supportiveImage, caregiverImage].map((img, idx) => (
              <motion.div
                key={idx}
                className="relative group rounded-2xl overflow-hidden shadow-xl cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <motion.img
                    src={img}
                    alt={`Community ${idx + 1}`}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="font-semibold">Where every individual is valued</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        
        <div className="container max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-6"
          >
            Ready to Experience Compassionate Care?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            Contact us today to learn how we can support you or your loved one on the journey to independence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link href="/contact">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-2xl" data-testid="button-contact-cta">
                  Contact Us Today
                </Button>
              </motion.div>
            </Link>
            <Link href="/services">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 py-6 rounded-full" data-testid="button-services-cta">
                  View All Services
                </Button>
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
