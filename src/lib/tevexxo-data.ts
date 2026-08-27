import type { LucideIcon } from "lucide-react";
import ecommerceImage from "@/assets/project-ecommerce.jpg";
import aiComplaintImage from "@/assets/project-ai-complaint.jpg";
import cybersecurityImage from "@/assets/project-cybersecurity.jpg";
import courseAiImage from "@/assets/course-ai-ml.jpg";
import courseDataImage from "@/assets/course-data-analytics.jpg";
import courseFullStackImage from "@/assets/course-full-stack.jpg";
import {
  BarChart3,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  LayoutGrid,
  LockKeyhole,
  Paintbrush,
} from "lucide-react";
import {
  slugify,
  type ApiCourse,
  type ApiProgram,
  type ApiProject,
  type ApiTestimonial,
} from "@/lib/api";

/**
 * Static UI configuration only - NOT content data.
 * CMS-managed content (courses / programs / projects / testimonials /
 * settings) is fetched live from the Tevexxo Backend API (see src/lib/api.ts).
 */

export const navItems = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Programs", href: "/programs" },
  { label: "Projects", href: "/projects" },
  { label: "Why Tevexxo", href: "/#why-tevexxo" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export const features = [
  {
    title: "Industry-Aligned Curriculum",
    description: "Courses designed with industry experts.",
    icon: LayoutGrid,
  },
  {
    title: "Hands-on Projects",
    description: "Build real-world projects and strong portfolios.",
    icon: Code2,
  },
  {
    title: "Expert Mentors & Guidance",
    description: "Learn from experienced professionals.",
    icon: BrainCircuit,
  },
  {
    title: "Certification & Placement Support",
    description: "Get certified and get career-ready.",
    icon: LockKeyhole,
  },
  {
    title: "Flexible Learning Options",
    description: "Live classes, recorded sessions and more.",
    icon: Cloud,
  },
  {
    title: "Community & Networking",
    description: "Connect, collaborate and grow together.",
    icon: Database,
  },
];

// ---------------------------------------------------------------------------
// Category-driven presentation helpers
// ---------------------------------------------------------------------------

type IconTheme = { icon: LucideIcon; iconClass: string; image?: string };

const CATEGORY_THEMES: { keywords: string[]; theme: IconTheme }[] = [
  {
    keywords: ["ai", "artificial intelligence", "machine learning", "ml"],
    theme: { icon: BrainCircuit, iconClass: "bg-violet-600", image: courseAiImage },
  },
  {
    keywords: ["data"],
    theme: { icon: BarChart3, iconClass: "bg-emerald-600", image: courseDataImage },
  },
  {
    keywords: ["full stack", "web", "mern", "development"],
    theme: { icon: Code2, iconClass: "bg-orange-600", image: courseFullStackImage },
  },
  {
    keywords: ["cyber", "security"],
    theme: { icon: LockKeyhole, iconClass: "bg-blue-600", image: cybersecurityImage },
  },
  { keywords: ["cloud", "devops"], theme: { icon: Cloud, iconClass: "bg-cyan-600" } },
  { keywords: ["ui/ux", "design"], theme: { icon: Paintbrush, iconClass: "bg-pink-600" } },
];

const FALLBACK_THEME = { icon: Code2, iconClass: "bg-orange-600" };

const PROJECT_GRADIENTS = [
  "from-violet-950 via-slate-900 to-blue-950",
  "from-slate-950 via-orange-950 to-slate-800",
  "from-slate-950 via-blue-950 to-cyan-950",
];

const PROJECT_IMAGES = [ecommerceImage, aiComplaintImage, cybersecurityImage];

function matchTheme(category?: string): IconTheme {
  const value = (category || "").toLowerCase();
  for (const entry of CATEGORY_THEMES) {
    if (entry.keywords.some((keyword) => value.includes(keyword))) return entry.theme;
  }
  return FALLBACK_THEME;
}

// ---------------------------------------------------------------------------
// View models rendered by the UI components
// ---------------------------------------------------------------------------

export type CourseView = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  icon: LucideIcon;
  iconClass: string;
  technologies: string[];
  price?: number | undefined;
  amount?: string | undefined;
  studentsCount?: number | undefined;
  duration?: string | undefined;
  featured?: boolean | undefined;
  image?: string | undefined;
};

export type ProgramView = {
  id: string;
  title: string;
  description: string;
  category: string;
  status: string;
  icon: LucideIcon;
  iconClass: string;
  enrolled?: number | undefined;
  duration?: string | undefined;
};

export type ProjectView = {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: string;
  technologies: string[];
  color: string;
  submissions?: number | undefined;
  image?: string | undefined;
};

export type TestimonialView = {
  id: string;
  name: string;
  role: string;
  quote: string;
  rating: number;
  avatar: string;
};

function initials(name: string): string {
  return (
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .slice(0, 2)
      .toUpperCase() || "TV"
  );
}

export function toCourseView(course: ApiCourse, index: number): CourseView {
  const theme = matchTheme(course.category);
  return {
    id: course.id,
    slug: slugify(course.name),
    title: course.name,
    description: course.detail && !/\d+\s+students/.test(course.detail) ? course.detail : "",
    category: course.category || "",
    icon: theme.icon,
    iconClass: theme.iconClass,
    technologies: course.category ? [course.category] : [],
    price: course.price,
    amount: course.amount,
    studentsCount: course.studentsCount,
    duration: course.date || undefined,
    featured: index === 2,
    image: course.image?.trim() || theme.image,
  };
}

export function toProgramView(program: ApiProgram, index: number): ProgramView {
  const theme = matchTheme(program.category);
  return {
    id: program.id,
    title: program.name,
    description: program.detail || "",
    category: program.category || "",
    status: program.status || "",
    icon: theme.icon,
    iconClass: theme.iconClass,
    enrolled: program.enrolled,
    duration: program.date || undefined,
  };
}

export function toProjectView(project: ApiProject, index: number): ProjectView {
  const theme = matchTheme(project.category);
  return {
    id: project.id,
    title: project.name,
    slug: slugify(project.name),
    description: project.detail || "",
    category: project.category || "",
    technologies: project.category ? [project.category] : [],
    color:
      PROJECT_GRADIENTS[index % PROJECT_GRADIENTS.length] ??
      "from-slate-950 via-slate-900 to-slate-800",
    submissions: project.submissions,
    image: theme.image ?? PROJECT_IMAGES[index % PROJECT_IMAGES.length],
  };
}

export function toTestimonialView(testimonial: ApiTestimonial): TestimonialView {
  return {
    id: testimonial.id,
    name: testimonial.name,
    role: testimonial.category || "Tevexxo Learner",
    quote: testimonial.message || testimonial.detail || "",
    rating: typeof testimonial.rating === "number" ? testimonial.rating : 5,
    avatar: initials(testimonial.name),
  };
}
