import { Link } from "wouter";
import { HeartHandshake, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <div>
                <span className="font-bold text-lg block">Beyond Horizon</span>
                <span className="text-xs text-slate-400">Supported Living</span>
              </div>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              Empowering individuals to live independent, fulfilling lives through compassionate, community-focused support.
            </p>
            <div className="flex items-center space-x-3">
              <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-primary transition-colors" data-testid="link-facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-primary transition-colors" data-testid="link-twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-slate-700 rounded-full hover:bg-primary transition-colors" data-testid="link-instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-slate-300 hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-slate-300 hover:text-primary transition-colors text-sm">Our Services</Link></li>
              <li><Link href="/testimonials" className="text-slate-300 hover:text-primary transition-colors text-sm">Success Stories</Link></li>
              <li><Link href="/careers" className="text-slate-300 hover:text-primary transition-colors text-sm">Join Our Team</Link></li>
              <li><Link href="/contact" className="text-slate-300 hover:text-primary transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Seattle, WA</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-300">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <a href="tel:2067249435" className="hover:text-primary transition-colors">(206) 724-9435</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-300">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <a href="mailto:info@BeyondHorizonSupportedLiving.org" className="hover:text-primary transition-colors">
                  info@BeyondHorizonSupportedLiving.org
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="bg-primary/20 p-6 rounded-2xl border border-primary/30">
            <h4 className="font-bold text-lg mb-2">Need immediate help?</h4>
            <p className="text-xs text-slate-300 mb-4">Our support team is available to answer your questions.</p>
            <Link href="/contact">
              <button className="w-full bg-primary text-white py-3 rounded-xl text-sm font-semibold shadow-lg hover:bg-primary/90 transition-all" data-testid="button-footer-contact">
                Contact Support
              </button>
            </Link>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
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
