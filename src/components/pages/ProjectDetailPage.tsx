import { AppLink } from '@/components/AppLink';
import { ArrowLeft, ExternalLink, Github, Eye } from 'lucide-react';
import { projects } from '@/lib/tevexxo-data';
import { Logo } from '@/components/Logo';
import { SiteLayout } from '@/components/SiteLayout';

export function ProjectDetailPage({ slug }: { slug: string }) {
  const project = projects.find((p) => p.slug === slug);
  if (!project) {
    return (
      <SiteLayout>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
          <h1 className="text-2xl font-black text-slate-950">Project not found</h1>
          <AppLink href="/projects" className="orange-button">Back to projects</AppLink>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="bg-slate-50">
      <header className="hero-grid relative overflow-hidden pb-16 pt-28">
        <div className="container relative z-10">
          <AppLink href="/projects" className="mb-4 inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white">
            <ArrowLeft size={14} /> Back to projects
          </AppLink>
          <p className="eyebrow text-orange-400">REAL WORLD PROJECT</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">{project.description}</p>
        </div>
      </header>
      <section className="container -mt-8 pb-20">
        <div className={`relative mb-6 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${project.color}`}>
          <img
            src={project.image}
            alt={project.title}
            width={1024}
            height={576}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-slate-950/40" />
          <Logo className="relative h-20 w-20" />
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-950">Overview</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">{tech}</span>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-black text-slate-950">Project links</h2>
              <div className="mt-4 space-y-3">
                <a href={`https://tevexxo.com/demo/${project.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700 hover:border-orange-400 hover:text-orange-500">
                  Live Demo <ExternalLink size={14} />
                </a>
                <a href={`https://github.com/tevexxo/${project.slug}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700 hover:border-orange-400 hover:text-orange-500">
                  Source Code <Github size={14} />
                </a>
                <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700">
                  Views <span className="flex items-center text-orange-500"><Eye size={14} className="mr-1" />{project.views}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </SiteLayout>
  );
}
