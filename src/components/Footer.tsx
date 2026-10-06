import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { ArrowUp, Mail, Phone, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#16323D] text-[#FAF8F5] pt-16 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2C4D5B]">
          
          {/* Identity & Tagline */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FAF8F5] text-[#16323D] flex items-center justify-center font-bold text-base">
                OO
              </div>
              <div>
                <span className="font-bold text-lg text-[#FAF8F5] tracking-tight block">
                  {PORTFOLIO_DATA.profile.name}
                </span>
                <span className="text-xs text-[#8EB7C4] block">
                  {PORTFOLIO_DATA.profile.role}
                </span>
              </div>
            </div>

            <p className="text-sm text-[#B4CDD5] leading-relaxed max-w-md">
              {PORTFOLIO_DATA.profile.tagline}
            </p>

            <div className="flex items-center gap-2 text-xs text-[#8EB7C4] pt-1">
              <ShieldCheck className="w-4 h-4 text-[#6BA8BA]" />
              <span>AQskill Certified • Remote Specialist • US/UK/EU Timezones</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#8EB7C4] uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#E2EDF0]">
              <li>
                <a href="#about" className="hover:text-[#6BA8BA] transition-colors">
                  About Olumide
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#6BA8BA] transition-colors">
                  Core Services
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-[#6BA8BA] transition-colors">
                  Impact & Metrics
                </a>
              </li>
              <li>
                <a href="#tools" className="hover:text-[#6BA8BA] transition-colors">
                  Tools & Tech Stack
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#6BA8BA] transition-colors">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact Summary */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-[#8EB7C4] uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-[#E2EDF0]">
              <a
                href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                className="flex items-center gap-2 hover:text-[#6BA8BA] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#8EB7C4] shrink-0" />
                <span className="truncate">{PORTFOLIO_DATA.profile.email}</span>
              </a>
              <a
                href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                className="flex items-center gap-2 hover:text-[#6BA8BA] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#8EB7C4] shrink-0" />
                <span>{PORTFOLIO_DATA.profile.phone}</span>
              </a>
              <p className="text-xs text-[#8EB7C4] pt-1">
                Based in Nigeria • Remote for Worldwide Clients
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8EB7C4]">
          <p>
            © {new Date().getFullYear()} Olumide Oderinde. All rights reserved. Professional Virtual Assistant & Operations Specialist.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs text-[#E2EDF0] hover:text-[#FFFFFF] transition-colors p-1"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
