import { AppLink } from '@/components/AppLink';
import { ArrowRight, Award, Briefcase, GraduationCap, Users } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { SiteLayout } from '@/components/SiteLayout';


const programs = [
  { icon: GraduationCap, title: 'Certification Programs', body: 'Industry-recognized certificates that validate your skills with employers.' },
  { icon: Briefcase, title: 'Industry Projects', body: 'Real projects from partner companies you can ship and showcase.' },
  { icon: Users, title: 'Internships', body: 'Guided internship tracks with mentorship and performance reviews.' },
  { icon: Award, title: 'Career Support', body: 'Resume reviews, mock interviews, and direct hiring partner introductions.' },
];

export function ProgramsPage() {
  return (
    <SiteLayout>
      <div className="bg-slate-50">
      <header className="hero-grid relative overflow-hidden pb-16 pt-28">
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
      <section className="container -mt-8 grid gap-4 pb-20 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <div key={program.title} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                <Icon size={20} />
              </div>
              <h2 className="text-sm font-black text-slate-950">{program.title}</h2>
              <p className="mt-2 text-xs leading-5 text-slate-500">{program.body}</p>
            </div>
          );
        })}
      </section>
      <section className="container pb-20 text-center">
        <AppLink href="/contact" className="orange-button">Apply for a program <ArrowRight size={16} /></AppLink>
      </section>
      </div>
    </SiteLayout>
  );
}
