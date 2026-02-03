import { motion } from "framer-motion";
import { Link } from "wouter";
import { Heart, Users, TrendingUp, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import caregiverImage from "@assets/stock_images/black_nurse_1_2.jpg";
import communityImage from "@assets/stock_images/black_care_1_2.jpg";

const values = [
  {
    icon: Heart,
    title: "Compassion",
    description: "We approach every interaction with empathy and understanding, treating each individual with the care and respect they deserve.",
  },
  {
    icon: Users,
    title: "Community",
    description: "We foster meaningful connections and help individuals build relationships within their communities.",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    description: "We support personal, social, and professional development that empowers individuals to reach their full potential.",
  },
  {
    icon: Shield,
    title: "Independence",
    description: "We champion choice, dignity, and the right of every person to live life on their own terms.",
  },
];

export default function About() {
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
              About <span className="text-primary">Beyond Horizon</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated to empowering individuals with disabilities to lead fulfilling, independent lives within their chosen communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Beyond Horizon Supported Living was founded by Mary, a Registered Nurse, Nurse Educator, and a parent of individuals supported by DDA. With decades of experience in healthcare and a deeply personal understanding of the challenges families face, Mary created Beyond Horizon to deliver the kind of care she would want for her own family.
                </p>
                <p>
                  Our organization is built on the belief that care should be both clinically sound and deeply compassionate. We understand that every individual has unique needs, goals, and dreams—and we're committed to supporting each person on their journey toward independence and fulfillment.
                </p>
                <p>
                  Today, Beyond Horizon serves as a beacon of hope for individuals and families throughout our community, providing integrated living services that emphasize support, inclusion, and growth.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-3xl transform rotate-2 z-0" />
              <img
                src={caregiverImage}
                alt="Compassionate care"
                className="relative z-10 rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do at Beyond Horizon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <Card className="p-6 h-full text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-4">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-3xl p-8 lg:p-12 border border-primary/10">
            <div className="grid lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold text-primary mb-6">A Message from Our Founder</h2>
                <blockquote className="text-muted-foreground leading-relaxed space-y-4 italic">
                  <p>
                    "As a Registered Nurse, Nurse Educator, and a parent of individuals supported by DDA, I understand the importance of care that is both clinically sound and deeply compassionate.
                  </p>
                  <p>
                    Beyond Horizon Living Services was created to deliver the kind of care I would want for my own family—care that is safe, respectful, individualized, and empowering. Our mission is to support people not only to live safely, but to thrive with dignity and purpose."
                  </p>
                </blockquote>
                <div className="mt-6 not-italic">
                  <p className="font-bold text-foreground">— Mary, RN, MSN, BCBA Candidate</p>
                  <p className="text-sm text-muted-foreground">Founder, Beyond Horizon Living Services</p>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <Heart className="w-24 h-24 text-primary/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Image */}
      <section className="py-20 bg-slate-50">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={communityImage}
                alt="Community"
                className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Building a Better Future Together</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Beyond Horizon, we believe that everyone deserves the opportunity to live a life filled with purpose, connection, and joy. We work alongside individuals and their families to create personalized support plans that honor each person's unique strengths and aspirations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team of dedicated professionals brings expertise, compassion, and a genuine commitment to making a difference in the lives of those we serve.
              </p>
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8" data-testid="button-about-contact">
                  Get in Touch <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
