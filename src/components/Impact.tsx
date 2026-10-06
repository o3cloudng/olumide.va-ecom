import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { TrendingUp, Clock, FileCheck2, Cpu, CheckCircle } from 'lucide-react';

export const Impact: React.FC = () => {
  const icons = [Clock, Cpu, CheckCircle, FileCheck2];

  return (
    <section id="impact" className="py-20 md:py-28 bg-[#FFFFFF] border-y border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#4A90A4] uppercase tracking-wider mb-2">
            <span>Impact Highlights</span>
            <span aria-hidden="true">·</span>
            <span>Proven Operational Metrics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16323D] tracking-tight mb-4">
            Real Results Built on Structure and Automation
          </h2>
          <p className="text-base sm:text-lg text-[#5C6773] leading-relaxed">
            Every executive assistant can check off a to-do list; I engineer reliable administrative systems that create measurable operational uplift and cut waste across your team.
          </p>
        </div>

        {/* 4 Realistic Impact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PORTFOLIO_DATA.impacts.map((card, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <div
                key={card.id}
                className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-3xl p-8 sm:p-10 flex flex-col justify-between hover:border-[#4A90A4]/40 transition-colors shadow-xs"
              >
                <div>
                  {/* Top Bar with Icon and Metric */}
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-[#EFE9DF] text-[#16323D] flex items-center justify-center shrink-0">
                      <IconComponent className="w-6 h-6 text-[#377385]" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl sm:text-3xl font-extrabold text-[#16323D] tracking-tight">
                        {card.metric}
                      </div>
                      <div className="text-xs font-semibold text-[#4A90A4] uppercase tracking-wider">
                        {card.subMetric}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#16323D] mb-3">
                    {card.title}
                  </h3>

                  {/* Description (1-2 sentences as requested) */}
                  <p className="text-sm sm:text-base text-[#475467] leading-relaxed mb-4">
                    {card.description}
                  </p>
                </div>

                {/* Grounding Context */}
                <div className="pt-4 border-t border-[#E8E2D8] text-xs text-[#5C6773]">
                  <strong className="text-[#1E252B]">Operational Approach: </strong>
                  {card.context}
                </div>
              </div>
            );
          })}
        </div>

        {/* Executive Time Reclaimed Summary Banner */}
        <div className="mt-12 bg-[#F4EFEA] border border-[#DDD6CB] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold text-[#16323D] mb-1">
              What does this mean for your calendar?
            </h4>
            <p className="text-sm text-[#5C6773] leading-relaxed">
              Between zero-inbox triage, intelligent meeting buffering, and automated cross-tool syncing, clients consistently recover 12 to 18 hours of uninterrupted deep work every single week.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#16323D] hover:bg-[#1E4453] text-[#FAF8F5] text-sm font-semibold px-6 py-3 rounded-xl transition-colors whitespace-nowrap shadow-xs"
          >
            <span>Let's Discuss Your Workflow</span>
          </a>
        </div>

      </div>
    </section>
  );
};
