import React from "react";
import { Link } from "react-router";
import { Globe, Share2, Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-botanical-green text-white border-t border-white/10 text-left">
      <div className="max-w-container-max mx-auto px-mobile-margin">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <div className="flex items-center gap-3">
              <img src="/nexigo-logo.png" alt="Nexivo Solutions Logo" className="w-12 h-12 rounded-lg object-cover bg-white" />
              <div>
                <span className="font-headline text-2xl font-bold uppercase tracking-widest text-white block">
                  NEXIVO SOLUTIONS
                </span>
                <span className="font-headline text-xs font-bold text-white/80 uppercase tracking-widest block mt-1">
                  From Ideas to Impact
                </span>
              </div>
            </div>
            <p className="font-body text-sm text-white/80 max-w-sm leading-relaxed">
              We help businesses build, grow, and scale through technology, e-commerce, digital marketing, and creative solutions.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-headline text-xs font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/80">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link>
              </li>
              <li>
                <a href="/#industries" className="hover:text-white transition-colors">Industries</a>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-white/60 text-white/40 transition-colors text-xs font-semibold uppercase tracking-wider">Admin Portal</Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-headline text-xs font-bold text-white uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-3 font-body text-sm text-white/80">
              <li>
                <Link to="/services/technology" className="hover:text-white transition-colors">Technology &amp; Software Dev</Link>
              </li>
              <li>
                <Link to="/services/ecommerce" className="hover:text-white transition-colors">E-Commerce Management</Link>
              </li>
              <li>
                <Link to="/services/marketing" className="hover:text-white transition-colors">Digital Marketing &amp; Growth</Link>
              </li>
              <li>
                <Link to="/services/creative" className="hover:text-white transition-colors">Graphic Design &amp; Creative</Link>
              </li>
              <li>
                <Link to="/services/video" className="hover:text-white transition-colors">Video Editing &amp; Production</Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-headline text-xs font-bold text-white uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-4 font-body text-sm text-white/80">
              <li className="flex gap-2.5 items-center">
                <Mail className="w-4 h-4 text-white" />
                <a href="mailto:akashwaradeofficial@gmail.com" className="hover:text-white transition-colors">
                  akashwaradeofficial@gmail.com
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-white" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-4 h-4 text-white mt-0.5" />
                <span>Pune, Maharashtra, India</span>
              </li>
              <li className="flex gap-4 pt-2">
                <a
                  href="https://www.linkedin.com/in/akash-warade-b2907226b"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://www.instagram.com/akashwarade_14?igsh=MXVuazhlMWd6cmo3YQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-body text-white/60 gap-4">
          <span>© 2026 Nexivo Solutions. All Rights Reserved.</span>
          <span className="font-headline uppercase tracking-widest text-[10px] text-white/40">
            NEXIVO SOLUTIONS • FROM IDEAS TO IMPACT 07
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
