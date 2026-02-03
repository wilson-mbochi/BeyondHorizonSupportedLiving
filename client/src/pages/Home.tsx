import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, TrendingUp, Users, Heart, Phone, Mail, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import heroImage from "@assets/stock_images/diverse_group_of_adu_d59229a3.jpg";
import caregiverImage from "@assets/stock_images/caregiver_helping_sm_e40195a6.jpg";

const pillars = [
  {
    icon: TrendingUp,
    title: "Growth",
    description: "Personal, social, educational, and professional development that empowers individuals to live fulfilling lives.",
    color: "bg-emerald-500",
  },
  {
    icon: Users,
    title: "Support",
    description: "Providing inclusive tools, services, and environments that empower full participation, independence, and dignity.",
    color: "bg-sky-500",
  },
  {
    icon: Heart,
    title: "Inclusion",
    description: "It's about removing barriers, both physical and attitudinal, and recognizing the value of diverse abilities.",
    color: "bg-rose-500",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section with Pillars */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, idx) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <Card className="p-8 h-full border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white overflow-hidden relative group">
                  <div className={`absolute top-0 left-0 w-full h-1.5 ${pillar.color}`} />
                  <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg`}>
                    <pillar.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maya Angelou Quote Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Quote className="w-12 h-12 mx-auto mb-6 opacity-50" />
          <blockquote className="text-2xl md:text-3xl font-medium italic leading-relaxed mb-6">
            "People will forget what you said, people will forget what you did, but people will never forget how you made them feel."
          </blockquote>
          <cite className="text-lg opacity-80 not-italic">~ Maya Angelou</cite>
        </div>
      </section>

      {/* Contact CTA Banner */}
      <section className="py-8 bg-secondary">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/contact">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-white hover:opacity-90 transition-opacity cursor-pointer" data-testid="link-contact-cta">
              <span className="text-xl font-bold">Reach Us Today!</span>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">(206) 724-9435</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5" />
                <span className="font-semibold">info@BeyondHorizonSupportedLiving.org</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              Welcome to{" "}
              <span className="text-primary italic">Beyond Horizon</span>{" "}
              <span className="text-secondary italic">Supported Living</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground">Experience the best in Living Assistance Services!</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Vision */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 inline-block">Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our staff has a simple vision for how we give service to others. It is encompassed by the simple values of <strong className="text-foreground">support</strong>, <strong className="text-foreground">inclusion</strong> and <strong className="text-foreground">growth</strong> for everyone in our community.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We are glad to offer integrated living services that are dedicated to empowering individuals with disabilities to lead fulfilling, independent lives within their chosen communities.
              </p>
            </div>

            {/* Mission */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 inline-block">Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our mission is to <strong className="text-foreground">deliver expertise and compassion in every interaction</strong>. Through compassionate, person-centered care, we support meaningful relationships, valued activities, and the dignity of living at home.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The experienced caregivers foster environments where clients thrive, maintaining independence and well-being. Guided by the belief that service to others enriches life, we champion inclusion, choice, and lifelong support.
              </p>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-primary border-b-2 border-primary pb-2 inline-block">Services</h2>
              <ul className="space-y-2">
                {services.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                    <span className="font-bold text-primary">{idx + 1}.</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Founder's Message */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-primary/10 rounded-3xl transform -rotate-2 z-0" />
              <img
                src={caregiverImage}
                alt="Compassionate care"
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>

            <div className="bg-white p-8 lg:p-10 rounded-2xl shadow-xl border-l-4 border-primary">
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
                <Button className="mt-6 rounded-full px-6" data-testid="button-read-story">
                  Read Our Story! <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Building Community Together</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              At Beyond Horizon, we believe in the power of connection and belonging. Our community is built on trust, respect, and shared growth.
            </p>
          </div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={heroImage}
              alt="Community gathering"
              className="w-full h-80 md:h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-2">Join Our Family</h3>
                <p className="opacity-90">Where every individual is valued and supported.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Compassionate Care?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn how we can support you or your loved one on the journey to independence.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-8 py-6 rounded-full shadow-lg" data-testid="button-contact-cta">
                Contact Us Today
              </Button>
            </Link>
            <Link href="/services">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 py-6 rounded-full" data-testid="button-services-cta">
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
