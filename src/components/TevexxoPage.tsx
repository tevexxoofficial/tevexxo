import { AppLink } from '@/components/AppLink';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  BookOpen,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock3,
  ExternalLink,
  Github,
  Star,
  Users,
} from 'lucide-react';
import { FormEvent, useState } from 'react';
import { courses, features, projects, testimonials, type Course } from '@/lib/tevexxo-data';
import { Logo } from '@/components/Logo';
import { SiteLayout, useSiteChrome } from '@/components/SiteLayout';

const reveal = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
const sectionMotion = {
  initial: 'hidden',
  whileInView: 'visible',
  viewport: { once: true, amount: 0.12 },
  transition: { staggerChildren: 0.08 },
};

function Hero() {
  const { openDemo } = useSiteChrome();
  const orbitCards = [
    { label: 'AI & ML', icon: '✦', className: 'left-0 top-6' },
    { label: 'Cyber Security', icon: '◇', className: 'right-0 top-16' },
    { label: 'Full Stack', icon: '</>', className: 'left-2 top-32' },
    { label: 'Cloud & DevOps', icon: '☁', className: 'right-2 top-36' },
    { label: 'Data Analytics', icon: '▥', className: 'left-10 bottom-10' },
    { label: 'UI/UX Design', icon: '⌘', className: 'right-8 bottom-6' },
  ];
  return (
    <section id="home" className="hero-grid relative overflow-hidden">
      <div className="container relative z-10 grid min-h-[650px] items-center gap-10 pb-28 pt-28 lg:grid-cols-[.95fr_1.05fr] lg:pb-32 lg:pt-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.06] px-4 py-2 text-[11px] font-semibold text-slate-200">
            Empowering Future Tech Leaders <span className="text-orange-400">✦</span>
          </div>
          <h1 className="max-w-xl text-5xl font-black leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl">
            Build Skills.
            <br />
            Build Your <span className="text-orange-500">Future.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-slate-300">
            Industry-focused training programs to help you learn, build real-world projects and become career-ready.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <AppLink href="/courses" className="orange-button">
              Explore Courses <ArrowRight size={17} />
            </AppLink>
            <button onClick={openDemo} className="outline-button">
              Book Free Demo <CalendarDays size={16} />
            </button>
          </div>
          <div className="mt-9 flex items-center gap-4">
            <div className="flex -space-x-3">
              {['PS', 'AK', 'NP', 'RV'].map((avatar) => (
                <span key={avatar} className="avatar-ring">{avatar}</span>
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-white">10K+ Learners</p>
              <p className="text-xs text-slate-400">already growing with us</p>
            </div>
          </div>
        </motion.div>

        <div className="relative mx-auto h-[380px] w-full max-w-[520px] sm:h-[460px]">
          <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/25 blur-3xl" />
          <motion.div className="orbit orbit-one" animate={{ rotate: 360 }} transition={{ duration: 40, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="orbit orbit-two" animate={{ rotate: -360 }} transition={{ duration: 55, repeat: Infinity, ease: 'linear' }} />
          <motion.div className="orbit orbit-three" animate={{ rotate: 360 }} transition={{ duration: 70, repeat: Infinity, ease: 'linear' }} />

          <motion.div className="orbit-particles" animate={{ rotate: 360 }} transition={{ duration: 50, repeat: Infinity, ease: 'linear' }}>
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <span
                key={deg}
                className="orbit-dot"
                style={{ transform: `rotate(${deg}deg) translateY(-150px)` }}
              />
            ))}
          </motion.div>

          <motion.div
            className="hero-emblem"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1, y: [0, -6, 0] }}
            transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 }, y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
            whileHover={{ scale: 1.04 }}
          >
            <Logo className="h-32 w-32 sm:h-40 sm:w-40" priority />
          </motion.div>

          {orbitCards.map((card, index) => (
            <motion.div
              key={card.label}
              className={`tech-float ${card.className}`}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1, y: [0, index % 2 ? -6 : 6, 0] }}
              transition={{ delay: 0.3 + index * 0.08, opacity: { duration: 0.4 }, scale: { duration: 0.4 }, y: { duration: 5 + index * 0.3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' } }}
            >
              <span className="text-orange-400">{card.icon}</span>
              <span>{card.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="wave-bottom" />
    </section>
  );
}

function Stats() {
  const stats: { value: string; label: string; icon: typeof Users }[] = [
    { value: '10K+', label: 'Active Learners', icon: Users },
    { value: '25+', label: 'Industry Programs', icon: BookOpen },
    { value: '95%', label: 'Completion Rate', icon: Award },
    { value: '50+', label: 'Expert Mentors', icon: Users },
  ];
  return (
    <div className="container relative z-20 -mt-10">
      <div className="grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-[0_18px_50px_rgba(15,23,42,.1)] sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => {
          const StatIcon = stat.icon;
          return (
            <div key={stat.label} className={`flex items-center gap-4 px-6 py-6 ${index ? 'border-t border-slate-100 sm:border-l lg:border-t-0' : ''}`}>
              <div className="stat-icon"><StatIcon size={21} /></div>
              <div>
                <p className="text-2xl font-black text-slate-950">{stat.value}</p>
                <p className="text-xs font-medium text-slate-500">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SectionHeading({ eyebrow, title, accent, action }: { eyebrow: string; title: string; accent: string; action?: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-4">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
          {title} <span className="text-orange-500">{accent}</span>
        </h2>
      </div>
      {action}
    </div>
  );
}

function CourseCard({ course }: { course: Course }) {
  const Icon = course.icon;
  return (
    <motion.article
      variants={reveal}
      whileHover={{ y: -6 }}
      className="course-card group relative flex min-h-[330px] flex-col rounded-2xl border bg-white p-5 shadow-sm" 
    >
      {course.featured && <span className="absolute right-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[9px] font-black tracking-wider text-white">POPULAR</span>}
      <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${course.iconClass}`}>
        <Icon size={24} />
      </div>
      <h3 className="max-w-[180px] text-lg font-black leading-tight text-slate-950">{course.title}</h3>
      <p className="mt-2 text-xs leading-5 text-slate-500">{course.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {course.technologies.map((tech) => (
          <span key={tech} className="rounded bg-slate-100 px-2 py-1 text-[9px] font-semibold text-slate-600">{tech}</span>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-2 border-t border-slate-100 pt-4 text-[10px] text-slate-500">
        <Clock3 size={13} />{course.duration}<span className="mx-1 text-slate-300">•</span>{course.level}
      </div>
      <div className="mt-3 flex items-center justify-between">
        <span className="flex items-center gap-1 text-xs font-bold text-orange-500">
          <Star size={13} fill="currentColor" /> {course.rating} <span className="font-normal text-slate-400">({course.reviews})</span>
        </span>
        <AppLink href="/courses" className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors group-hover:border-orange-500 group-hover:bg-orange-500 group-hover:text-white"  aria-label={`Explore ${course.title}`}>
          <ArrowRight size={15} />
        </AppLink>
      </div>
    </motion.article>
  );
}

function Courses() {
  return (
    <section id="courses" className="section-space bg-slate-50">
      <div className="container">
        <SectionHeading
          eyebrow="OUR COURSES"
          title="Explore Our"
          accent="Top Courses"
          action={<AppLink href="/courses" className="hidden items-center gap-2 text-xs font-bold text-slate-600 sm:flex">View All Courses <ArrowRight size={14} /></AppLink>}
        />
        <motion.div {...sectionMotion} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {courses.map((course) => <CourseCard course={course} key={course.title} />)}
        </motion.div>
        <AppLink href="/courses" className="mt-6 flex items-center justify-center gap-2 text-xs font-bold text-orange-500 sm:hidden">
          View All Courses <ArrowRight size={14} />
        </AppLink>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="section-space bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="REAL WORLD PROJECTS"
          title="Build. Showcase."
          accent="Get Hired."
          action={<AppLink href="/projects" className="hidden items-center gap-2 text-xs font-bold text-slate-600 sm:flex">View All Projects <ArrowRight size={14} /></AppLink>}
        />
        <motion.div {...sectionMotion} className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              variants={reveal}
              whileHover={{ y: -6 }}
              key={project.title}
              className="course-card overflow-hidden rounded-2xl border bg-white shadow-sm" 
            >
              <div className="relative h-44 overflow-hidden bg-slate-950">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={576}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                <span className="absolute left-4 top-4 rounded bg-orange-500 px-2 py-1 text-[9px] font-black text-white">FEATURED</span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-slate-950">{project.title}</h3>
                <p className="mt-1 text-xs leading-5 text-slate-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="rounded bg-orange-50 px-2 py-1 text-[9px] font-semibold text-orange-600">{tech}</span>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-[10px] font-semibold">
                  <a href={`https://tevexxo.com/demo/${project.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 hover:text-orange-500">
                    <ExternalLink size={13} className="mr-1" />Live Demo
                  </a>
                  <a href={`https://github.com/tevexxo/${project.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 hover:text-orange-500">
                    <Github size={13} className="mr-1" />Source Code
                  </a>
                  <AppLink href={`/projects/${project.slug}`} className="flex items-center text-orange-500">
                    {project.views} <span className="ml-1 font-normal text-slate-400">Views</span>
                  </AppLink>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function WhyTevexxo() {
  return (
    <section id="why-tevexxo" className="bg-slate-50 py-14">
      <div className="container">
        <SectionHeading eyebrow="WHY CHOOSE TEVEXXO?" title="Learn with a" accent="real advantage." />
        <motion.div {...sectionMotion} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div variants={reveal} whileHover={{ y: -3 }} key={feature.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-sm font-black text-slate-950">{feature.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [active, setActive] = useState(0);
  const visible = testimonials.slice(active, active + 3);
  return (
    <section className="bg-white py-14">
      <div className="container">
        <SectionHeading
          eyebrow="WHAT OUR LEARNERS SAY"
          title="Real stories from"
          accent="real learners."
          action={
            <div className="flex gap-2">
              <button onClick={() => setActive(Math.max(0, active - 1))} className="carousel-button" aria-label="Previous testimonial">
                <ChevronLeft size={16} />
              </button>
              <button onClick={() => setActive(Math.min(testimonials.length - 3, active + 1))} className="carousel-button" aria-label="Next testimonial">
                <ChevronRight size={16} />
              </button>
            </div>
          }
        />
        <motion.div layout className="grid gap-4 md:grid-cols-3">
          {visible.map((testimonial) => (
            <motion.article layout key={testimonial.name} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
              <div className="mb-4 text-3xl font-black leading-none text-orange-500">&ldquo;</div>
              <p className="min-h-[60px] text-xs leading-5 text-slate-600">{testimonial.quote}</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex items-center gap-3">
                  <span className="avatar-ring small">{testimonial.avatar}</span>
                  <div>
                    <p className="text-xs font-black text-slate-950">{testimonial.name}</p>
                    <p className="text-[10px] text-slate-400">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex text-orange-500">
                  {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" />)}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setStatus('Please enter a valid email.');
      return;
    }
    setStatus("You're in. Check your inbox for the next step.");
    setEmail('');
  };
  return (
    <section id="programs" className="bg-white px-4 pb-16">
      <div className="container">
        <div className="cta-panel relative overflow-hidden rounded-[26px] px-6 py-8 sm:px-12 sm:py-10">
          <div className="relative z-10 flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-3 leading-none">
                <Logo className="h-8 w-8" />
                <span className="text-sm font-bold text-orange-500">TEVEXXO</span>
              </div>
              <h2 className="text-2xl font-black text-white sm:text-3xl">Ready to Upgrade Your Tech Skills?</h2>
              <p className="mt-2 text-sm text-slate-400">Join thousands of learners and start your journey with Tevexxo today.</p>
            </div>
            <form onSubmit={submit} className="w-full max-w-md">
              <div className="flex rounded-xl border border-white/15 bg-white/5 p-1">
                <input
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  type="email"
                  placeholder="Enter your email address"
                  className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-500"
                  aria-label="Email address"
                />
                <button className="shrink-0 rounded-lg bg-orange-500 px-4 py-3 text-xs font-black text-white shadow-lg shadow-orange-500/20">
                  Start Learning <ArrowRight size={14} className="ml-1 inline" />
                </button>
              </div>
              {status && (
                <p className={`mt-2 text-xs ${status.startsWith('Please') ? 'text-red-300' : 'text-emerald-300'}`}>{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function TevexxoPage() {
  return (
    <SiteLayout>
      <Hero />
      <Stats />
      <main>
        <Courses />
        <Projects />
        <WhyTevexxo />
        <Testimonials />
        <CTA />
      </main>
    </SiteLayout>
  );
}
