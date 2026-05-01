import { ArrowDown, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-shell grid min-h-[92vh] items-center gap-12 pb-16 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:pt-6">
      <div>
        <p className="eyebrow mb-5">Free 1-on-1 strategy call</p>
        <h1 className="max-w-4xl text-5xl font-black leading-[0.96] tracking-normal text-ink sm:text-6xl lg:text-7xl">
          Stop Wasting Money on Ads!
          <span className="block font-display italic font-semibold text-violet-brand">
            Get Consistent Leads and Sales
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
          Running ads but not getting results? It&apos;s your strategy. I&apos;ll
          show you how to fix it.
        </p>
        <p className="mt-4 max-w-xl text-base leading-7 text-ink/70">
          Get a customized marketing plan for your business in a free 1-on-1
          consultation.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
          <a
            href="#consultation-form"
            className="focus-ring inline-flex min-h-14 items-center justify-center rounded-[8px] bg-violet-brand px-7 text-base font-bold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-violet-deep"
          >
            Book Free Consultation
          </a>
          <a
            href="#problem"
            className="inline-flex items-center justify-center gap-2 text-sm font-bold text-ink transition hover:text-violet-brand"
          >
            <ArrowDown className="h-4 w-4" />
            Scroll to continue
          </a>
        </div>

        <div className="mt-10 grid max-w-xl grid-cols-1 gap-3 text-sm font-semibold text-ink/75 sm:grid-cols-3">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-violet-brand" />
            Free audit
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-violet-brand" />
            1:1 session
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-violet-brand" />
            Clear plan
          </span>
        </div>
      </div>

      <div className="relative">
        <div className="absolute -right-4 top-8 h-44 w-44 rounded-full bg-violet-brand/10 blur-3xl" />
        <div className="relative overflow-hidden rounded-[8px] border border-violet-line/40 bg-white p-5 shadow-soft">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-violet-brand">
                Audit snapshot
              </p>
              <p className="mt-1 text-sm font-semibold text-muted">
                What we diagnose on your call
              </p>
            </div>
            <div className="rounded-[8px] bg-violet-soft p-3 text-violet-brand">
              <Sparkles className="h-5 w-5" />
            </div>
          </div>

          <div className="space-y-4">
            {[
              ["Lead flow", "Random posting without clear results", "Needs a system"],
              ["Ad spend", "Budget going out without conversion clarity", "Needs strategy"],
              ["Conversion", "Traffic arrives but does not become enquiries", "Needs fixes"]
            ].map(([label, issue, status]) => (
              <div
                key={label}
                className="rounded-[8px] border border-slate-200 bg-slate-50/70 p-4"
              >
                <div className="mb-2 flex items-center justify-between gap-3">
                  <p className="font-bold text-ink">{label}</p>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-violet-brand shadow-sm">
                    {status}
                  </span>
                </div>
                <p className="text-sm leading-6 text-muted">{issue}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[8px] bg-ink p-5 text-white">
            <div className="flex items-center gap-3">
              <TrendingUp className="h-5 w-5 text-violet-line" />
              <p className="text-sm font-bold">Outcome</p>
            </div>
            <p className="mt-3 text-2xl font-black leading-tight">
              Walk away with a clear plan to get leads and sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
