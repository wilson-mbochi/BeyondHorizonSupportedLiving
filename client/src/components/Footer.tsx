import { Link } from "wouter";
import { HeartHandshake, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-lg text-primary">Beyond Horizon</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering individuals to live independent, fulfilling lives through compassionate, community-focused support.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-white rounded-full text-primary hover:bg-primary hover:text-white transition-colors shadow-sm">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/testimonials" className="text-muted-foreground hover:text-primary transition-colors text-sm">Success Stories</Link></li>
              <li><Link href="/careers" className="text-muted-foreground hover:text-primary transition-colors text-sm">Join Our Team</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>123 Community Lane,<br />Suite 400<br />Springfield, ST 12345</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>hello@beyondhorizon.com</span>
              </li>
            </ul>
          </div>

          {/* Legal/CTA */}
          <div className="bg-primary/5 p-6 rounded-2xl">
            <h4 className="font-display font-bold text-primary mb-2">Need immediate help?</h4>
            <p className="text-xs text-muted-foreground mb-4">Our support team is available 24/7 for urgent inquiries.</p>
            <Link href="/contact">
              <button className="w-full bg-primary text-white py-2 rounded-lg text-sm font-medium shadow-lg shadow-primary/25 hover:bg-primary/90 transition-all">
                Contact Support
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground">
          <p>&copy; {currentYear} Beyond Horizon Supported Living. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
