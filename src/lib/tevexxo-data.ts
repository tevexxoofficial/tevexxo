import type { LucideIcon } from 'lucide-react';
import ecommerceImage from '@/assets/project-ecommerce.jpg';
import aiComplaintImage from '@/assets/project-ai-complaint.jpg';
import cybersecurityImage from '@/assets/project-cybersecurity.jpg';
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  LayoutGrid,
  LockKeyhole,
  Paintbrush,
} from 'lucide-react';

export type Course = {
  title: string;
  description: string;
  icon: LucideIcon;
  iconClass: string;
  technologies: string[];
  duration: string;
  level: string;
  rating: string;
  reviews: string;
  featured?: boolean;
};

export type Project = {
  title: string;
  slug: string;
  description: string;
  technologies: string[];
  color: string;
  views: string;
  image: string;
};

export const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Programs', href: '/programs' },
  { label: 'Projects', href: '/projects' },
  { label: 'Why Tevexxo', href: '/why-tevexxo' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const courses: Course[] = [
  { title: 'AI & Machine Learning', description: 'Master AI, ML, Deep Learning and build intelligent systems.', icon: BrainCircuit, iconClass: 'bg-violet-600', technologies: ['Python', 'TensorFlow', 'NLP'], duration: '6 Months', level: 'Advanced', rating: '4.8', reviews: '320' },
  { title: 'Data Analytics', description: 'Analyze data and derive insights for real impact.', icon: BarChart3, iconClass: 'bg-emerald-600', technologies: ['Excel', 'SQL', 'Power BI'], duration: '6 Months', level: 'Intermediate', rating: '4.7', reviews: '210' },
  { title: 'Full Stack Development', description: 'Build modern web applications from frontend to backend.', icon: Code2, iconClass: 'bg-orange-600', technologies: ['HTML', 'React', 'Node.js'], duration: '6 Months', level: 'Advanced', rating: '4.9', reviews: '450', featured: true },
  { title: 'Cyber Security', description: 'Learn ethical hacking and protect digital assets.', icon: LockKeyhole, iconClass: 'bg-blue-600', technologies: ['Network', 'Security', 'Pentest'], duration: '6 Months', level: 'Advanced', rating: '4.8', reviews: '180' },
  { title: 'Cloud & DevOps', description: 'Deploy, automate and scale with cloud technologies.', icon: Cloud, iconClass: 'bg-cyan-600', technologies: ['AWS', 'Docker', 'Kubernetes'], duration: '5 Months', level: 'Intermediate', rating: '4.7', reviews: '190' },
  { title: 'UI/UX Design', description: 'Design beautiful, user-friendly and impactful experiences.', icon: Paintbrush, iconClass: 'bg-pink-600', technologies: ['Figma', 'Adobe XD', 'UI Design'], duration: '5 Months', level: 'Beginner', rating: '4.6', reviews: '160' },
];

export const projects: Project[] = [
  { title: 'E-Commerce Platform', slug: 'e-commerce-platform', description: 'Full-stack e-commerce app with payments, admin dashboard and analytics.', technologies: ['MERN', 'Stripe', 'Tailwind', 'Redux'], color: 'from-violet-950 via-slate-900 to-blue-950', views: '350+', image: ecommerceImage },
  { title: 'AI Complaint System', slug: 'ai-complaint-system', description: 'AI-powered complaint classification and smart response system.', technologies: ['Python', 'FastAPI', 'ML Model', 'PostgreSQL'], color: 'from-slate-950 via-orange-950 to-slate-800', views: '420+', image: aiComplaintImage },
  { title: 'Cybersecurity Monitoring Dashboard', slug: 'cybersecurity-monitoring-dashboard', description: 'Real-time threat monitoring and security analytics dashboard.', technologies: ['Python', 'React', 'Chart.js', 'MongoDB'], color: 'from-slate-950 via-blue-950 to-cyan-950', views: '380+', image: cybersecurityImage },
];

export const testimonials = [
  { name: 'Priya Sharma', role: 'AI/ML Engineer', quote: 'Tevexxo’s hands-on approach helped me build confidence and land my dream job in AI.', avatar: 'PS' },
  { name: 'Arjun Kumar', role: 'Full Stack Developer', quote: 'The projects and mentorship I got here transformed my career completely.', avatar: 'AK' },
  { name: 'Neha Patil', role: 'Cybersecurity Analyst', quote: 'The cybersecurity training and labs are top-notch, highly recommended.', avatar: 'NP' },
  { name: 'Rohit Verma', role: 'Data Analyst', quote: 'Great learning experience, supportive mentors and an amazing community.', avatar: 'RV' },
];

export const features = [
  { title: 'Industry-Aligned Curriculum', description: 'Courses designed with industry experts.', icon: LayoutGrid },
  { title: 'Hands-on Projects', description: 'Build real-world projects and strong portfolios.', icon: Code2 },
  { title: 'Expert Mentors & Guidance', description: 'Learn from experienced professionals.', icon: BrainCircuit },
  { title: 'Certification & Placement Support', description: 'Get certified and get career-ready.', icon: LockKeyhole },
  { title: 'Flexible Learning Options', description: 'Live classes, recorded sessions and more.', icon: Cloud },
  { title: 'Community & Networking', description: 'Connect, collaborate and grow together.', icon: Database },
];
