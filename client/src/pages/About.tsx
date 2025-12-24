import { motion } from "framer-motion";
import { Users, Heart, Shield, Sun } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import communityImage from '@assets/stock_images/diverse_group_of_adu_d59229a3.jpg';

const values = [
  {
    icon: Users,
    title: "Community",
    description: "We believe in the power of connection. Everyone deserves to feel part of a community where they are known, valued, and accepted."
  },
  {
    icon: Heart,
    title: "Compassion",
    description: "Care is at the heart of everything we do. We approach every interaction with kindness, empathy, and genuine concern."
  },
  {
    icon: Shield,
    title: "Safety & Trust",
    description: "We provide secure environments where individuals can thrive without fear, built on a foundation of reliability and integrity."
  },
  {
    icon: Sun,
    title: "Independence",
    description: "We empower individuals to make their own choices, develop skills, and live life on their own terms as much as possible."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background font-body">
      <Navigation />
      
      <PageHeader 
        title="About Us" 
        subtitle="Dedicated to enhancing lives through compassionate, person-centered support."
        image={communityImage}
      />

      <section className="py-20 bg-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-display font-bold text-primary mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Founded with a vision to transform supported living, Beyond Horizon began with a simple belief: everyone deserves a home, not just a house. We saw a need for care that goes beyond basic necessities—care that nourishes the spirit and fosters true independence.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Today, we are proud to support dozens of individuals across our community, helping them achieve their goals, build friendships, and live life to the fullest. Our team of dedicated professionals works tirelessly to ensure that every person we support feels empowered and valued.
          </p>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Our Core Values</h2>
            <p className="text-muted-foreground mt-4">The principles that guide our every action.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary mb-6">
                  <value.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
