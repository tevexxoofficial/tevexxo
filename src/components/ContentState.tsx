/**
 * Loading / error / empty states for API-driven sections.
 * Styled to blend into the existing Tevexxo design (Tailwind, rounded-2xl
 * cards, orange accent) so sections never crash when the backend is
 * unavailable or MongoDB has no records yet.
 */

export function SectionSkeleton({ count = 3, tall = false }: { count?: number; tall?: boolean }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" aria-busy="true" aria-live="polite">
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse rounded-2xl border border-slate-100 bg-white p-6 shadow-sm"
        >
          {tall && <div className="-mx-6 -mt-6 mb-5 h-36 rounded-t-2xl bg-slate-100" />}
          <div className={`h-10 w-10 rounded-xl bg-slate-100 ${tall ? "" : "mb-4"}`} />
          <div className="h-4 w-3/4 rounded bg-slate-100" />
          <div className="mt-3 h-3 w-full rounded bg-slate-100" />
          <div className="mt-2 h-3 w-2/3 rounded bg-slate-100" />
        </div>
      ))}
    </div>
  );
}

export function SectionError({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div className="rounded-2xl border border-orange-100 bg-orange-50 p-8 text-center">
      <p className="text-sm font-black text-slate-950">Content is temporarily unavailable.</p>
      <p className="mt-1 text-xs text-slate-500">{message}</p>
      <button onClick={onRetry} className="orange-button mt-5">
        Try again
      </button>
    </div>
  );
}

export function SectionEmpty({ message }: { message: string }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-bold text-slate-950">Nothing here yet.</p>
      <p className="mt-1 text-xs text-slate-500">{message}</p>
    </div>
  );
}
