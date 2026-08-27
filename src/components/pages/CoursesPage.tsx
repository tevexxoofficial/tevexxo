import { AppLink } from "@/components/AppLink";
import { ArrowRight } from "lucide-react";
import { toCourseView } from "@/lib/tevexxo-data";
import { useCourses } from "@/hooks/useTevexxoApi";
import { SectionSkeleton, SectionError, SectionEmpty } from "@/components/ContentState";
import { Logo } from "@/components/Logo";
import { SiteChrome } from "@/components/SiteNav";

export function CoursesPage() {
  const query = useCourses();
  const courses = (query.data ?? []).map(toCourseView);
  return (
    <div className="bg-slate-50">
      <SiteChrome />
      <header className="hero-grid relative overflow-hidden pb-16 pt-44">
        <div className="container relative z-10 flex items-center gap-4">
          <Logo className="h-12 w-12" />
          <div>
            <p className="eyebrow text-orange-400">OUR COURSES</p>
            <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Explore every path to a <span className="text-orange-500">future-ready</span> career.
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              Industry-aligned courses designed with mentors who build real systems every day.
            </p>
          </div>
        </div>
      </header>
      <section className="container mt-8 pb-20">
        {query.isPending ? (
          <SectionSkeleton count={6} tall />
        ) : query.isError ? (
          <SectionError
            message="We couldn't load our courses right now."
            onRetry={() => void query.refetch()}
          />
        ) : courses.length === 0 ? (
          <SectionEmpty message="New courses are being prepared. Check back soon." />
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => {
              const Icon = course.icon;
              return (
                <AppLink
                  key={course.id}
                  href={`/courses/${course.slug}`}
                  aria-label={`View ${course.title}`}
                  className="course-card group flex min-h-[300px] flex-col rounded-2xl border bg-white p-6 shadow-sm outline-none ring-orange-300 transition-shadow hover:shadow-md focus-visible:ring-2 focus-visible:ring-offset-2"
                >
                  {course.image && (
                    <div className="-mx-6 -mt-6 mb-5 h-36 overflow-hidden rounded-t-2xl bg-slate-950">
                      <img
                        src={course.image}
                        alt={course.title}
                        loading="lazy"
                        width={1024}
                        height={576}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <div
                    className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl text-white shadow-lg ${course.iconClass}`}
                  >
                    <Icon size={24} />
                  </div>
                  <h2 className="text-lg font-black text-slate-950">{course.title}</h2>
                  {course.description && (
                    <p className="mt-2 text-xs leading-5 text-slate-500">{course.description}</p>
                  )}
                  {course.technologies.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {course.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4 text-[11px] text-slate-500">
                    <span>
                      {course.amount ||
                        (typeof course.price === "number"
                          ? `\u20B9${course.price.toLocaleString("en-IN")}`
                          : course.category)}
                      {typeof course.studentsCount === "number" &&
                        ` \u2022 ${course.studentsCount.toLocaleString("en-IN")} students`}
                    </span>
                    {typeof course.price !== "number" && !course.amount && <span />}
                  </div>
                </AppLink>
              );
            })}
          </div>
        )}
        <div className="mt-12 text-center">
          <AppLink href="/contact" className="orange-button">
            Talk to an advisor <ArrowRight size={16} />
          </AppLink>
        </div>
      </section>
    </div>
  );
}
