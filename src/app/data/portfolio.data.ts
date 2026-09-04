import { ContactPath, Experience, NavItem, ProofStat, Recognition, Service, SkillNode } from '../models/portfolio.models';

export const LINKS = {
  email: 'mailto:arunkumar.dev.404@gmail.com',
  phone: 'tel:+919790288107',
  linkedin: 'https://www.linkedin.com/in/arunkumar-dev404',
  github: 'https://github.com/arunkumardev404-png',
  sarvexture: 'https://sarvexture-website.vercel.app/services',
  whatsapp: 'https://wa.me/919790288107?text=Hi%20Arun%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  resume: '/Arun-Kumar-Angular-Product-Engineer-Resume.pdf'
} as const;

export const NAV_ITEMS: readonly NavItem[] = [
  { label: 'Home', target: 'home' }, { label: 'Skills', target: 'skills' },
  { label: 'Experience', target: 'experience' }, { label: 'Work', target: 'work' },
  { label: 'Services', target: 'services' }, { label: 'Story', target: 'story' },
  { label: 'Contact', target: 'contact' }
];

// Update audience figures here without touching templates.
export const PROOF_STATS: readonly ProofStat[] = [
  { value: '4.5+', label: 'Years Engineering' }, { value: '3', label: 'Professional Awards' },
  { value: '7.3K+', label: 'LinkedIn Followers' }, { value: '500+', label: 'Connections' }
];

export const HERO_TECH = [
  ['Angular', 'angular.svg'], ['TypeScript', 'typescript.svg'], ['JavaScript', 'javascript.svg'],
  ['HTML5', 'html5.svg'], ['CSS3', 'css.svg'], ['NgRx', 'ngrx.svg'],
  ['RxJS', 'reactivex.svg'], ['REST API', 'rest-api.svg'], ['.NET', 'dotnet.svg'], ['Neo4j', 'neo4j.svg']
] as const;

const groupDescriptions: Record<string, string> = {
  'Front-end': 'Polished, accessible Angular interfaces built for real product teams.',
  'Reactive architecture': 'Predictable state, streams and signals for complex workflows.',
  Services: 'Reliable integrations across APIs, real-time channels and existing services.',
  Data: 'Connected, relational and object-storage systems shaped for the interface.',
  Visualisation: 'Dense information translated into legible interactive systems.',
  Delivery: 'Production delivery with observable, repeatable engineering workflows.'
};

export const SKILL_NODES: readonly SkillNode[] = [
  { id: 'angular', label: 'Angular', group: 'Front-end', description: groupDescriptions['Front-end'], x: 18, y: 25, logo: 'angular.svg' },
  { id: 'typescript', label: 'TypeScript', group: 'Front-end', description: groupDescriptions['Front-end'], x: 13, y: 52, logo: 'typescript.svg' },
  { id: 'frontend', label: 'UI systems', group: 'Front-end', description: 'JavaScript · HTML5 · CSS3 · Material · PrimeNG', x: 26, y: 74 },
  { id: 'ngrx', label: 'NgRx', group: 'Reactive architecture', description: groupDescriptions['Reactive architecture'], x: 41, y: 18, logo: 'ngrx.svg' },
  { id: 'rxjs', label: 'RxJS', group: 'Reactive architecture', description: groupDescriptions['Reactive architecture'], x: 55, y: 16, logo: 'reactivex.svg' },
  { id: 'signals', label: 'Signals', group: 'Reactive architecture', description: 'Signals · component state · API streams', x: 48, y: 37 },
  { id: 'rest', label: 'REST API', group: 'Services', description: groupDescriptions['Services'], x: 73, y: 22, logo: 'rest-api.svg' },
  { id: 'dotnet', label: '.NET APIs', group: 'Services', description: 'REST · gRPC-Web · SignalR · existing .NET services', x: 86, y: 39, logo: 'dotnet.svg' },
  { id: 'neo4j', label: 'Neo4j', group: 'Data', description: groupDescriptions['Data'], x: 78, y: 69, logo: 'neo4j.svg' },
  { id: 'data', label: 'Data stores', group: 'Data', description: 'MSSQL · PostgreSQL · Amazon S3', x: 65, y: 82 },
  { id: 'viz', label: 'Visualisation', group: 'Visualisation', description: 'D3.js · Chart.js · amCharts', x: 39, y: 83 },
  { id: 'delivery', label: 'Delivery', group: 'Delivery', description: 'Azure DevOps · Git · CI/CD · Docker · Kubernetes · Kibana', x: 18, y: 84 }
];

export const EXPERIENCES: readonly Experience[] = [
  {
    company: 'Xtract.io Technology Solutions', role: 'Software Developer', period: 'July 2024 – Present',
    summary: 'Enterprise Angular interfaces for intelligent, observable workflows.',
    initiatives: ['Enterprise Agentic AI Platform', 'Document Automation Interface', 'Multi-Agent Workflow System'],
    capabilities: ['Angular 17 / 19 / 21', 'Agentic-AI workflow interfaces', 'Multi-agent orchestration UI', 'Human-in-the-loop review', 'Interactive workflow canvas', 'Job and session coordination', 'Audit and log visibility', 'Kibana debugging', 'Azure DevOps delivery']
  },
  {
    company: 'Mobius Knowledge Services', role: 'Software Developer', period: 'March 2022 – June 2024',
    summary: 'Data-rich Angular products connected to graph, storage and CRM services.',
    initiatives: ['Connected Data Applications', 'Enterprise Workflow Interfaces', 'Analytics & Visualisation'],
    capabilities: ['Angular', 'NgRx', 'PrimeNG', 'Neo4j', 'Amazon S3', 'PostgreSQL', 'MSSQL', 'Power BI', 'Zoho CRM', 'RESTful microservices', 'D3.js visualisation']
  }
];

export const SERVICES: readonly Service[] = [
  { id: 'saas', title: 'SaaS MVP Development', icon: '◎', description: 'Turn a validated idea into a focused, launch-ready product.', deliverables: ['Product flow', 'Angular front end', 'API integration'] },
  { id: 'angular', title: 'Angular Applications', icon: 'A', description: 'Build maintainable Angular interfaces for complex business workflows.', deliverables: ['Architecture', 'Component system', 'State management'] },
  { id: 'landing', title: 'Landing Pages', icon: '↗', description: 'Create a sharp, fast page built around one clear action.', deliverables: ['Responsive design', 'Motion polish', 'SEO foundations'] },
  { id: 'websites', title: 'Business Websites', icon: '◇', description: 'Give your business a credible, purposeful home on the web.', deliverables: ['UX structure', 'Responsive build', 'Launch support'] },
  { id: 'dashboards', title: 'Dashboards & Admin Portals', icon: '▦', description: 'Make operational data easier to understand and act on.', deliverables: ['Data views', 'Role-aware UI', 'Visualisation'] },
  { id: 'videos', title: 'AI Videos', icon: '▶', description: 'Shape concepts into short AI-assisted promotional motion.', deliverables: ['Concept', 'Generation', 'Editing'] },
  { id: 'ads', title: 'Animated Advertisements', icon: '✦', description: 'Design concise motion pieces that make an offer memorable.', deliverables: ['Storyboard', 'Motion design', 'Delivery formats'] },
  { id: 'social', title: 'Social Media Strategy', icon: '#', description: 'Build a practical content system around audience and goals.', deliverables: ['Research', 'Content pillars', 'Calendar'] },
  { id: 'content', title: 'Content Creation', icon: '✎', description: 'Develop platform-aware ideas, hooks and scripts.', deliverables: ['Hooks', 'Scripts', 'Content plan'] },
  { id: 'maintenance', title: 'Website Maintenance', icon: '↻', description: 'Keep your site healthy, current and dependable.', deliverables: ['Updates', 'Performance checks', 'Issue resolution'] },
  { id: 'api', title: 'API Integration', icon: '⇄', description: 'Connect interfaces cleanly to the services they depend on.', deliverables: ['Data contracts', 'Error states', 'Integration testing'] }
];

export const RECOGNITION: readonly Recognition[] = [
  { title: 'Star of the Quarter – Q3', organisation: 'Xtract.io', year: '2024', statement: 'Recognised for reliable ownership and engineering contribution.' },
  { title: 'Star of the Quarter – Q1', organisation: 'Xtract.io', year: '2025', statement: 'Recognised for consistent delivery across evolving product needs.' },
  { title: 'Going the Extra Mile', organisation: 'Mobius Knowledge Services', year: '2024', statement: 'Recognised for initiative beyond the expected scope.' }
];

export const CONTACT_PATHS: readonly ContactPath[] = [
  { audience: 'Recruiter', label: 'Hire for an Angular role', subject: 'Angular opportunity' },
  { audience: 'Founder', label: 'Discuss a SaaS product', subject: 'SaaS product discussion' },
  { audience: 'Business', label: 'Build a website or landing page', subject: 'Website project' },
  { audience: 'Creative client', label: 'Create AI media or plan social growth', subject: 'Creative project' }
];

export const FUTURE_CONTENT_MEDIA: readonly { src: string; alt: string }[] = [];
