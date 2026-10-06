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
  category: 'Automation & AI' | 'Productivity & Workspace' | 'Project Management' | 'Communication & CRM';
  description: string;
  level: string;
}

export const PORTFOLIO_DATA = {
  profile: {
    name: 'Olumide Oderinde',
    role: 'Virtual Assistant | Executive Support & Operations',
    specialization: 'Executive Assistance & AI/No-Code Workflow Automation',
    tagline: 'Reclaiming hours for high-performing founders and executives through organized support and smart automation.',
    location: 'Nigeria (Remote)',
    email: 'olumideooderinde@gmail.com',
    phone: '+234 810 523 0929', // professional contact placeholder or display format
    timezones: 'US (EST/CST/PST) • UK (GMT/BST) • European (CET) Time Zones',
    certification: "Certified Professional Virtual Assistant (AQskill)",
    experienceYears: '5+ Years in Tech & SaaS Support',
    headshotUrl: '/olumide_pix2.jpg',
    availabilityStatus: 'Available for Part-Time & Full-Time Remote Engagements',
  },

  about: {
    leadBio: `I am a trained Virtual Assistant with extensive experience in the IT and SaaS industry, working with cross-functional teams, and liaising with businesses for operational efficiency and sustainable growth.`,
    expandedParagraphs: [
      `For over 5 years, I have served as the trusted right hand to founders, executives, and cross-functional teams in demanding tech environments. My approach is rooted in calm consistency, proactive problem-solving, and a deep respect for an executive's most scarce resource: focused time.`,
      `Beyond conventional calendar and inbox orchestration, I bring a distinct edge in no-code automation. By linking tools like Zapier, n8n, and webhooks with your CRM, communication channels, and spreadsheets, I build resilient systems that eliminate repetitive friction and ensure nothing slips through the cracks.`,
      `Certified through AQskill's Professional Virtual Assistance program, I operate with strict confidentiality, structured operating procedures, and measurable accountability across international time zones.`,
    ],
    infrastructure: [
      { label: 'Uninterrupted Power', detail: 'Dedicated solar/inverter backup guaranteeing 99.9% uptime' },
      { label: 'High-Speed Connectivity', detail: 'Redundant fiber internet connections (100+ Mbps)' },
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
    { name: 'Zapier', category: 'Automation & AI', description: 'Multi-step triggers, filters, webhooks, and automated app workflows', level: 'Advanced' },
    { name: 'n8n', category: 'Automation & AI', description: 'Self-hosted & cloud workflow automation, complex JSON payloads, nodes', level: 'Advanced' },
    { name: 'Google Workspace', category: 'Productivity & Workspace', description: 'Advanced Gmail management, Calendar orchestration, Sheets, Docs, Drive', level: 'Expert' },
    { name: 'Microsoft 365', category: 'Productivity & Workspace', description: 'Outlook inbox mastery, Teams, OneDrive, Excel, SharePoint', level: 'Proficient' },
    { name: 'Notion', category: 'Productivity & Workspace', description: 'Company wikis, team dashboards, relational databases, SOP libraries', level: 'Advanced' },
    { name: 'Slack', category: 'Communication & CRM', description: 'Channel architecture, Slack bot integrations, VIP alert routing', level: 'Expert' },
    { name: 'HubSpot', category: 'Communication & CRM', description: 'Contact management, deal tracking, automated pipeline follow-ups', level: 'Proficient' },
    { name: 'Zendesk', category: 'Communication & CRM', description: 'SLA monitoring, macro creation, ticket triage, CSAT optimization', level: 'Advanced' },
    { name: 'Asana', category: 'Project Management', description: 'Sprint tracking, executive milestone management, task dependencies', level: 'Advanced' },
    { name: 'Jira', category: 'Project Management', description: 'Sprint coordination, issue triaging, backlog hygiene for tech teams', level: 'Proficient' },
    { name: 'Trello', category: 'Project Management', description: 'Visual Kanban workflows, automated Butler rules, client roadmaps', level: 'Expert' },
    { name: 'Canva', category: 'Communication & CRM', description: 'Executive slide deck touch-ups, visual briefs, social graphic assets', level: 'Proficient' },
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
