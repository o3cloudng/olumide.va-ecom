import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { usePhoto } from '../context/PhotoContext';
import { Award, Zap, Shield, CheckCircle2, Wifi, BatteryCharging, Monitor, Globe } from 'lucide-react';

export const About: React.FC = () => {
  const { photoUrl } = usePhoto();
  const [imgError, setImgError] = useState(false);

  React.useEffect(() => {
    setImgError(false);
  }, [photoUrl]);
  return (
    <section id="about" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#4A90A4] uppercase tracking-wider mb-2">
            <span>About Olumide</span>
            <span aria-hidden="true">·</span>
            <span>Background & Mindset</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16323D] tracking-tight">
            High-Touch Executive Support, Powered by an Automation Mindset
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & First-person Bio */}
          <div className="lg:col-span-7 space-y-6 text-[#414E5B] leading-relaxed text-base sm:text-lg">
            
            {/* Highlighted Lead Quote */}
            <div className="p-5 sm:p-6 bg-[#FAF8F5] border-l-4 border-[#4A90A4] rounded-r-2xl shadow-xs">
              <p className="text-[#16323D] font-medium text-lg sm:text-xl italic leading-snug">
                "{PORTFOLIO_DATA.about.leadBio}"
              </p>
            </div>

            {/* Narrative paragraphs */}
            {PORTFOLIO_DATA.about.expandedParagraphs.map((para, idx) => (
              <p key={idx} className="text-[#475467]">
                {para}
              </p>
            ))}

            {/* Core Competencies Checklist */}
            <div className="pt-4">
              <h3 className="text-sm font-bold text-[#16323D] uppercase tracking-wider mb-4">
                Core Execution Capabilities
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#334155]">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                  <span>Calendar triage & meeting buffer governance</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                  <span>Zero-inbox management & VIP thread tracking</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                  <span>Zapier & n8n multi-step scenario building</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                  <span>SOP creation & documentation architecture</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                  <span>Travel logistics & complex itinerary planning</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                  <span>Enterprise SLA adherence & client liaison</span>
                </div>
              </div>
            </div>

            {/* Certification callout */}
            <div className="pt-4 flex items-center gap-4 p-4 rounded-xl bg-[#F4EFEA] border border-[#DDD6CB]">
              <div className="w-12 h-12 rounded-xl bg-[#16323D] text-[#FAF8F5] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-[#6BA8BA]" />
              </div>
              <div>
                <p className="text-sm font-bold text-[#16323D]">
                  AQskill Professional Virtual Assistance Program
                </p>
                <p className="text-xs text-[#5C6773]">
                  Rigorously certified in executive administration, ethics, confidentiality, and remote operations management.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Remote Reliability Infrastructure & Second Profile Vignette */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Treatment of Headshot in About section */}
            <div className="p-5 bg-[#FAF8F5] rounded-3xl border border-[#E8E2D8] shadow-sm">
              <div className="flex items-center gap-4 pb-4 border-b border-[#E8E2D8]">
                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0 border border-[#DDD6CB] shadow-xs bg-[#F4EFEA] flex items-center justify-center">
                  {!imgError ? (
                    <img
                      src={photoUrl}
                      alt="Olumide Oderinde"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full bg-[#16323D] text-[#FAF8F5] flex items-center justify-center font-bold text-lg">
                      OO
                    </div>
                  )}
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#16323D]">
                    Olumide Oderinde
                  </h4>
                  <p className="text-xs text-[#4A90A4] font-medium">
                    Professional Virtual Assistant & Automator
                  </p>
                  <p className="text-xs text-[#5C6773] mt-0.5">
                    Liaising with teams across the US, UK, and Europe
                  </p>
                </div>
              </div>

              {/* Work Ethic Principles */}
              <div className="mt-4 space-y-3 text-xs text-[#475467]">
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#16323D] shrink-0">Discretion:</span>
                  <span>NDAs respected with strict adherence to data privacy and security best practices.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#16323D] shrink-0">Proactivity:</span>
                  <span>Anticipating roadblocks, preparing briefing notes, and solving issues before they escalate.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="font-bold text-[#16323D] shrink-0">Automation:</span>
                  <span>Never doing manually what a clean, reliable Zapier or n8n trigger can do instantly.</span>
                </div>
              </div>
            </div>

            {/* Remote Work Infrastructure (Peace of mind for international executives) */}
            <div className="p-6 bg-[#FAF8F5] rounded-3xl border border-[#E8E2D8] shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Shield className="w-4 h-4 text-[#4A90A4]" />
                <h3 className="font-bold text-sm text-[#16323D] uppercase tracking-wider">
                  Remote Infrastructure & Uptime
                </h3>
              </div>
              <p className="text-xs text-[#5C6773] mb-4">
                Designed to operate without interruption for demanding remote executive offices:
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE9DF] text-[#16323D] shrink-0">
                    <BatteryCharging className="w-4 h-4 text-[#377385]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#16323D]">Uninterrupted Power</h5>
                    <p className="text-xs text-[#5C6773]">Dedicated solar inverter system providing 99.9% continuous electrical uptime.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE9DF] text-[#16323D] shrink-0">
                    <Wifi className="w-4 h-4 text-[#377385]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#16323D]">Dual Redundant Fiber</h5>
                    <p className="text-xs text-[#5C6773]">High-speed 100+ Mbps primary fiber connection plus secondary cellular backup.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE9DF] text-[#16323D] shrink-0">
                    <Monitor className="w-4 h-4 text-[#377385]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#16323D]">Executive Workstation</h5>
                    <p className="text-xs text-[#5C6773]">Multi-monitor environment with 1Password enterprise vaults and multi-factor security.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#EFE9DF] text-[#16323D] shrink-0">
                    <Globe className="w-4 h-4 text-[#377385]" />
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-[#16323D]">Timezone Adaptability</h5>
                    <p className="text-xs text-[#5C6773]">Flexible overlapping hours aligned with EST, CST, GMT, and CET workdays.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
