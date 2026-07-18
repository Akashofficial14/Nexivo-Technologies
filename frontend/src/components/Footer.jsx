import React from "react";
import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-14 md:py-20 bg-ink-black text-white border-t border-white/10 text-left">
      <div className="max-w-container-max mx-auto px-5 md:px-10">

        {/* Main grid — 2-col on mobile, 12-col on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-8 md:gap-12 pb-10 md:pb-16 border-b border-white/10">

          {/* Brand — full width on mobile */}
          <div className="col-span-2 md:col-span-4 space-y-4 md:space-y-6">
            <div className="flex items-center gap-3">
              <img src="/nexigo-logo.png" alt="Nexivo Solutions Logo" className="w-10 h-10 md:w-12 md:h-12 rounded-lg object-cover bg-white" />
              <div>
                <span className="font-headline text-lg md:text-2xl font-bold uppercase tracking-widest text-white block leading-tight">
                  NEXIVO SOLUTIONS
                </span>
                <span className="font-headline text-[10px] md:text-xs font-bold text-white/80 uppercase tracking-widest block mt-0.5 md:mt-1">
                  From Ideas to Impact
                </span>
              </div>
            </div>
            <p className="font-body text-xs md:text-sm text-white/70 max-w-sm leading-relaxed">
              We help businesses build, grow, and scale through technology, e-commerce, digital marketing, and creative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2 space-y-4 md:space-y-6">
            <h4 className="font-headline text-[10px] md:text-xs font-bold text-botanical-green uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2.5 md:space-y-3 font-body text-xs md:text-sm text-white/70">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/blogs" className="hover:text-white transition-colors">Blogs</Link></li>
              <li><a href="/#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-3 space-y-4 md:space-y-6">
            <h4 className="font-headline text-[10px] md:text-xs font-bold text-botanical-green uppercase tracking-widest">
              Services
            </h4>
            <ul className="space-y-2.5 md:space-y-3 font-body text-xs md:text-sm text-white/70">
              <li><Link to="/services/technology" className="hover:text-white transition-colors">Technology &amp; Software Dev</Link></li>
              <li><Link to="/services/ecommerce" className="hover:text-white transition-colors">E-Commerce Management</Link></li>
              <li><Link to="/services/marketing" className="hover:text-white transition-colors">Digital Marketing &amp; Growth</Link></li>
              <li><Link to="/services/creative" className="hover:text-white transition-colors">Graphic Design &amp; Creative</Link></li>
              <li><Link to="/services/video" className="hover:text-white transition-colors">Video Editing &amp; Production</Link></li>
            </ul>
          </div>

          {/* Contact — full width on mobile */}
          <div className="col-span-2 md:col-span-3 space-y-4 md:space-y-6">
            <h4 className="font-headline text-[10px] md:text-xs font-bold text-botanical-green uppercase tracking-widest">
              Contact
            </h4>
            <ul className="space-y-3 md:space-y-4 font-body text-xs md:text-sm text-white/70">
              <li className="flex gap-2.5 items-start">
                <Mail className="w-3.5 h-3.5 md:w-4 md:h-4 text-botanical-green mt-0.5 shrink-0" />
                <a href="mailto:akashwaradeofficial@gmail.com" className="hover:text-white transition-colors break-all">
                  akashwaradeofficial@gmail.com
                </a>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-botanical-green shrink-0" />
                <span>+91 9174571636</span>
              </li>
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-botanical-green mt-0.5 shrink-0" />
                <span>Indore, Madhya Pradesh, India</span>
              </li>
              <li className="flex gap-4 pt-1">
                <a
                  href="https://www.linkedin.com/in/akash-warade-b2907226b"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-botanical-green transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4 md:w-4.5 md:h-4.5" />
                </a>
                <a
                  href="https://www.instagram.com/akashwarade_14?igsh=MXVuazhlMWd6cmo3YQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/60 hover:text-botanical-green transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 md:w-4.5 md:h-4.5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] md:text-xs font-body text-white/50 gap-2 md:gap-4">
          <span>© 2026 Nexivo Solutions. All Rights Reserved.</span>
          <span className="font-headline uppercase tracking-widest text-[9px] md:text-[10px] text-white/30">
            NEXIVO SOLUTIONS • FROM IDEAS TO IMPACT
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
