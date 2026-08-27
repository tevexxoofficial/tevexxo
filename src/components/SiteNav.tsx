import { useNavigate } from "@tanstack/react-router";
import { AppLink } from "@/components/AppLink";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Check, Menu, Search, X } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { navItems } from "@/lib/tevexxo-data";
import { useCourses, useProjects, useCreateInquiry } from "@/hooks/useTevexxoApi";
import { Logo } from "@/components/Logo";

export function SearchOverlay({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const coursesQuery = useCourses();
  const projectsQuery = useProjects();
  const results = [
    ...(coursesQuery.data ?? []).map((item) => ({ title: item.name, type: "Course" as const })),
    ...(projectsQuery.data ?? []).map((item) => ({ title: item.name, type: "Project" as const })),
  ].filter((item) => item.title.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const go = (type: "Course" | "Project") => {
    onClose();
    navigate({ to: type === "Course" ? "/courses" : "/projects" });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 bg-slate-950/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="mx-auto mt-20 max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            initial={{ y: -20, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: -20, scale: 0.98 }}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-slate-200 p-5">
              <Search size={20} className="text-orange-500" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search courses and projects"
                className="flex-1 bg-transparent text-lg outline-none"
                aria-label="Search"
              />
              <button onClick={onClose} aria-label="Close search">
                <X size={20} />
              </button>
            </div>
            <div className="max-h-80 overflow-auto p-3">
              {results.length ? (
                results.map((item) => (
                  <button
                    key={item.title}
                    onClick={() => go(item.type)}
                    className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-left hover:bg-orange-50"
                  >
                    <span className="font-semibold text-slate-900">{item.title}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      {item.type}
                    </span>
                  </button>
                ))
              ) : (
                <p className="p-6 text-center text-slate-500">No matching learning paths yet.</p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DemoModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const coursesQuery = useCourses();
  const mutation = useCreateInquiry();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (mutation.isPending) return; // guard: exactly one inquiry per submit
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const phone = String(form.get("phone") || "").trim();
    const course = String(form.get("course") || "");
    const date = String(form.get("date") || "");
    const message = String(form.get("message") || "").trim();
    if (!name || !email || !course) {
      setError("Please fill in your name, email and course.");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    const details = [
      `Demo request for course: ${course}.`,
      date ? `Preferred date: ${date}.` : "",
      message,
    ]
      .filter(Boolean)
      .join(" ");
    mutation.mutate(
      { name, email, ...(phone ? { phone } : {}), category: "Demo Request", message: details },
      {
        onSuccess: () => setSent(true),
        onError: () => setError("Could not send your request. Please try again."),
      },
    );
  };

  const handleClose = () => {
    setSent(false);
    setError("");
    onClose();
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <motion.div
            className="w-full max-w-xl rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 18 }}
            onClick={(event) => event.stopPropagation()}
          >
            {sent ? (
              <div className="py-12 text-center">
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <Check size={30} />
                </div>
                <h2 className="text-2xl font-black text-slate-950">You&apos;re on the list.</h2>
                <p className="mt-2 text-slate-500">
                  Our learning advisor will reach out to arrange your free demo.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-7 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <p className="eyebrow">FREE DEMO</p>
                    <h2 className="mt-2 text-2xl font-black text-slate-950">
                      See what learning with Tevexxo feels like.
                    </h2>
                  </div>
                  <button onClick={handleClose} aria-label="Close demo">
                    <X />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
                  <label className="field">
                    Name
                    <input name="name" placeholder="Your full name" />
                  </label>
                  <label className="field">
                    Email
                    <input name="email" type="email" placeholder="you@example.com" />
                  </label>
                  <label className="field">
                    Phone
                    <input name="phone" placeholder="+91 98765 43210" />
                  </label>
                  <label className="field">
                    Interested course
                    <select name="course" defaultValue="">
                      <option value="" disabled>
                        {coursesQuery.isPending
                          ? "Loading courses..."
                          : coursesQuery.isError || !(coursesQuery.data ?? []).length
                            ? "Courses unavailable"
                            : "Choose a path"}
                      </option>
                      {(coursesQuery.data ?? []).map((course) => (
                        <option key={course.id}>{course.name}</option>
                      ))}
                    </select>
                  </label>
                  <label className="field sm:col-span-2">
                    Preferred date
                    <input name="date" type="date" />
                  </label>
                  <label className="field sm:col-span-2">
                    Message
                    <textarea
                      name="message"
                      rows={3}
                      placeholder="Tell us what you want to learn"
                    />
                  </label>
                  {error && (
                    <p className="sm:col-span-2 text-sm font-semibold text-red-600">{error}</p>
                  )}
                  <div className="flex justify-end gap-3 sm:col-span-2">
                    <button
                      type="button"
                      onClick={handleClose}
                      className="rounded-full border border-slate-200 px-5 py-3 text-sm font-bold text-slate-600"
                    >
                      Cancel
                    </button>
                    <button
                      disabled={mutation.isPending}
                      className="rounded-full bg-orange-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 disabled:opacity-60"
                    >
                      {mutation.isPending ? "Sending..." : "Submit request"}{" "}
                      {!mutation.isPending && <ArrowRight size={16} className="ml-1 inline" />}
                    </button>
                  </div>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function Navbar({ onSearch, onDemo }: { onSearch: () => void; onDemo: () => void }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="container flex h-20 items-center justify-between">
        <AppLink
          href="/"
          className="inline-flex shrink-0 items-center gap-2 leading-none"
          aria-label="Tevexxo home"
        >
          <Logo className="h-8 w-8" priority />
          <span className="text-lg font-extrabold leading-none tracking-tight text-white">
            Tevexxo
          </span>
        </AppLink>
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item, index) => (
            <AppLink
              key={item.label}
              href={item.href}
              className={`nav-link ${index === 0 ? "active" : ""}`}
            >
              {item.label}
            </AppLink>
          ))}
        </nav>
        <div className="hidden items-center gap-3 sm:flex">
          <button onClick={onSearch} className="icon-button" aria-label="Search">
            <Search size={18} />
          </button>
          <button onClick={onDemo} className="orange-button">
            Get Started <ArrowRight size={16} />
          </button>
        </div>
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="mx-4 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl lg:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navItems.map((item) => (
              <AppLink
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-4 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                {item.label}
              </AppLink>
            ))}
            <div className="mt-2 flex items-center justify-between gap-2 px-1">
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onSearch();
                }}
                className="icon-button"
                aria-label="Search"
              >
                <Search size={18} />
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  onDemo();
                }}
                className="orange-button flex-1"
              >
                Get Started <ArrowRight size={15} />
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export function SiteChrome() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <>
      <Navbar onSearch={() => setSearchOpen(true)} onDemo={() => setDemoOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </>
  );
}
