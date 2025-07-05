import type { Solution, ProcessStep, TechPartner, Testimonial, BlogPost } from './types';

export const solutions: Solution[] = [
  {
    id: 'policy-analysis',
    title: 'Policy Analysis',
    description: 'Advanced AI algorithms that analyze existing policies, identify gaps, and recommend improvements based on comprehensive data analysis.',
    icon: '📊',
    features: [
      'Real-time policy scanning',
      'Gap identification',
      'Risk assessment',
      'Compliance checking'
    ],
    ctaText: 'Learn More',
    ctaLink: '/solutions#policy-analysis'
  },
  {
    id: 'predictive-modeling',
    title: 'Predictive Modeling',
    description: 'Forecast the potential impacts of policy changes using sophisticated predictive models based on historical and real-time data.',
    icon: '🔮',
    features: [
      'Data-driven predictions',
      'Scenario modeling',
      'Risk probability analysis',
      'Outcome visualization'
    ],
    ctaText: 'Learn More',
    ctaLink: '/solutions#predictive-modeling'
  },
  {
    id: 'decision-support',
    title: 'Decision Support',
    description: 'Real-time dashboards and decision-making tools that help policymakers visualize complex data and make informed choices.',
    icon: '🎯',
    features: [
      'Interactive dashboards',
      'Real-time analytics',
      'Recommendation engine',
      'Impact assessment'
    ],
    ctaText: 'Learn More',
    ctaLink: '/solutions#decision-support'
  }
];

export const voiceAgentSolutions: Solution[] = [
  {
    id: 'customer-service',
    title: 'Customer Service Agent',
    description: 'AI-powered voice agents that handle customer inquiries, policy questions, and claim status updates 24/7.',
    icon: '🎧',
    features: [
      'Natural language processing',
      'Multi-language support',
      'Emotion detection',
      'Call routing optimization'
    ],
    ctaText: 'Learn More',
    ctaLink: '/voice-agent#customer-service'
  },
  {
    id: 'quoting-assistant',
    title: 'Quoting Assistant',
    description: 'Automated quote generation through conversational AI, providing instant, accurate insurance quotes.',
    icon: '💬',
    features: [
      'Real-time pricing',
      'Personalized recommendations',
      'Coverage explanations',
      'Comparison tools'
    ],
    ctaText: 'Learn More',
    ctaLink: '/voice-agent#quoting-assistant'
  },
  {
    id: 'outreach-manager',
    title: 'Outreach Manager',
    description: 'Proactive customer outreach for policy renewals, updates, and personalized insurance recommendations.',
    icon: '📞',
    features: [
      'Automated scheduling',
      'Personalized messaging',
      'Follow-up management',
      'Campaign analytics'
    ],
    ctaText: 'Learn More',
    ctaLink: '/voice-agent#outreach-manager'
  },
  {
    id: 'renewals-specialist',
    title: 'Renewals Specialist',
    description: 'Manage policy renewals, explain changes, and identify cross-sell opportunities through intelligent conversations.',
    icon: '🔄',
    features: [
      'Renewal reminders',
      'Policy comparisons',
      'Upsell detection',
      'Retention strategies'
    ],
    ctaText: 'Learn More',
    ctaLink: '/voice-agent#renewals-specialist'
  }
];

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Consultation',
    description: 'We analyze your specific needs and identify key AI solutions for your business challenges.',
    icon: '💡'
  },
  {
    number: 2,
    title: 'Data Collection',
    description: 'Gather and prepare your historical data for training our AI models.',
    icon: '📊'
  },
  {
    number: 3,
    title: 'Model Training',
    description: 'Train custom AI models specifically optimized for your business requirements.',
    icon: '🤖'
  },
  {
    number: 4,
    title: 'Deployment',
    description: 'Seamlessly integrate our AI solutions into your existing workflows.',
    icon: '🚀'
  }
];

export const voiceProcessSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Consultation',
    description: 'Identify key AI solutions for your specific challenges.',
    icon: '💬'
  },
  {
    number: 2,
    title: 'Configuration',
    description: 'Configure AI agents to match your specific business processes.',
    icon: '⚙️'
  },
  {
    number: 3,
    title: 'Training',
    description: 'Train voice agents with your data and business rules.',
    icon: '🎓'
  },
  {
    number: 4,
    title: 'Launch',
    description: 'Deploy voice agents with ongoing support and optimization.',
    icon: '🚀'
  }
];

export const techPartners: TechPartner[] = [
  {
    name: 'OpenAI',
    logo: '🧠',
    description: 'Advanced language models'
  },
  {
    name: 'Anthropic',
    logo: '🤖',
    description: 'Claude AI models'
  },
  {
    name: 'DeepSeek',
    logo: '🔍',
    description: 'Specialized AI research'
  },
  {
    name: 'Groq',
    logo: '⚡',
    description: 'Ultra-fast LLM inference'
  },
  {
    name: 'Llama',
    logo: '🦙',
    description: 'Open-source language models'
  },
  {
    name: 'LangChain',
    logo: '🔗',
    description: 'AI application framework'
  },
  {
    name: 'Crew AI',
    logo: '👥',
    description: 'Multi-agent orchestration'
  },
  {
    name: 'Pydantic AI',
    logo: '📐',
    description: 'Structured AI outputs'
  },
  {
    name: 'LiveKit',
    logo: '🎥',
    description: 'Real-time audio/video'
  },
  {
    name: 'ElevenLabs',
    logo: '🎙️',
    description: 'AI voice synthesis'
  },
  {
    name: 'Deepgram',
    logo: '🎧',
    description: 'Speech recognition AI'
  },
  {
    name: 'Supabase',
    logo: '⚡',
    description: 'Backend as a service'
  },
  {
    name: 'Neon',
    logo: '💾',
    description: 'Serverless Postgres'
  },
  {
    name: 'n8n',
    logo: '🔄',
    description: 'Workflow automation'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    author: 'Sarah Johnson',
    role: 'VP of Operations',
    company: 'InsureTech Solutions',
    content: 'AIPE\'s AI solutions have transformed our underwriting process. We\'ve seen a 68% reduction in processing time while maintaining accuracy.',
    rating: 5
  },
  {
    id: '2',
    author: 'Michael Chen',
    role: 'Chief Digital Officer',
    company: 'National Insurance Group',
    content: 'The voice agent technology has revolutionized our customer service. Our satisfaction scores have increased by 40% since implementation.',
    rating: 5
  },
  {
    id: '3',
    author: 'Emily Rodriguez',
    role: 'Director of Innovation',
    company: 'Future Insurance Co.',
    content: 'Working with AIPE has been a game-changer. Their AI-driven insights have helped us identify new market opportunities we never knew existed.',
    rating: 5
  }
];

export const latestInsights: BlogPost[] = [
  {
    id: '1',
    title: 'AI-Driven Policy Making: The New Frontier in Insurance',
    excerpt: 'Exploring how artificial intelligence is revolutionizing the way insurance companies approach policy development, pricing, and risk assessment.',
    date: '2025-01-10',
    readTime: '8 min read',
    slug: 'ai-driven-policy-making-new-frontier'
  },
  {
    id: '2',
    title: 'Ethical Considerations in AI Policy Tools',
    excerpt: 'A deep dive into the ethical framework necessary for responsible AI deployment in the insurance industry.',
    date: '2025-01-05',
    readTime: '10 min read',
    slug: 'ethical-considerations-ai-policy-tools'
  }
];