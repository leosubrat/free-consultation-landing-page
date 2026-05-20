import { Clock3, ShieldCheck } from "lucide-react";

export default function Urgency() {
  return (
    <section className="section-y bg-ink text-white">
      <div className="section-shell">
        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-violet-line">
              Limited free consultations
            </p>
            <h2 className="max-w-[40rem] text-[clamp(1.65rem,2.8vw,2.35rem)] font-black leading-[1.12]">
              Book Your Free Consultation
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-white/[0.72]">
              1:1 consultation tailored to your business. Walk away with a clear
              plan to get leads and sales.
            </p>
          </div>

          <div className="rounded-[8px] border border-white/[0.12] bg-white/[0.06] p-5 sm:p-6">
            <div className="flex gap-3.5">
              <Clock3 className="mt-1 h-6 w-6 flex-none text-violet-line" />
              <div>
                <p className="font-black">
                  I keep consultations limited so each one stays focused and useful.
                </p>
                <p className="mt-1.5 text-sm leading-6 text-white/[0.68]">
                  Your consultation stays personal, specific, and useful for your
                  business.
                </p>
              </div>
            </div>
            <div className="mt-3.5 flex gap-3.5">
              <ShieldCheck className="mt-1 h-6 w-6 flex-none text-violet-line" />
              <div>
                <p className="font-black">
                  Just a clear look at what to fix in your marketing.
                </p>
                <p className="mt-1.5 text-sm leading-6 text-white/[0.68]">
                  You will leave with a calmer, clearer next step.
                </p>
              </div>
            </div>
            <a
              href="#consultation-form"
              className="mt-5 inline-flex min-h-12 w-full items-center justify-center rounded-[8px] bg-white px-5 text-sm font-black text-violet-brand transition hover:bg-violet-soft"
            >
              Book Free Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
