import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ExternalLink,
  FileText,
  HelpCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import resourcesImage from "@assets/stock_images/supportive_care_envi_147ab1ca.jpg";
import usefulLinksImage from "@assets/resources-useful-links.png";
import clientAdmissionImage from "@assets/resources-faq-sign.png";

const usefulLinks = [
  {
    label: "Developmental Disabilities Administration (DDA) info",
    href: "https://www.dshs.wa.gov/dda",
  },
  {
    label: "Apply for DDA Enrollment and Ask for Services",
    href: "https://www.dshs.wa.gov/dda/applicants-and-families",
  },
  {
    label: "Non-SHA housing resources",
    href: "https://www.dshs.wa.gov/esa/housing",
  },
  {
    label: "DSHS Housing Resources",
    href: "https://www.dshs.wa.gov/esa/housing",
  },
  {
    label: "DSHS benefits and H.R. 1 Policies",
    href: "https://www.dshs.wa.gov",
  },
  {
    label: "DSHS Office Locator",
    href: "https://www.dshs.wa.gov/office-locations",
  },
];

const faqs = [
  {
    question: "What are the requirements for client admission?",
    answer: (
      <>
        <p className="mb-3">
          <strong>DDA Referral Process:</strong> We partner with the Washington State Developmental Disabilities Administration (DDA), who refers individuals to us based on their specific assessment and support needs.
        </p>
        <p className="mb-3">
          <strong>Comprehensive Review:</strong> Once a referral is received, our team carefully reviews your history to ensure our services and expertise are the perfect match for your well-being.
        </p>
        <p className="mb-3">
          <strong>Personalized Consultation:</strong> If we can meet your needs, we'll schedule a visit with you and your loved ones to discuss the transition and determine the exact supports required for your success.
        </p>
        <p>
          <strong>Empowered Choice:</strong> The final decision is yours. You are encouraged to meet potential roommates and staff to ensure the environment feels like the right fit before committing.
        </p>
      </>
    ),
  },
  {
    question:
      "What qualifications and training do your staff—including RNs—have to handle complex medical needs?",
    answer: (
      <p>
        Our staff includes registered nurses and certified caregivers who undergo ongoing training in medical care, emergency response, and specialized support techniques to manage complex health conditions safely and effectively.
      </p>
    ),
  },
  {
    question:
      "How do vocational development and habilitation support translate into real-world progress for residents?",
    answer: (
      <p>
        We offer individualized vocational programs that focus on skill-building, job coaching, and community integration, with measurable outcomes such as increased independence, employment opportunities, and enhanced daily living skills.
      </p>
    ),
  },
  {
    question:
      "What kinds of community activities/events and wellness programs are available to promote social connection and emotional well-being?",
    answer: (
      <p>
        Residents can participate in a variety of activities including group outings, fitness classes, creative arts, and social clubs designed to foster friendships, emotional health, and a sense of belonging. We also have events for holidays, family picnics, summer camps, and birthdays.
      </p>
    ),
  },
];

export default function Resources() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <PageHeader
        title="Resources"
        subtitle="Useful links and client admission information to support you and your family."
        image={resourcesImage}
      />

      {/* Useful Links */}
      <section className="py-16 bg-white">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Useful Links
                </h2>
              </div>
              <ul className="space-y-3">
                {usefulLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      <span className="text-primary">●</span>
                      {link.label}
                      <ExternalLink className="w-4 h-4 shrink-0" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative flex justify-start lg:justify-end"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-100 w-full max-w-[180px] sm:max-w-[240px] md:max-w-[280px]">
                <img
                  src={usefulLinksImage}
                  alt="Young woman assisting an older man with a laptop—accessing information and support together."
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Admission FAQs */}
      <section className="py-16 bg-slate-50">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center mb-10"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">
              Client Admission FAQs
            </h2>
            <p className="text-muted-foreground mt-1 text-sm">
              Click on a question to see our solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 w-full max-w-[180px] sm:max-w-[220px]">
                <img
                  src={clientAdmissionImage}
                  alt="Questions and answers sign representing guidance and support."
                  className="w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, idx) => (
                  <AccordionItem key={idx} value={`faq-${idx}`}>
                    <AccordionTrigger className="text-left text-base md:text-lg font-semibold hover:no-underline hover:text-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Find Us */}
      <section className="py-16 bg-primary text-white">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold mb-10"
          >
            Find Us!
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4 text-white/90"
          >
            <p className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5 shrink-0" />
              <a href="tel:+12067249435" className="hover:underline font-semibold">
                +1 (206) 724-9435
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5 shrink-0" />
              <a
                href="mailto:info@BeyondHorizonSupportedLiving.org"
                className="hover:underline font-semibold"
              >
                info@BeyondHorizonSupportedLiving.org
              </a>
            </p>
            <p className="flex items-center justify-center gap-2">
              <MapPin className="w-5 h-5 shrink-0" />
              <span>
                31003 18th Ave S, Federal Way, Washington 98003, US
              </span>
            </p>
          </motion.div>
          <Link href="/contact" className="inline-block mt-8">
            <Button
              variant="secondary"
              className="rounded-full px-8 bg-white text-primary hover:bg-white/90"
              size="lg"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

