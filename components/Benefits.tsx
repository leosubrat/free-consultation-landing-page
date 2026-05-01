import { Check, CalendarCheck, Search, Map, Rocket } from "lucide-react";

const benefits = [
  "Know why you're not getting leads",
  "Get a clear step-by-step plan",
  "Stop wasting money on ads that don't perform",
  "Know exactly what to fix next",
  "Build a simple system for consistent results"
];

const steps = [
  {
    title: "You book your free consultation",
    icon: CalendarCheck
  },
  {
    title: "I review your marketing and identify what's not working",
    icon: Search
  },
  {
    title: "You get a custom growth plan for your business",
    icon: Map
  }
];

export default function Benefits() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <div className="mx-auto max-w-[44rem] text-center">
          <p className="eyebrow mb-4">Benefits</p>
          <h2 className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-bold leading-[1.22] text-ink">
            What You&apos;ll Get From This Consultation
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-[8px] border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-line hover:shadow-soft"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-[8px] bg-violet-soft text-violet-brand">
                <Check className="h-5 w-5" />
              </div>
              <p className="text-base font-bold leading-6 text-ink">{benefit}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="mx-auto max-w-[44rem] text-center">
            <p className="eyebrow mb-4">Process</p>
            <h2 className="text-[clamp(1.6rem,2.5vw,2.2rem)] font-bold leading-[1.22] text-ink">
              How the Consultation Works
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-[8px] border border-slate-200 bg-slate-50/70 p-6 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-violet-brand text-lg font-black text-white shadow-button">
                    {index + 1}
                  </div>
                  <Icon className="mx-auto mb-3 h-7 w-7 text-violet-brand" />
                  <p className="text-lg font-black text-ink">Step {index + 1}</p>
                  <p className="mt-3 text-base font-semibold leading-7 text-muted">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#consultation-form"
              className="focus-ring inline-flex min-h-14 items-center justify-center gap-2 rounded-[8px] bg-violet-brand px-7 text-base font-bold text-white shadow-button transition hover:-translate-y-0.5 hover:bg-violet-deep"
            >
              <Rocket className="h-5 w-5" />
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
