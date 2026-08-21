import { AppLink } from '@/components/AppLink';
import { ArrowRight } from 'lucide-react';
import { features } from '@/lib/tevexxo-data';
import { Logo } from '@/components/Logo';
import { SiteLayout } from '@/components/SiteLayout';

export function WhyTevexxoPage() {
  return (
    <SiteLayout>
      <div className="bg-slate-50">
        <header className="hero-grid relative overflow-hidden pb-16 pt-28">
          <div className="container relative z-10 flex items-center gap-4">
            <Logo className="h-12 w-12" />
            <div>
              <p className="eyebrow text-orange-400">WHY TEVEXXO</p>
              <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
                Learn with a <span className="text-orange-500">real advantage.</span>
              </h1>
              <p className="mt-4 max-w-xl text-sm text-slate-300">
                Six reasons learners choose Tevexxo to move from first principles to career-ready.
              </p>
            </div>
          </div>
        </header>
        <section className="container -mt-8 pb-20">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="flex gap-4 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h2 className="text-sm font-black text-slate-950">{feature.title}</h2>
                    <p className="mt-1 text-xs leading-5 text-slate-500">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-12 text-center">
            <AppLink href="/courses" className="orange-button">Explore Courses <ArrowRight size={16} /></AppLink>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
}
