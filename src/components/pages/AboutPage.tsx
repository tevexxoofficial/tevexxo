import { AppLink } from '@/components/AppLink';
import { ArrowRight, Target, Users, Award, BookOpen } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { SiteLayout } from '@/components/SiteLayout';


const values = [
  { icon: Target, title: 'Outcome-driven', body: 'Curriculum measured by the roles our learners land, not the hours they sit.' },
  { icon: Users, title: 'Mentor-led', body: 'Every cohort is guided by engineers and designers working in the field today.' },
  { icon: Award, title: 'Certification', body: 'Industry-recognized completion certificates plus placement support.' },
  { icon: BookOpen, title: 'Always current', body: 'Programs refresh every quarter to track real industry demand.' },
];

export function AboutPage() {
  return (
    <SiteLayout>
      <div className="bg-slate-50">
      <header className="hero-grid relative overflow-hidden pb-16 pt-28">
        <div className="container relative z-10 flex items-center gap-4">
          <Logo className="h-12 w-12" />
          <div>
          <p className="eyebrow text-orange-400">ABOUT US</p>
          <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            We turn curiosity into <span className="text-orange-500">careers.</span>
          </h1>
          <p className="mt-4 max-w-xl text-sm text-slate-300">
            Tevexxo is a technology training platform built by practitioners. We help learners move from first principles to shipped projects, with mentorship at every step.
          </p>
          </div>
        </div>
      </header>
      <section className="container -mt-8 grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-4">
        {values.map((value) => {
          const Icon = value.icon;
          return (
            <div key={value.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500"><Icon size={20} /></div>
              <h2 className="text-sm font-black text-slate-950">{value.title}</h2>
              <p className="mt-2 text-xs leading-5 text-slate-500">{value.body}</p>
            </div>
          );
        })}
      </section>
      <section className="container pb-20 text-center">
        <AppLink href="/contact" className="orange-button">Start a conversation <ArrowRight size={16} /></AppLink>
      </section>
      </div>
    </SiteLayout>
  );
}
