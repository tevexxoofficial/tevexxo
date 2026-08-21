import { FormEvent, useState } from 'react';
import { Check } from 'lucide-react';
import { Logo } from '@/components/Logo';
import { SiteLayout } from '@/components/SiteLayout';

export function ContactPage() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '').trim();
    const email = String(form.get('email') || '').trim();
    const message = String(form.get('message') || '').trim();
    if (!name || !email || !message) {
      setError('Please fill in your name, email and message.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSent(true);
  };

  return (
    <SiteLayout>
      <div className="bg-slate-50">
      <header className="hero-grid relative overflow-hidden pb-16 pt-28">
        <div className="container relative z-10 flex items-center gap-4">
          <Logo className="h-12 w-12" />
          <div>
            <p className="eyebrow text-orange-400">CONTACT</p>
            <h1 className="mt-2 max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl">
              Let&apos;s talk about your <span className="text-orange-500">next step.</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-slate-300">
              Questions about a program, a demo, or a partnership? We usually reply within one business day.
            </p>
          </div>
        </div>
      </header>
      <section className="container -mt-8 grid gap-6 pb-20 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-black text-slate-950">Reach us directly</h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              <li>hello@tevexxo.com</li>
              <li>+91 98765 43210</li>
              <li>Bangalore, India</li>
            </ul>
          </div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          {sent ? (
            <div className="flex h-full flex-col items-center justify-center py-12 text-center">
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <Check size={30} />
              </div>
              <h2 className="text-xl font-black text-slate-950">Message sent.</h2>
              <p className="mt-2 text-sm text-slate-500">Thanks for reaching out. We&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="field">Name<input name="name" placeholder="Your name" /></label>
                <label className="field">Email<input name="email" type="email" placeholder="you@example.com" /></label>
                <label className="field sm:col-span-2">Message<textarea name="message" rows={5} placeholder="How can we help?" /></label>
              </div>
              {error && <p className="mt-3 text-sm font-semibold text-red-600">{error}</p>}
              <button type="submit" className="orange-button mt-4">Send message</button>
            </form>
          )}
        </div>
      </section>
      </div>
    </SiteLayout>
  );
}
