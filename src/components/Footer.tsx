import  { Package, Mail, Phone, MapPin, Twitter, Facebook, Linkedin, Instagram } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Package className="w-6 h-6 text-primary-500" />
              <span className="text-xl font-bold">SoftSell</span>
            </div>
            <p className="text-secondary-400 mb-4">
              The leading marketplace for software license resale, helping businesses recover value from unused software assets.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <ScrollLink
                  to="how-it-works"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-secondary-400 hover:text-primary-500 transition-colors cursor-pointer"
                >
                  How It Works
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="why-choose-us"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-secondary-400 hover:text-primary-500 transition-colors cursor-pointer"
                >
                  Why Choose Us
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-secondary-400 hover:text-primary-500 transition-colors cursor-pointer"
                >
                  Testimonials
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-secondary-400 hover:text-primary-500 transition-colors cursor-pointer"
                >
                  Contact Us
                </ScrollLink>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                  License Valuation Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                  Software Asset Management
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                  License Transfer FAQs
                </a>
              </li>
              <li>
                <a href="#" className="text-secondary-400 hover:text-primary-500 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-secondary-400">contact@softsell.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-secondary-400">+91 98765 43210</span>
              </li>
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-primary-500 mr-2 mt-0.5" />
                <span className="text-secondary-400">
                  Cyber City, DLF Phase 2<br />
                  Gurugram, Haryana 122002
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-800 pt-8 mt-8 text-center">
          <p className="text-secondary-400 text-sm">
            &copy; {currentYear} SoftSell. All rights reserved. | <a href="#" className="hover:text-primary-500 transition-colors">Privacy Policy</a> | <a href="#" className="hover:text-primary-500 transition-colors">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  