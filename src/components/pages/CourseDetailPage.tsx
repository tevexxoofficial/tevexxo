import { useEffect } from "react";
import { AppLink } from "@/components/AppLink";
import { ArrowLeft, Tag, Users } from "lucide-react";
import { toCourseView } from "@/lib/tevexxo-data";
import { useCourse, useCourses } from "@/hooks/useTevexxoApi";
import { Logo } from "@/components/Logo";
import { SiteChrome } from "@/components/SiteNav";

export function CourseDetailPage({ slug }: { slug: string }) {
  const query = useCourse(slug);
  const listQuery = useCourses();
  const courses = (listQuery.data ?? []).map(toCourseView);
  const fallback = courses.find((c) => c.slug === slug);
  // Keep the grid-consistent gradient/image index when the full list is loaded.
  const listIndex = query.data ? courses.findIndex((c) => c.id === query.data?.id) : -1;
  const course = query.data ? toCourseView(query.data, Math.max(listIndex, 0)) : fallback;

  // Dynamic page title (no new SEO framework needed).
  useEffect(() => {
    if (course?.title) {
      document.title = `${course.title} — Tevexxo`;
    }
  }, [course?.title]);

  if (query.isPending && !fallback) {
    return (
      <div className="min-h-screen bg-slate-50">
        <SiteChrome />
        <div className="container flex min-h-[60vh] items-center justify-center pt-32">
          <p className="text-sm font-semibold text-slate-500">Loading course...</p>
        </div>
      </div>
    );
  }

  if (query.isError && !course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
        <h1 className="text-2xl font-black text-slate-950">Course not found</h1>
        <p className="text-sm text-slate-500">It may have been unpublished by the Tevexxo team.</p>
        <AppLink href="/courses" className="orange-button">
          Back to courses
        </AppLink>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-50 px-4 text-center">
        <h1 className="text-2xl font-black text-slate-950">Course not found</h1>
        <AppLink href="/courses" className="orange-button">
          Back to courses
        </AppLink>
      </div>
    );
  }

  const Icon = course.icon;

  return (
    <div className="bg-slate-50">
      <SiteChrome />

      {/* Breadcrumb */}
      <div className="container pt-36 text-xs font-semibold text-slate-400">
        <AppLink href="/" className="hover:text-orange-500 transition-colors">
          Home
        </AppLink>
        <span className="mx-2">/</span>
        <AppLink href="/courses" className="hover:text-orange-500 transition-colors">
          Courses
        </AppLink>
        <span className="mx-2">/</span>
        <span className="text-slate-600">{course.title}</span>
      </div>

      {/* Hero section */}
      <header className="hero-grid relative overflow-hidden pb-16 pt-8">
        <div className="container relative z-10">
          <AppLink
            href="/courses"
            className="mb-4 inline-flex items-center gap-2 text-xs font-bold text-slate-300 hover:text-white"
          >
            <ArrowLeft size={14} /> Back to courses
          </AppLink>
          <p className="eyebrow text-orange-400">COURSE</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            {course.title}
          </h1>
          {course.description && (
            <p className="mt-4 max-w-xl text-sm text-slate-300">{course.description}</p>
          )}
          <div className="mt-5 flex flex-wrap items-center gap-3">
            {course.category && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                <Tag size={13} />
                {course.category}
              </span>
            )}
            {typeof course.studentsCount === "number" && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold text-white backdrop-blur-sm">
                <Users size={13} />
                {course.studentsCount.toLocaleString("en-IN")} students
              </span>
            )}
            {(course.amount || typeof course.price === "number") && (
              <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg shadow-orange-500/30">
                {course.amount ||
                  (typeof course.price === "number"
                    ? `\u20B9${course.price.toLocaleString("en-IN")}`
                    : "")}
              </span>
            )}
          </div>
        </div>
      </header>

      <section className="container mt-8 pb-20">
        {/* Hero visual / icon */}
        <div
          className={`relative mb-6 flex h-56 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ${course.iconClass}`}
        >
          {course.image && (
            <img
              src={course.image}
              alt={course.title}
              width={1024}
              height={576}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          <div className="pointer-events-none absolute inset-0 bg-slate-950/40" />
          <Logo className="relative h-20 w-20" />
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          {/* Overview */}
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-black text-slate-950">About this course</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              {course.description || "Full course details are being prepared."}
            </p>
            {course.category && (
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="rounded bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-600">
                  {course.category}
                </span>
              </div>
            )}
          </div>

          {/* Course info sidebar */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <h2 className="text-sm font-black text-slate-950">Course info</h2>
              <div className="mt-4 space-y-3">
                {course.category && (
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700">
                    Category
                    <span className="flex items-center gap-1 text-orange-500">
                      <Tag size={13} />
                      {course.category}
                    </span>
                  </div>
                )}
                {typeof course.studentsCount === "number" && (
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700">
                    Students enrolled
                    <span className="text-orange-500">
                      {course.studentsCount.toLocaleString("en-IN")}
                    </span>
                  </div>
                )}
                {(course.amount || typeof course.price === "number") && (
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700">
                    Price
                    <span className="text-orange-500">
                      {course.amount ||
                        (typeof course.price === "number"
                          ? `\u20B9${course.price.toLocaleString("en-IN")}`
                          : "")}
                    </span>
                  </div>
                )}
                {course.duration && (
                  <div className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700">
                    Duration
                    <span className="text-orange-500">{course.duration}</span>
                  </div>
                )}

                {/* CTA — inquiry only; no fake enrollment/payment API */}
                <AppLink
                  href="/contact"
                  className="flex items-center justify-between rounded-xl bg-orange-500 px-4 py-3 text-xs font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-orange-600"
                >
                  Enquire about this course
                </AppLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
