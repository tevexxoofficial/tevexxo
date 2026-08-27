import { AppLink } from "@/components/AppLink";
import { ArrowLeft, Tag } from "lucide-react";
import { toProjectView } from "@/lib/tevexxo-data";
import { useProject, useProjects } from "@/hooks/useTevexxoApi";
import { Logo } from "@/components/Logo";
import { SiteChrome } from "@/components/SiteNav";

export function ProjectDetailPage({ slug }: { slug: string }) {
  const query = useProject(slug);
  const listQuery = useProjects();
  const projects = (listQuery.data ?? []).map(toProjectView);
  const fallback = projects.find((p) => p.slug === slug);
  // Keep the grid-consistent gradient/image index when the full list is loaded.
  const listIndex = query.data ? projects.findIndex((p) => p.id === query.data.id) : -1;
  const project = query.data ? toProjectView(query.data, Math.max(listIndex, 0)) : fallback;

  if (query.isPending && !fallback) {
    return (
      <div className="min-h-screen bg-slate-50">
        <SiteChrome />
        <div className="container flex min-h-[60vh] items-center justify-center pt-32">
          <p className="text-sm font-semibold text-slate-500">Loading project...</p>
        </div>
      </div>
    );
  }

  if (query.isError && !project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
        <h1 className="text-2xl font-black text-slate-950">Project not found</h1>
        <p className="text-sm text-slate-500">It may have been unpublished by the Tevexxo team.</p>
        <AppLink href="/projects" className="orange-button">
          Back to projects
        </AppLink>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
        <h1 className="text-2xl font-black text-slate-950">Project not found</h1>
        <AppLink href="/projects" className="orange-button">
          Back to projects
        </AppLink>
      </div>
    );
  }

  return (
    <div className="bg-slate-50">
      <SiteChrome />
      <header className="hero-grid relative overflow-hidden pb-16 pt-44">
        <div className="container relative z-10">
          <AppLink
            href="/projects"
            className="mb-4 inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white"
          >
            <ArrowLeft size={14} /> Back to projects
          </AppLink>
          <p className="eyebrow text-orange-400">REAL WORLD PROJECT</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            {project.title}
          </h1>
          {project.description && (
            <p className="mt-4 max-w-xl text-sm text-slate-300">{project.description}</p>
          )}
        </div>
      </header>
      <section className="container mt-8 pb-20">
        <div
          className={`relative mb-6 flex h-64 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${project.color}`}
        >
          {project.image && (
            <img
              src={project.image}
              alt={project.title}
              width={1024}
              height={576}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-slate-950/40" />
          <Logo className="relative h-20 w-20" />
        </div>
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-950">Overview</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {project.description || "Details for this project are being prepared."}
            </p>
            {project.technologies.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-black text-slate-950">Project info</h2>
              <div className="mt-4 space-y-3">
                {project.category && (
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700">
                    Category{" "}
                    <span className="flex items-center gap-1 text-orange-500">
                      <Tag size={13} />
                      {project.category}
                    </span>
                  </div>
                )}
                {typeof project.submissions === "number" && (
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700">
                    Submissions{" "}
                    <span className="text-orange-500">
                      {project.submissions.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}
                <AppLink
                  href="/contact"
                  className="flex items-center justify-between rounded-xl bg-orange-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
                >
                  Build projects like this
                </AppLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
