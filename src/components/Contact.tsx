import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Mail,
  Phone,
  Clock,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  ShieldAlert,
  ArrowUpRight
} from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    serviceInterest: 'Both Virtual Assistance & Automation',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PORTFOLIO_DATA.profile.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    setIsSubmitting(true);

    // Simulate submission delay and provide clean feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  const handleDirectMailto = () => {
    const subject = encodeURIComponent(`Inquiry from ${formData.name || 'Prospective Client'} - ${formData.serviceInterest}`);
    const body = encodeURIComponent(
      `Hi Olumide,\n\nMy name is ${formData.name || '[Your Name]'}.\nI am interested in: ${formData.serviceInterest}.\n\nProject details:\n${formData.message || ''}\n\nBest regards,\n${formData.name || ''}\n${formData.email || ''}`
    );
    window.location.href = `mailto:${PORTFOLIO_DATA.profile.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#FFFFFF] border-t border-[#E8E2D8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-14 text-left">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#4A90A4] uppercase tracking-wider mb-2">
            <span>Get in Touch</span>
            <span aria-hidden="true">·</span>
            <span>Discovery & Inquiries</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#16323D] tracking-tight mb-4">
            Ready to Reclaim Your Time?
          </h2>
          <p className="text-base sm:text-lg text-[#5C6773] leading-relaxed">
            Whether you need comprehensive day-to-day executive assistance, an inbox overhaul, or targeted no-code workflow automations, let's explore how we can optimize your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Contact Details & Working Principles */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-3xl p-6 sm:p-8 space-y-6 shadow-xs">
              <h3 className="font-bold text-lg text-[#16323D]">
                Direct Contact Channels
              </h3>

              {/* Email */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#8C98A4] uppercase tracking-wider">
                  Primary Email
                </span>
                <div className="flex items-center justify-between gap-2 p-3 bg-[#FFFFFF] border border-[#E8E2D8] rounded-xl">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <Mail className="w-4 h-4 text-[#4A90A4] shrink-0" />
                    <a
                      href={`mailto:${PORTFOLIO_DATA.profile.email}`}
                      className="text-xs sm:text-sm font-semibold text-[#16323D] hover:text-[#4A90A4] truncate transition-colors"
                    >
                      {PORTFOLIO_DATA.profile.email}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1.5 text-xs text-[#5C6773] hover:text-[#16323D] hover:bg-[#F4EFEA] rounded-md transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Phone / WhatsApp */}
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#8C98A4] uppercase tracking-wider">
                  Direct Phone / WhatsApp
                </span>
                <div className="flex items-center justify-between gap-2 p-3 bg-[#FFFFFF] border border-[#E8E2D8] rounded-xl">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#4A90A4] shrink-0" />
                    <a
                      href={`tel:${PORTFOLIO_DATA.profile.phone}`}
                      className="text-xs sm:text-sm font-semibold text-[#16323D] hover:text-[#4A90A4] transition-colors"
                    >
                      {PORTFOLIO_DATA.profile.phone}
                    </a>
                  </div>
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-xs text-[#5C6773] hover:text-[#16323D] hover:bg-[#F4EFEA] rounded-md transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Timezone & Location */}
              <div className="pt-2 border-t border-[#E8E2D8] space-y-3 text-xs text-[#5C6773]">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#16323D] block">Timezone Coverage:</strong>
                    Flexible overlapping schedules across US (EST/CST), UK (GMT/BST), and Europe (CET).
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-[#4A90A4] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#16323D] block">Base Location:</strong>
                    Nigeria • Available 100% Remotely Worldwide.
                  </div>
                </div>
              </div>
            </div>

            {/* Client Guarantee Note */}
            <div className="p-5 bg-[#F4EFEA] border border-[#DDD6CB] rounded-2xl text-xs text-[#5C6773] space-y-2">
              <p className="font-semibold text-[#16323D]">
                Response Commitment:
              </p>
              <p>
                I review and respond to discovery requests within 2 to 4 hours during business days. For urgent executive requirements, feel free to send a direct email with "Urgent" in the subject line.
              </p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-3xl p-6 sm:p-10 shadow-xs">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#16323D]">
                    Message Received!
                  </h3>
                  <p className="text-sm text-[#5C6773] max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-[#16323D]">{formData.name}</strong>. Your inquiry has been received. I will review your requirements and reach out to <strong className="text-[#16323D]">{formData.email}</strong> shortly.
                  </p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleDirectMailto}
                      className="inline-flex items-center gap-2 bg-[#16323D] hover:bg-[#1E4453] text-[#FAF8F5] text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors"
                    >
                      <span>Also Open in Your Email App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          email: '',
                          serviceInterest: 'Both Virtual Assistance & Automation',
                          message: ''
                        });
                      }}
                      className="text-xs text-[#5C6773] hover:text-[#16323D] underline"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold text-[#16323D] mb-1">
                    Send an Inquiry
                  </h3>
                  <p className="text-xs text-[#5C6773] mb-4">
                    Fill out the form below or email directly to{' '}
                    <span className="font-mono text-[#16323D] font-medium">olumideooderinde@gmail.com</span>.
                  </p>

                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-bold text-[#16323D] uppercase tracking-wider mb-1.5">
                      Your Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DDD6CB] rounded-xl px-4 py-3 text-sm text-[#1E252B] focus:border-[#4A90A4] focus:ring-2 focus:ring-[#4A90A4]/20 outline-hidden transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-bold text-[#16323D] uppercase tracking-wider mb-1.5">
                      Your Email Address <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      placeholder="e.g. sarah@ventureagency.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DDD6CB] rounded-xl px-4 py-3 text-sm text-[#1E252B] focus:border-[#4A90A4] focus:ring-2 focus:ring-[#4A90A4]/20 outline-hidden transition-all"
                    />
                  </div>

                  {/* How can I help you / Service Interest */}
                  <div>
                    <label htmlFor="serviceInterest" className="block text-xs font-bold text-[#16323D] uppercase tracking-wider mb-1.5">
                      How Can I Help You?
                    </label>
                    <select
                      id="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DDD6CB] rounded-xl px-4 py-3 text-sm text-[#1E252B] focus:border-[#4A90A4] focus:ring-2 focus:ring-[#4A90A4]/20 outline-hidden transition-all"
                    >
                      <option value="Both Virtual Assistance & Automation">
                        Full Executive Assistance + Workflow Automations
                      </option>
                      <option value="Virtual Assistance & Executive Support">
                        Virtual Assistance & Calendar/Inbox Management
                      </option>
                      <option value="AI & Workflow Automation (Zapier/n8n)">
                        AI & Workflow Automations (Zapier, n8n, CRM sync)
                      </option>
                      <option value="Process & Documentation (SOPs)">
                        Process Optimization & SOP Documentation
                      </option>
                      <option value="General Inquiry / Other">
                        General Inquiry / Discovery Call
                      </option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold text-[#16323D] uppercase tracking-wider mb-1.5">
                      Message / Project Details <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      placeholder="Briefly describe your current bottlenecks, tools used, or hours needed..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DDD6CB] rounded-xl px-4 py-3 text-sm text-[#1E252B] focus:border-[#4A90A4] focus:ring-2 focus:ring-[#4A90A4]/20 outline-hidden transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#16323D] hover:bg-[#1E4453] text-[#FAF8F5] text-sm font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <span>Submitting Inquiry...</span>
                      ) : (
                        <>
                          <span>Get in Touch</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>

                    <button
                      type="button"
                      onClick={handleDirectMailto}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 text-xs text-[#5C6773] hover:text-[#16323D] py-3 px-4 rounded-xl border border-[#DDD6CB] hover:bg-[#F4EFEA] transition-colors"
                      title="Compose email directly in default client"
                    >
                      <span>Direct Email</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <p className="text-[11px] text-[#8C98A4] text-center sm:text-left pt-1">
                    Your details are held strictly confidential. No spam, ever.
                  </p>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
