export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  features: string[];
  tools: string[];
  deliverables: string[];
  quote: string;
}

export interface ImpactCard {
  id: string;
  title: string;
  metric: string;
  subMetric: string;
  description: string;
  context: string;
}

export interface ToolItem {
  name: string;
  category: 'Automation & AI' | 'Productivity & Workspace' | 'Project Management' | 'Communication & CRM' | 'E-Commerce & Retail' | 'Bookkeeping & Finance';
  description: string;
  level: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Olumide Oderinde',
    role: 'Virtual Assistant | Executive Support, E-Commerce & Bookkeeping',
    specialization: 'Executive Assistance • E-Commerce Store Management • Virtual Bookkeeping • No-Code Automations',
    tagline: 'Reclaiming hours for high-performing founders, e-commerce brands, and executives through meticulous operations, bookkeeping, and smart automation.',
    location: 'Nigeria (Remote)',
    email: 'olumideooderinde@gmail.com',
    phone: '+234 810 523 0929', // professional contact placeholder or display format
    timezones: 'US (EST/CST/PST) • UK (GMT/BST) • European (CET) Time Zones',
    certification: "Certified Professional Virtual Assistant (AQskill)",
    experienceYears: '5+ Years in Tech, SaaS & Remote Operations',
    headshotUrl: '/olumide_pix2.jpg',
    availabilityStatus: 'Available for Part-Time & Full-Time Remote Engagements',
  },

  about: {
    leadBio: `I am a trained Virtual Assistant, E-Commerce Operations Specialist, and Virtual Bookkeeper with extensive experience across SaaS, retail, and tech industries, partnering with business leaders for operational efficiency and sustainable growth.`,
    expandedParagraphs: [
      `For over 5 years, I have served as the trusted right hand to founders, executives, and business owners in demanding environments. My approach is rooted in calm consistency, proactive problem-solving, and a deep respect for an executive's most scarce resource: focused time.`,
      `Beyond executive inbox and calendar orchestration, I actively support growing digital businesses as an E-Commerce Virtual Assistant (Shopify, Amazon, WooCommerce) and Virtual Bookkeeper (QuickBooks Online, Xero, bank reconciliations, A/R & A/P management).`,
      `Complementing hands-on execution, I bring a distinct edge in no-code automation. By linking tools like Zapier, n8n, and webhooks with your store, bookkeeping ledgers, CRM, and communication channels, I build resilient systems that eliminate repetitive friction and ensure books and inventories balance effortlessly.`,
      `Certified through AQskill's Professional Virtual Assistance program, I operate with strict confidentiality, structured operating procedures, and measurable accountability across international time zones.`,
    ],
    infrastructure: [
      { label: 'Uninterrupted Power', detail: 'Dedicated solar/inverter backup guaranteeing 99.9% uptime' },
      { label: 'Fast Internet Infrastructure', detail: 'High-speed router connection (50+ Mbps) plus secondary cellular backup' },
      { label: 'Executive Workstation', detail: 'Dual-monitor setup with encrypted password management & 2FA' },
      { label: 'Global Availability', detail: 'Seamless overlap with US, UK, and European business hours' },
    ],
  },

  services: [
    {
      id: 'executive-support',
      title: 'Virtual Assistance & Executive Support',
      subtitle: 'Meticulous administration to free up your mental bandwidth',
      badge: 'Core Pillar 01',
      description: 'Comprehensive administrative partnership tailored to executives, agency owners, and growing teams who require precision, high discretion, and autonomous follow-through.',
      features: [
        'Calendar & Schedule Management: Smart conflict resolution, timezone alignment, travel buffer protection, and meeting prep dossiers.',
        'Priority Inbox Organization: Zero-inbox methodology, intelligent email categorization, VIP routing, and executive draft replies.',
        'Travel & Event Coordination: End-to-end flight, lodging, visa requirements, ground transport, and dynamic calendar itineraries.',
        'Task & Project Prioritization: Daily standup summaries, follow-up tracking across Asana/Notion/Jira, and holding team members accountable.',
        'Stakeholder & Client Liaison: Professional first-touch communication, client onboarding logistics, and managing vendor relationships.',
        'Documentation & Knowledge Base: Creating Standard Operating Procedures (SOPs), team manuals, and organized cloud file architectures.'
      ],
      tools: ['Google Workspace', 'Microsoft 365', 'Notion', 'Slack', 'Asana', 'Jira', 'Trello'],
      deliverables: [
        'Organized, zero-inbox daily email feed',
        'Friction-free executive calendar with buffers',
        'Standard Operating Procedures (SOPs) library',
        'Weekly executive briefing & task digests'
      ],
      quote: '“Reliable, quiet competence that lets you focus entirely on high-leverage strategic decisions.”'
    },
    {
      id: 'workflow-automation',
      title: 'AI & Workflow Automation',
      subtitle: 'Eliminating repetitive manual tasks with Zapier and n8n',
      badge: 'Core Pillar 02',
      description: 'Transforming messy, manual operations into automated, self-healing pipelines. Connecting your tech stack so data flows effortlessly without manual copy-pasting.',
      features: [
        'No-Code Workflow Architecture: Designing robust, multi-step scenarios in Zapier and n8n with conditional branches and error alerts.',
        'Cross-Tool Synchronization: Connecting CRMs (HubSpot), team chat (Slack/Teams), ticketing (Zendesk/Jira), and spreadsheets (Sheets/Airtable).',
        'Lead Ingestion & Routing: Instant capture from website forms, auto-enrichment, CRM assignment, and team notification in under 60 seconds.',
        'Automated Executive Briefings: Trigger-based daily summaries pulling key metrics, overdue tickets, and urgent emails into one neat morning digest.',
        'Manual Data Reduction: Eliminating repetitive invoice filing, customer data entry, and multi-platform record updates.',
        'Process Optimization Audits: Analyzing existing team bottlenecks to identify high-ROI opportunities for automation.'
      ],
      tools: ['Zapier', 'n8n', 'HubSpot', 'Zendesk', 'Slack Webhooks', 'Google Sheets', 'Make / IFTTT'],
      deliverables: [
        'Custom Zapier / n8n multi-step workflows',
        'Real-time automated alert channels',
        'Lead routing & instant CRM synchronization',
        'Workflow documentation & maintenance guides'
      ],
      quote: '“Turning 4 hours of tedious weekly copy-pasting into a background process that runs in seconds.”'
    },
    {
      id: 'ecommerce-va',
      title: 'E-Commerce Virtual Assistant',
      subtitle: 'End-to-end store operations, catalog management & customer satisfaction',
      badge: 'Core Pillar 03',
      description: 'Reliable day-to-day management for online store owners across Shopify, Amazon Seller Central, and WooCommerce. Keeping your catalog updated, orders fulfilled, and customers delighted.',
      features: [
        'Product Listing & Catalog Hygiene: Crafting optimized titles, compelling descriptions, formatting variants/SKUs, uploading high-res imagery, and managing tags.',
        'Order Fulfillment & Dispatch Tracking: Daily order monitoring, dropshipping/fulfillment center dispatch coordination, and rapid tracking updates for buyers.',
        'Inventory Sync & Stock Level Alerts: Monitoring stock levels across multi-channel stores, avoiding stockouts or overselling, and flagging reorder thresholds.',
        'Customer Care & Return Handling: Responding to pre-sale questions, order status inquiries, reviews, and RMA refunds via Zendesk, Gorgias, and email with high empathy.',
        'Promotions & Discount Campaigns: Setting up discount codes, seasonal flash sale banners, product bundling, and basic collection merchandising.',
        'Store Analytics & Performance Reports: Tracking weekly top-sellers, conversion bottlenecks, return rates, and customer sentiment to boost store growth.'
      ],
      tools: ['Shopify', 'Amazon Seller Central', 'WooCommerce', 'Gorgias', 'Zendesk', 'Canva', 'ShipStation', 'Google Sheets'],
      deliverables: [
        'Pristine, optimized product catalog & SKU structures',
        'Zero-backlog order processing & tracking updates',
        'Empathetic, under-2-hour customer support coverage',
        'Weekly inventory health & sales metrics report'
      ],
      quote: '“Keeping your storefront humming around the clock while you focus on brand scaling and product development.”'
    },
    {
      id: 'virtual-bookkeeper',
      title: 'Virtual Bookkeeper',
      subtitle: 'Accurate transaction recording, bank reconciliation & cash flow clarity',
      badge: 'Core Pillar 04',
      description: 'Confidential, meticulous bookkeeping support tailored to agency founders, e-commerce merchants, and small businesses. Keeping your financial records organized, reconciled, and tax-ready.',
      features: [
        'Bank & Credit Card Reconciliation: Weekly and monthly matching of bank feeds against ledger records in QuickBooks Online or Xero to ensure 100% balance accuracy.',
        'Accounts Payable (A/P) Management: Entering vendor invoices, verifying payment terms, organizing bills, and scheduling payment batches to eliminate late fees.',
        'Accounts Receivable (A/R) & Invoicing: Creating professional client invoices, tracking unpaid balances, and handling polite automated reminder workflows.',
        'Expense Categorization & Receipt Organization: Tagging every transaction to the proper Chart of Accounts, attaching digital receipts via Dext/Drive, and maximizing tax deductions.',
        'Financial Reporting & Statements: Generating monthly Profit & Loss (P&L), Balance Sheet, and Accounts Aging summaries for executive clarity.',
        'Payment Gateway & Payout Matching: Reconciling merchant transactions across Stripe, PayPal, Shopify Payments, and Wise with zero discrepancy.'
      ],
      tools: ['QuickBooks Online', 'Xero', 'Wave Accounting', 'Dext / Hubdoc', 'Stripe', 'PayPal', 'Wise', 'Excel / Sheets'],
      deliverables: [
        '100% reconciled monthly bank & credit card accounts',
        'Clean, audit-ready expense ledger with receipts attached',
        'Timely client invoicing & reduced A/R collection cycles',
        'Monthly P&L, Balance Sheet & Cash Flow summary briefings'
      ],
      quote: '“Eliminating bookkeeping stress with spotless ledger hygiene, timely invoicing, and clear financial clarity.”'
    }
  ] as ServiceItem[],

  impacts: [
    {
      id: 'impact-resolution',
      title: 'Streamlined Executive Operations Across Time Zones',
      metric: '30% Faster',
      subMetric: 'Ticket & Request Resolution',
      description: 'Reorganized priority routing and response triage across US, UK, and European stakeholder cycles, eliminating cross-border communication delays.',
      context: 'Achieved through proactive calendar buffering, daily asynchronous briefings, and clear communication handoffs.'
    },
    {
      id: 'impact-automation',
      title: 'Automated No-Code Pipelines (Zapier & n8n)',
      metric: '40% Reduction',
      subMetric: 'In Manual Data Entry',
      description: 'Engineered automated multi-app bridges connecting CRM records, incoming inquiries, and spreadsheet databases, cutting dozens of manual hours weekly.',
      context: 'Zero lost leads, instant synchronization, and immediate team notifications via automated webhooks.'
    },
    {
      id: 'impact-ecommerce',
      title: 'E-Commerce Store & Catalog Operations',
      metric: '99.8% Accuracy',
      subMetric: '& Zero Order Backlog',
      description: 'Managed product catalog updates, variant configurations, and daily fulfillment workflows across Shopify and Amazon Seller Central.',
      context: 'Maintained spotless stock sync, fast dispute resolution, and 5-star customer feedback ratings.'
    },
    {
      id: 'impact-bookkeeping',
      title: 'Financial Ledger Hygiene & Reconciliation',
      metric: '100% Reconciled',
      subMetric: 'Monthly Bank & Payment Feeds',
      description: 'Maintained up-to-date ledgers in QuickBooks and Xero, matching Stripe/PayPal payouts and reducing uncollected invoices.',
      context: 'Provided founders with clean monthly P&L visibility and tax-ready audit trails.'
    },
    {
      id: 'impact-sla',
      title: 'Primary Client Liaison & Account Governance',
      metric: '98%+ SLA',
      subMetric: '& 95% CSAT Score',
      description: 'Maintained exceptional service-level agreement adherence and client satisfaction as the primary administrative bridge for enterprise accounts.',
      context: 'Consistently met strict client turnaround times while preserving a warm, human, and professional touch.'
    },
    {
      id: 'impact-docs',
      title: 'Standard Operating Procedures & Knowledge Architecture',
      metric: '20% Reduction',
      subMetric: 'In Repeat Support Inquiries',
      description: 'Authored exhaustive internal documentation, step-by-step SOPs, and searchable knowledge bases that empowered self-serve problem solving.',
      context: 'Transformed tribal knowledge into clean, living company wikis on Notion and Google Workspace.'
    }
  ] as ImpactCard[],

  tools: [
    // Automation & AI
    { name: 'Zapier', category: 'Automation & AI', description: 'Multi-step triggers, filters, webhooks, and automated app workflows', level: 'Advanced' },
    { name: 'n8n', category: 'Automation & AI', description: 'Self-hosted & cloud workflow automation, complex JSON payloads, nodes', level: 'Advanced' },
    // E-Commerce & Retail
    { name: 'Shopify', category: 'E-Commerce & Retail', description: 'Store setup, product catalog listing, order processing, app integrations', level: 'Advanced' },
    { name: 'Amazon Seller Central', category: 'E-Commerce & Retail', description: 'FBA / FBM order monitoring, listing optimization, buyer messages', level: 'Proficient' },
    { name: 'WooCommerce', category: 'E-Commerce & Retail', description: 'WordPress catalog maintenance, order fulfillment, coupon rules', level: 'Advanced' },
    { name: 'Gorgias / ShipStation', category: 'E-Commerce & Retail', description: 'E-commerce ticket routing, order tracking, shipping label workflows', level: 'Proficient' },
    // Bookkeeping & Finance
    { name: 'QuickBooks Online', category: 'Bookkeeping & Finance', description: 'Bank reconciliation, Chart of Accounts, invoicing, A/R & A/P, P&L reports', level: 'Advanced' },
    { name: 'Xero', category: 'Bookkeeping & Finance', description: 'Cloud ledger management, transaction matching, bill payments, cash flow', level: 'Proficient' },
    { name: 'Wave Accounting', category: 'Bookkeeping & Finance', description: 'Small business bookkeeping, income & expense categorization, invoicing', level: 'Advanced' },
    { name: 'Stripe & PayPal', category: 'Bookkeeping & Finance', description: 'Payment gateway reconciliations, fee tracking, payout matching', level: 'Advanced' },
    { name: 'Dext / Receipt Bank', category: 'Bookkeeping & Finance', description: 'Receipt capture, invoice matching, paperless expense archiving', level: 'Proficient' },
    // Productivity & Workspace
    { name: 'Google Workspace', category: 'Productivity & Workspace', description: 'Advanced Gmail management, Calendar orchestration, Sheets, Docs, Drive', level: 'Expert' },
    { name: 'Microsoft 365', category: 'Productivity & Workspace', description: 'Outlook inbox mastery, Teams, OneDrive, Excel, SharePoint', level: 'Proficient' },
    { name: 'Notion', category: 'Productivity & Workspace', description: 'Company wikis, team dashboards, relational databases, SOP libraries', level: 'Advanced' },
    // Communication & CRM
    { name: 'Slack', category: 'Communication & CRM', description: 'Channel architecture, Slack bot integrations, VIP alert routing', level: 'Expert' },
    { name: 'HubSpot', category: 'Communication & CRM', description: 'Contact management, deal tracking, automated pipeline follow-ups', level: 'Proficient' },
    { name: 'Zendesk', category: 'Communication & CRM', description: 'SLA monitoring, macro creation, ticket triage, CSAT optimization', level: 'Advanced' },
    { name: 'Asana', category: 'Project Management', description: 'Sprint tracking, executive milestone management, task dependencies', level: 'Advanced' },
    { name: 'Jira', category: 'Project Management', description: 'Sprint coordination, issue triaging, backlog hygiene for tech teams', level: 'Proficient' },
    { name: 'Trello', category: 'Project Management', description: 'Visual Kanban workflows, automated Butler rules, client roadmaps', level: 'Expert' },
    { name: 'Canva', category: 'Communication & CRM', description: 'Executive slide deck touch-ups, visual briefs, product social assets', level: 'Proficient' },
  ] as ToolItem[],

  automationShowcase: [
    {
      step: 1,
      source: 'Inbound Inquiry / Lead',
      action: 'Client submits discovery form or VIP email arrives',
      icon: 'Mail'
    },
    {
      step: 2,
      source: 'Zapier / n8n Trigger',
      action: 'Validates contact, enriches details, and creates HubSpot deal',
      icon: 'Zap'
    },
    {
      step: 3,
      source: 'Smart Routing & Alerts',
      action: 'Posts formatted preview in Slack VIP channel with 1-click action buttons',
      icon: 'MessageSquare'
    },
    {
      step: 4,
      source: 'Calendar & Meeting Prep',
      action: 'Generates executive brief doc in Google Drive and updates Calendar agenda',
      icon: 'Calendar'
    }
  ]
};
