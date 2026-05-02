import { CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

const auditItems = [
  {
    label: "Lead Flow",
    issue: "Posting content... but no real leads"
  },
  {
    label: "Ad Spend",
    issue: "Money going out... but no clear ROI"
  },
  {
    label: "Conversion",
    issue: "People visit... but don't convert"
  }
];

export default function Hero() {
  return (
    <section className="section-shell grid min-h-[88vh] items-center gap-9 pb-10 pt-14 sm:pb-14 sm:pt-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14 lg:pt-24">
      <div className="max-w-3xl">
        <p className="eyebrow mb-4">Free 1-on-1 consultation</p>
        <h1 className="max-w-[42rem] tracking-normal">
          <span className="block text-[clamp(2rem,3.5vw,2.8rem)] font-black leading-[1.12] text-ink">
            Stop Wasting Money on Ads
          </span>
          <span className="mt-3 block text-[clamp(1.75rem,2.8vw,2.25rem)] font-medium leading-[1.16] text-violet-brand/85">
            Get Consistent Leads &amp; Sales
          </span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-[1.6] text-muted sm:text-[1.0625rem]">
          Running ads but not getting results?
          <br />
          The problem isn&apos;t effort &mdash; it&apos;s strategy.
          <br />
          I&apos;ll show you exactly what&apos;s broken and how to fix it.
        </p>

        <div className="mt-8">
          <a
            href="#consultation-form"
            className="focus-ring inline-flex min-h-14 w-full items-center justify-center rounded-[8px] bg-violet-brand px-7 text-base font-bold text-white shadow-[0_4px_14px_rgba(0,0,0,0.10),0_18px_40px_rgba(109,40,255,0.18)] transition duration-200 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-violet-deep sm:w-auto sm:min-w-60"
          >
            Book Free Consultation
          </a>
          <ul className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-[0.875rem] font-normal leading-6 text-slate-500/90 sm:justify-start">
            {["Personalized audit", "1:1 consultation", "Actionable plan"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2 sm:whitespace-nowrap">
                  <span className="h-1.5 w-1.5 flex-none rounded-full bg-violet-brand/40" />
                  <span>{item}</span>
                </li>
              )
            )}
          </ul>
        </div>

        <div className="mt-5 flex flex-col gap-2.5 text-sm font-semibold leading-6 text-ink/75 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-2">
          {[
            "Find what's killing your conversions",
            "Get a step-by-step plan",
            "Know exactly what to fix next"
          ].map((item) => (
            <span key={item} className="inline-flex items-start gap-2">
              <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-violet-brand" />
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative lg:justify-self-end">
        <div className="absolute -right-6 top-10 h-44 w-44 rounded-full bg-violet-brand/10 blur-3xl" />
        <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-[8px] border border-violet-line/40 bg-white p-5 shadow-soft sm:p-6">
          <div className="mb-5 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-violet-brand">
                What&apos;s Not Working Right Now
              </p>
              <p className="mt-1.5 text-sm font-bold text-muted">
                These are the common issues I see again and again
              </p>
            </div>
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-[8px] bg-violet-soft text-violet-brand">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
          </div>

          <div className="space-y-3">
            {auditItems.map((item) => (
              <div
                key={item.label}
                className="rounded-[8px] border border-slate-200 bg-slate-50/80 p-4 sm:p-5"
              >
                <p className="text-base font-black text-ink">{item.label}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{item.issue}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-[8px] bg-ink p-5 text-white sm:p-6">
            <div className="flex items-center gap-2.5">
              <TrendingUp className="h-5 w-5 text-violet-line" aria-hidden="true" />
              <p className="text-sm font-bold">Outcome</p>
            </div>
            <p className="mt-3 max-w-md text-xl font-black leading-snug sm:text-2xl">
              Walk away with a clear plan to get leads and sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
