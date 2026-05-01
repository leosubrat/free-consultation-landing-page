import { Clock3, ShieldCheck } from "lucide-react";

export default function Urgency() {
  return (
    <section className="bg-ink py-16 text-white sm:py-20">
      <div className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-violet-line">
              Limited free audit slots
            </p>
            <h2 className="text-3xl font-black leading-tight sm:text-5xl">
              Book Your Free Strategy Call
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/[0.72]">
              1:1 Session Tailored to Your Business. Walk Away with a Clear Plan
              to Get Leads and Sales.
            </p>
          </div>

          <div className="rounded-[8px] border border-white/[0.12] bg-white/[0.06] p-6">
            <div className="flex gap-4">
              <Clock3 className="mt-1 h-6 w-6 flex-none text-violet-line" />
              <div>
                <p className="font-black">Free consultation slots are limited.</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.68]">
                  This keeps every audit personal, specific, and useful for your
                  business.
                </p>
              </div>
            </div>
            <div className="mt-5 flex gap-4">
              <ShieldCheck className="mt-1 h-6 w-6 flex-none text-violet-line" />
              <div>
                <p className="font-black">No spam. No pressure.</p>
                <p className="mt-2 text-sm leading-6 text-white/[0.68]">
                  Just a clear look at what to fix in your marketing.
                </p>
              </div>
            </div>
            <a
              href="#consultation-form"
              className="mt-7 inline-flex min-h-12 w-full items-center justify-center rounded-[8px] bg-white px-5 text-sm font-black text-violet-brand transition hover:bg-violet-soft"
            >
              Book My Free Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
