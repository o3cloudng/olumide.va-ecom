import React, { useState } from 'react';
import { PORTFOLIO_DATA, ToolItem } from '../data/portfolioData';
import {
  Cpu,
  Layers,
  CheckCircle,
  FileSpreadsheet,
  MessageCircle,
  Trello as TrelloIcon,
  Sparkles,
  Workflow
} from 'lucide-react';

export const Tools: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Automation & AI',
    'E-Commerce & Retail',
    'Bookkeeping & Finance',
    'Productivity & Workspace',
    'Communication & CRM',
    'Project Management'
  ];

  const filteredTools = selectedCategory === 'All'
    ? PORTFOLIO_DATA.tools
    : PORTFOLIO_DATA.tools.filter(t => t.category === selectedCategory);

  return (
    <section id="tools" className="py-20 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-xl text-left">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#4A90A4] uppercase tracking-wider mb-2">
              <span>Technical Stack</span>
              <span aria-hidden="true">·</span>
              <span>Tools & Integrations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16323D] tracking-tight">
              Tools I Master & Integrate Daily
            </h2>
            <p className="text-sm sm:text-base text-[#5C6773] mt-2">
              Deep, fluent expertise across modern productivity ecosystems, executive suites, and no-code automation platforms.
            </p>
          </div>

          {/* Category Tabs (interactive functional filter controls) */}
          <div className="flex flex-wrap gap-1 p-1 bg-[#F4EFEA] rounded-xl border border-[#E8E2D8] self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#16323D] text-[#FAF8F5] shadow-xs'
                    : 'text-[#5C6773] hover:text-[#16323D] hover:bg-[#EBE4DC]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredTools.map((tool) => (
            <div
              key={tool.name}
              className="bg-[#FFFFFF] border border-[#E8E2D8] hover:border-[#4A90A4]/50 rounded-2xl p-5 transition-all duration-200 shadow-xs hover:shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] group-hover:bg-[#F4EFEA] border border-[#E8E2D8] text-[#16323D] flex items-center justify-center font-bold text-sm transition-colors">
                    {tool.name.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[11px] font-semibold text-[#4A90A4]">
                    {tool.level}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[#16323D] mb-1 group-hover:text-[#4A90A4] transition-colors">
                  {tool.name}
                </h3>

                <p className="text-xs text-[#5C6773] leading-relaxed mb-3">
                  {tool.description}
                </p>
              </div>

              <div className="pt-2 border-t border-[#F4EFEA] text-[11px] text-[#8C98A4]">
                {tool.category}
              </div>
            </div>
          ))}
        </div>

        {/* Quick summary banner */}
        <div className="mt-8 text-center text-xs text-[#5C6773]">
          <span>Need a specific tool not listed? </span>
          <span className="text-[#16323D] font-medium">I quickly adapt to proprietary CRMs, custom internal databases, and specialized SaaS tools.</span>
        </div>

      </div>
    </section>
  );
};
