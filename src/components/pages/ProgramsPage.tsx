import { AppLink } from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import { toProgramView } from "@/lib/tevexxo-data";
import { usePrograms } from "@/hooks/useTevexxoApi";
import { SectionSkeleton, SectionError, SectionEmpty } from "@/components/ContentState";
import { Logo } from "@/components/Logo";
import { SiteChrome } from "@/components/SiteNav";

export function ProgramsPage() {
  const query = usePrograms();
  const programs = (query.data ?? []).map(toProgramView);
  return (
    <div className="bg-slate-50">
      <SiteChrome />
      <header className="hero-grid relative overflow-hidden pb-16 pt-44">
        <div className="container relative z-10 flex items-center gap-4">
          <Logo className="h-12 w-12" />
          <div>
            <p className="eyebrow text-orange-400">PROGRAMS</p>
            <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Programs that go beyond <span className="text-orange-500">the classroom.</span>
            </h1>
          </div>
        </div>
      </header>
      <section className="container mt-8 pb-20">
        {query.isPending ? (
          <SectionSkeleton count={4} />
        ) : query.isError ? (
          <SectionError
            message="We couldn't load programs right now."
            onRetry={() => void query.refetch()}
          />
        ) : programs.length === 0 ? (
          <SectionEmpty message="New programs are being prepared. Check back soon." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.id}
                  className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
                >
                  <div
                    className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-white ${program.iconClass}`}
                  >
                    <Icon size={20} />
                  </div>
                  <h2 className="text-sm font-black text-slate-950">{program.title}</h2>
                  {program.description && (
                    <p className="mt-2 text-xs leading-5 text-slate-500">{program.description}</p>
                  )}
                  <div className="mt-auto pt-4 text-[10px] font-semibold uppercase tracking-wide text-slate-400">
                    {[
                      program.category,
                      program.duration,
                      typeof program.enrolled === "number"
                        ? `${program.enrolled.toLocaleString("en-IN")} enrolled`
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" • ")}
                    {program.status && program.status !== "Active" && (
                      <span className="ml-2 rounded-full bg-orange-50 px-2 py-0.5 text-[9px] font-black text-orange-600">
                        {program.status}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
      <section className="container pb-20 text-center">
        <AppLink href="/contact" className="orange-button">
          Apply for a program <ArrowRight size={16} />
        </AppLink>
      </section>
    </div>
  );
}
