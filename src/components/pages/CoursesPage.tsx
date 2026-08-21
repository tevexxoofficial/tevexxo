import { AppLink } from '@/components/AppLink';
import { ArrowRight } from 'lucide-react';
import { courses } from '@/lib/tevexxo-data';
import { Logo } from '@/components/Logo';
import { SiteLayout } from '@/components/SiteLayout';


export function CoursesPage() {
  return (
    <SiteLayout>
      <div className="bg-slate-50">
      <header className="hero-grid relative overflow-hidden pb-16 pt-28">
        <div className="container relative z-10 flex items-center gap-4">
          <Logo className="h-12 w-12" />
          <div>
          <p className="eyebrow text-orange-400">OUR COURSES</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Explore every path to a <span className="text-orange-500">future-ready</span> career.
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            Six industry-aligned programs designed with mentors who build real systems every day.
          </p>
          </div>
        </div>
      </header>
      <section className="container -mt-8 pb-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => {
            const Icon = course.icon;
            return (
              <article key={course.title} className="course-card flex min-h-[300px] flex-col rounded-2xl border bg-white p-6 shadow-sm">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${course.iconClass}`}>
                  <Icon size={24} />
                </div>
                <h2 className="text-lg font-black text-slate-950">{course.title}</h2>
                <p className="mt-2 text-xs leading-5 text-slate-500">{course.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {course.technologies.map((tech) => (
                    <span key={tech} className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">{tech}</span>
                  ))}
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] text-slate-500">
                  <span>{course.duration} • {course.level}</span>
                  <span className="font-bold text-orange-500">★ {course.rating}</span>
                </div>
              </article>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <AppLink href="/contact" className="orange-button">Talk to an advisor <ArrowRight size={16} /></AppLink>
        </div>
      </section>
      </div>
    </SiteLayout>
  );
}
