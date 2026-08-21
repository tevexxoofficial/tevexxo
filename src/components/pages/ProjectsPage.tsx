import { AppLink } from '@/components/AppLink';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/tevexxo-data';
import { Logo } from '@/components/Logo';
import { SiteLayout } from '@/components/SiteLayout';


export function ProjectsPage() {
  return (
    <SiteLayout>
      <div className="bg-slate-50">
      <header className="hero-grid relative overflow-hidden pb-16 pt-28">
        <div className="container relative z-10 flex items-center gap-4">
          <Logo className="h-12 w-12" />
          <div>
          <p className="eyebrow text-orange-400">REAL WORLD PROJECTS</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Build. Showcase. <span className="text-orange-500">Get Hired.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            Every program ends with portfolio-grade projects that mirror what teams ship in production.
          </p>
          </div>
        </div>
      </header>
      <section className="container -mt-8 grid gap-5 pb-20 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="course-card overflow-hidden rounded-2xl border bg-white shadow-sm">
            <div className="relative h-44 overflow-hidden bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                width={1024}
                height={576}
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>
            <div className="p-5">
              <h2 className="text-lg font-black text-slate-950">{project.title}</h2>
              <p className="mt-1 text-xs leading-5 text-slate-500">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.technologies.map((tech) => (
                  <span key={tech} className="rounded bg-orange-50 px-2 py-1 text-[10px] font-semibold text-orange-600">{tech}</span>
                ))}
              </div>
              <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-[10px] font-semibold">
                <a href={`https://tevexxo.com/demo/${project.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 hover:text-orange-500">
                  <ExternalLink size={13} className="mr-1" />Live Demo
                </a>
                <a href={`https://github.com/tevexxo/${project.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-600 hover:text-orange-500">
                  <Github size={13} className="mr-1" />Source Code
                </a>
                <AppLink href={`/projects/${project.slug}`} className="text-orange-500 hover:underline">
                  View
                </AppLink>
              </div>
            </div>
          </article>
        ))}
      </section>
      </div>
    </SiteLayout>
  );
}
