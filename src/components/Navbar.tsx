import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Menu, X, ArrowUpRight, Clock, Check } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [timeState, setTimeState] = useState({
    lagos: '',
    london: '',
    newYork: '',
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      const totalScrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollable > 0) {
        const progress = (window.scrollY / totalScrollable) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      } else {
        setScrollProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimeState({
        lagos: now.toLocaleTimeString('en-GB', { timeZone: 'Africa/Lagos', hour: '2-digit', minute: '2-digit' }),
        london: now.toLocaleTimeString('en-GB', { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit' }),
        newYork: now.toLocaleTimeString('en-US', { timeZone: 'America/New_York', hour: '2-digit', minute: '2-digit' }),
      });
    };
    updateTimes();
    const interval = setInterval(updateTimes, 30000);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Impact', href: '#impact' },
    { label: 'Tools', href: '#tools' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D8] py-3 shadow-xs'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Thin Reading & Exploration Progress Bar at the very top */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-[#4A90A4] via-[#5BA4B8] to-[#16323D] z-60 transition-[width] duration-100 ease-out shadow-[0_1px_4px_rgba(74,144,164,0.35)]"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Portfolio scroll progress"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Identity */}
          <a
            href="#"
            className="group flex items-center gap-3 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4A90A4] rounded-lg"
          >
            <div className="w-10 h-10 rounded-full bg-[#16323D] text-[#FAF8F5] flex items-center justify-center font-bold text-base tracking-tight transition-transform group-hover:scale-105 shadow-xs">
              OO
            </div>
            <div>
              <span className="font-bold text-base text-[#1E252B] tracking-tight block leading-tight">
                {PORTFOLIO_DATA.profile.name}
              </span>
              <span className="text-xs text-[#5C6773] font-medium tracking-normal block">
                Executive VA & Automations
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#414E5B]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition-colors hover:text-[#16323D] relative py-1 focus-visible:outline-hidden focus-visible:text-[#16323D]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Clocks */}
          <div className="hidden lg:flex items-center gap-5">
            {/* Live Timezone indicator */}
            <div className="flex items-center gap-3 text-xs text-[#5C6773] bg-[#F4EFEA] px-3 py-1.5 rounded-full border border-[#E8E2D8]">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-[#1E252B]">UTC+1:</span> {timeState.lagos}
              </div>
              <span className="text-[#C5BEB3]">|</span>
              <div>
                <span className="text-[#687584]">UK:</span> {timeState.london}
              </div>
              <span className="text-[#C5BEB3]">|</span>
              <div>
                <span className="text-[#687584]">EST:</span> {timeState.newYork}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-[#16323D] hover:bg-[#1E4453] text-[#FAF8F5] text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-xs hover:shadow hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 opacity-80" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-3">
            <a
              href="#contact"
              className="bg-[#16323D] text-[#FAF8F5] text-xs font-semibold px-3 py-1.5 rounded-md"
            >
              Get in Touch
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1E252B] rounded-lg hover:bg-[#F4EFEA] focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#4A90A4]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[#E8E2D8] px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#1E252B] py-2 px-3 rounded-md hover:bg-[#F4EFEA]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#E8E2D8] text-xs text-[#5C6773] space-y-2">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Timezone Overlap</span>
              </span>
              <span>Lagos (UTC+1): {timeState.lagos}</span>
            </div>
            <p className="text-[11px] text-[#788594]">
              Active coverage across US (EST/CST), UK (GMT), & Europe (CET).
            </p>
          </div>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 bg-[#16323D] text-[#FAF8F5] font-semibold py-3 px-4 rounded-lg text-sm"
          >
            <span>Get in Touch with Olumide</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};
