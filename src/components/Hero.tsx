import React, { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';
import { ArrowUpRight, Copy, Check, Sparkles, ShieldCheck, Mail, ArrowDown, Camera, RotateCcw } from 'lucide-react';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const { photoUrl, setCustomPhoto, resetPhoto, isCustom } = usePhoto();
  const [imgError, setImgError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    setImgError(false);
  }, [photoUrl]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCustomPhoto(file);
      setImgError(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      setCustomPhoto(file);
      setImgError(false);
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle background ambient gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-[#4A90A4]/10 via-[#F4EFEA]/40 to-transparent blur-3xl -z-10 pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Context & Availability Indicator (Clean unboxed metadata) */}
            <div className="flex flex-wrap items-center gap-2 text-xs md:text-sm font-medium text-[#4A6773] mb-4">
              <span className="inline-flex items-center gap-1.5 text-[#16323D] font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                Available for Engagements
              </span>
              <span aria-hidden="true" className="text-[#C5BEB3]">·</span>
              <span>Remote (Nigeria)</span>
              <span aria-hidden="true" className="text-[#C5BEB3]">·</span>
              <span className="text-[#5C6773]">US, UK & EU Time Zones</span>
            </div>

            {/* Main Spec Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#16323D] tracking-tight leading-[1.12] mb-6">
              Virtual Assistant
              <span className="block text-[#4A90A4] font-normal text-2xl sm:text-3xl md:text-4xl mt-1.5">
                Executive Support, E-Commerce & Bookkeeping
              </span>
            </h1>

            {/* Subheadline from specification */}
            <p className="text-base sm:text-lg text-[#475467] leading-relaxed mb-8 max-w-xl">
              Helping executives, agency founders, and e-commerce brands reclaim focused time through meticulous executive administration, virtual bookkeeping, store operations, and no-code workflow automations.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#16323D] hover:bg-[#1E4453] text-[#FAF8F5] text-base font-semibold px-6 py-3.5 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 bg-[#F4EFEA] hover:bg-[#EBE4DC] text-[#16323D] text-base font-semibold px-6 py-3.5 rounded-xl border border-[#DDD6CB] transition-all duration-200"
              >
                <span>View Core Services</span>
                <ArrowDown className="w-4 h-4 text-[#4A90A4]" />
              </a>
            </div>

            {/* Email quick copy */}
            <div className="flex items-center gap-3 text-xs sm:text-sm text-[#5C6773] bg-[#F7F3ED]/80 border border-[#E8E2D8] rounded-lg px-4 py-2.5 max-w-fit">
              <Mail className="w-4 h-4 text-[#4A90A4] shrink-0" />
              <span className="font-mono text-[#1E252B] selection:bg-[#4A90A4]/20">
                {PORTFOLIO_DATA.profile.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 text-xs font-semibold text-[#16323D] hover:text-[#4A90A4] transition-colors ml-1 focus-visible:outline-hidden"
                title="Copy email address"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Key Trust Signals (No static pills, clean unboxed typography with dividers) */}
            <div className="pt-8 mt-6 border-t border-[#E8E2D8] grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-[#16323D]">5+ Years</span>
                <span className="text-xs text-[#5C6773] leading-tight block mt-0.5">
                  Supporting Tech & SaaS Executives
                </span>
              </div>
              <div>
                <span className="block text-xl sm:text-2xl font-bold text-[#4A90A4]">98%+ SLA</span>
                <span className="text-xs text-[#5C6773] leading-tight block mt-0.5">
                  Compliance & 95% CSAT Standard
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-xl sm:text-2xl font-bold text-[#16323D]">Zapier & n8n</span>
                <span className="text-xs text-[#5C6773] leading-tight block mt-0.5">
                  Autonomous No-Code Workflows
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Headshot with elevated treatment */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              
              {/* Background ambient card accent */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#4A90A4]/20 via-[#E8E0D5] to-[#FAF8F5] rounded-3xl transform rotate-2 scale-98 -z-10 shadow-lg" />
              
              {/* Main Photo Card Frame */}
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`relative bg-[#FFFFFF] p-3 sm:p-4 rounded-3xl shadow-xl border transition-all duration-300 ${
                  isDragging ? 'border-[#4A90A4] ring-4 ring-[#4A90A4]/20 scale-[1.02]' : 'border-[#E8E2D8] hover:scale-[1.01]'
                }`}
              >
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="overflow-hidden rounded-2xl aspect-square bg-[#F4EFEA] relative group cursor-pointer"
                >
                  {!imgError ? (
                    <>
                      <img
                        src={photoUrl}
                        alt="Olumide Oderinde - Virtual Assistant and Executive Operations Specialist"
                        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                        loading="eager"
                        onError={() => setImgError(true)}
                      />
                      
                      {/* Subtle gradient overlay at bottom of photo */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#16323D]/80 via-[#16323D]/30 to-transparent flex items-end p-4" />
                      
                      <div className="absolute bottom-3 left-4 right-4 text-white">
                        <p className="font-bold text-sm tracking-tight text-[#FAF8F5]">Olumide Oderinde</p>
                        <p className="text-xs text-[#C8E1E8] font-medium">Executive Support & Automation Specialist</p>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-b from-[#F7F4EE] to-[#EFEAE2]">
                      <div className="w-16 h-16 rounded-full bg-[#16323D] text-[#FAF8F5] flex items-center justify-center font-bold text-2xl shadow-md mb-3">
                        OO
                      </div>
                      <p className="font-bold text-sm text-[#16323D]">Olumide Oderinde</p>
                      <p className="text-xs text-[#5C6773] mt-0.5 mb-4">Executive VA & Automations</p>
                      
                      <div className="inline-flex items-center gap-1.5 bg-[#FFFFFF] border border-[#DDD6CB] hover:border-[#4A90A4] px-3.5 py-2 rounded-xl text-xs font-semibold text-[#16323D] shadow-xs transition-colors">
                        <Camera className="w-4 h-4 text-[#4A90A4]" />
                        <span>Click or Drop Picture (olumide_pix2.jpg)</span>
                      </div>
                      <p className="text-[10px] text-[#8C98A4] mt-2">
                        Loads unedited original photograph
                      </p>
                    </div>
                  )}

                  {/* Hidden file input for unedited photo upload */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </div>

                {/* Micro floating info bar & Photo Selector */}
                <div className="mt-3 px-2 py-1 flex items-center justify-between text-xs text-[#5C6773]">
                  <span className="flex items-center gap-1.5 font-medium text-[#1E252B]">
                    <ShieldCheck className="w-4 h-4 text-[#4A90A4]" />
                    AQskill Certified VA
                  </span>
                  
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        fileInputRef.current?.click();
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#4A90A4] hover:text-[#16323D] transition-colors"
                      title="Load original unedited photo"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{isCustom ? 'Photo Active' : 'Load Original Photo'}</span>
                    </button>
                    {isCustom && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          resetPhoto();
                        }}
                        className="text-[11px] text-[#8C98A4] hover:text-rose-500"
                        title="Reset photo"
                      >
                        <RotateCcw className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              </div>

              {/* Floating Feature Tag */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-5 sm:-left-5 bg-[#FAF8F5] border border-[#DDD6CB] rounded-xl px-4 py-3 shadow-lg flex items-center gap-3 max-w-[280px]">
                <div className="w-9 h-9 rounded-lg bg-[#4A90A4]/15 text-[#377385] flex items-center justify-center shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#16323D] leading-none mb-1">
                    Multi-Disciplinary Expertise
                  </p>
                  <p className="text-[11px] text-[#5C6773] leading-snug">
                    Executive VA • E-Commerce • Books • Automation
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
