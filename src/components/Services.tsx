import React, { useState } from 'react';
import { PORTFOLIO_DATA, ServiceItem } from '../data/portfolioData';
import {
  Calendar,
  Zap,
  ShoppingBag,
  Calculator,
  CheckCircle,
  ArrowRight,
  Workflow,
  Sparkles,
  Layers,
  ArrowUpRight,
  CreditCard,
  PackageCheck
} from 'lucide-react';

export const Services: React.FC = () => {
  const [activeWorkflowStep, setActiveWorkflowStep] = useState(0);

  const getServiceIcon = (id: string) => {
    switch (id) {
      case 'executive-support':
        return <Calendar className="w-6 h-6 text-[#377385]" />;
      case 'workflow-automation':
        return <Zap className="w-6 h-6 text-[#377385]" />;
      case 'ecommerce-va':
        return <ShoppingBag className="w-6 h-6 text-[#377385]" />;
      case 'virtual-bookkeeper':
        return <Calculator className="w-6 h-6 text-[#377385]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#377385]" />;
    }
  };

  const workflows = [
    {
      title: 'Inbound Lead → CRM & VIP Slack Alert',
      category: 'Executive & Workflow',
      tools: ['Web Form', 'Zapier', 'HubSpot CRM', 'Slack VIP Channel'],
      flow: [
        { label: 'Step 1: Capture', detail: 'New inquiry arrives from executive or prospective client' },
        { label: 'Step 2: Filter & Enrich', detail: 'Zapier parses priority, matches against CRM records, and tags high-value accounts' },
        { label: 'Step 3: Alert & Assign', detail: 'Instant formatted Slack notification sent to executive with 1-click action buttons' },
        { label: 'Step 4: Auto-Confirm', detail: 'Tailored confirmation email dispatched and follow-up task logged in Asana' }
      ]
    },
    {
      title: 'Executive Calendar & Prep Dossier',
      category: 'Executive Support',
      tools: ['Google Calendar', 'n8n', 'Notion', 'Gmail'],
      flow: [
        { label: 'Step 1: Event Detection', detail: 'New meeting booked on Google Calendar or Outlook' },
        { label: 'Step 2: Participant Lookup', detail: 'n8n node searches LinkedIn & past email exchanges for contextual bio' },
        { label: 'Step 3: Agenda Dossier', detail: 'Generates a one-page Notion prep brief linked directly to the calendar invitation' },
        { label: 'Step 4: Buffer Enforced', detail: 'Automatically blocks 15-minute post-meeting buffer for action items' }
      ]
    },
    {
      title: 'E-Commerce Order → Inventory & ShipStation Sync',
      category: 'E-Commerce VA',
      tools: ['Shopify', 'Amazon FBA', 'ShipStation', 'Gorgias'],
      flow: [
        { label: 'Step 1: Order Ingestion', detail: 'Customer places multi-item order across Shopify or Amazon storefront' },
        { label: 'Step 2: Inventory Allocation', detail: 'Real-time stock deduction across warehouse channels preventing overselling' },
        { label: 'Step 3: Fulfillment Dispatch', detail: 'Dispatches tracking barcode to ShipStation and emails buyer confirmation' },
        { label: 'Step 4: Exception Handling', detail: 'Flags shipping address anomalies for proactive customer care before delay' }
      ]
    },
    {
      title: 'Automated Bank & Stripe Feeds → Ledger Reconciliation',
      category: 'Virtual Bookkeeping',
      tools: ['Stripe', 'Bank Feed', 'QuickBooks Online', 'Dext'],
      flow: [
        { label: 'Step 1: Feed Matching', detail: 'Daily automated bank and merchant payout feeds pull into QuickBooks/Xero' },
        { label: 'Step 2: Rule-Based Categorization', detail: 'Matches recurring vendor expenses and client invoices to correct Chart of Accounts' },
        { label: 'Step 3: Receipt Attachment', detail: 'Pairs digital receipt PDFs from Dext/Drive directly to ledger transactions' },
        { label: 'Step 4: Weekly Audit Digest', detail: 'Flags unclassified transactions and generates cash flow snapshot for review' }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FAF8F5]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#4A90A4] uppercase tracking-wider mb-2">
            <span>Specialized Services</span>
            <span aria-hidden="true">·</span>
            <span>Four Core Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16323D] tracking-tight mb-4">
            Comprehensive Operational Leadership for Modern Businesses
          </h2>
          <p className="text-base sm:text-lg text-[#5C6773] leading-relaxed">
            From high-level executive administration and no-code workflow automations to e-commerce storefront operations and meticulous virtual bookkeeping, each engagement delivers calm reliability and measurable time savings.
          </p>
        </div>

        {/* The Four Core Service Pillar Cards in a 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {PORTFOLIO_DATA.services.map((service, index) => (
            <div
              key={service.id}
              className="bg-[#FFFFFF] rounded-3xl p-8 sm:p-10 border border-[#E8E2D8] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-xs font-bold text-[#4A90A4] uppercase tracking-widest">
                    {service.badge}
                  </span>
                  <div className="w-12 h-12 rounded-2xl bg-[#F4EFEA] text-[#16323D] flex items-center justify-center">
                    {getServiceIcon(service.id)}
                  </div>
                </div>

                <h3 className="text-2xl font-extrabold text-[#16323D] tracking-tight mb-2">
                  {service.title}
                </h3>
                
                <p className="text-sm font-medium text-[#4A90A4] mb-4">
                  {service.subtitle}
                </p>

                <p className="text-sm sm:text-base text-[#5C6773] leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Scope of Execution Checklist */}
                <div className="space-y-3 pt-2 mb-8 border-t border-[#F4EFEA]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#16323D] pt-3">
                    Scope of Execution:
                  </h4>
                  {service.features.map((feature, i) => {
                    const [title, desc] = feature.split(': ');
                    return (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                        <div>
                          <strong className="font-semibold text-[#1E252B]">{title}:</strong>{' '}
                          <span className="text-[#5C6773]">{desc}</span>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Primary Tools Used */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#16323D] uppercase tracking-wider block mb-2">
                    Primary Tools:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.tools.map((t, idx) => (
                      <span key={idx} className="bg-[#F4EFEA] border border-[#E8E2D8] text-[#16323D] text-xs px-2.5 py-1 rounded-lg font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Deliverables & CTA Footer */}
              <div className="pt-6 border-t border-[#E8E2D8] bg-[#FAF8F5] -mx-8 sm:-mx-10 -mb-8 sm:-mb-10 p-6 sm:p-8 rounded-b-3xl">
                <div className="text-xs text-[#5C6773] mb-4">
                  <strong className="text-[#16323D] block mb-1">Key Deliverables:</strong>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {service.deliverables.map((d, idx) => (
                      <span key={idx} className="text-[#475467]">
                        • {d}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href="#contact"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#16323D] hover:bg-[#1E4453] text-[#FAF8F5] text-sm font-semibold py-3 px-4 rounded-xl transition-colors"
                >
                  <span>Inquire About {service.title.split(' ')[0]} {service.title.split(' ')[1] || 'Services'}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Automation Preview: Demonstrating Practical Workflow Mastery */}
        <div className="bg-[#FFFFFF] border border-[#E8E2D8] rounded-3xl p-6 sm:p-8 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#E8E2D8]">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#4A90A4] uppercase tracking-wider mb-1">
                <Workflow className="w-4 h-4" />
                <span>Interactive Architecture Showcase</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#16323D]">
                How I Design Autonomous Operating Systems
              </h3>
            </div>
            
            {/* Workflow selector tabs (functional buttons) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4EFEA] rounded-xl border border-[#E8E2D8]">
              {workflows.map((wf, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveWorkflowStep(idx)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    activeWorkflowStep === idx
                      ? 'bg-[#16323D] text-[#FAF8F5] shadow-xs'
                      : 'text-[#5C6773] hover:text-[#16323D] hover:bg-[#EBE4DC]'
                  }`}
                >
                  {wf.category}
                </button>
              ))}
            </div>
          </div>

          {/* Active Workflow Details */}
          <div className="pt-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
              <div>
                <h4 className="text-base sm:text-lg font-bold text-[#16323D]">
                  {workflows[activeWorkflowStep].title}
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs text-[#5C6773] mt-1">
                  <span className="font-semibold text-[#1E252B]">Integrated Stack:</span>
                  {workflows[activeWorkflowStep].tools.map((t, idx) => (
                    <span key={idx} className="bg-[#F4EFEA] px-2 py-0.5 rounded text-[#475467]">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <span className="text-xs font-medium text-[#4A90A4] bg-[#4A90A4]/10 px-3 py-1 rounded-full self-start sm:self-auto">
                Verified Production Workflow
              </span>
            </div>

            {/* Stepper visual */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {workflows[activeWorkflowStep].flow.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#FAF8F5] border border-[#E8E2D8] p-4 rounded-2xl relative"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#4A90A4]">
                      {item.label}
                    </span>
                    <span className="text-xs font-mono font-bold text-[#8A97A5]">
                      0{idx + 1}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#475467] leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
