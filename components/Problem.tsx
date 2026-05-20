import { AlertCircle } from "lucide-react";

export default function Problem() {
  return (
    <section id="problem" className="section-y bg-violet-soft">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.72fr_1fr] lg:items-center">
        <div>
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="section-heading max-w-[38rem]">
            Your Ads Are Not the Only Issue. The Strategy Behind Them Matters.
          </h2>
        </div>
        <div className="rounded-[8px] border border-violet-line/50 bg-white p-6 shadow-soft sm:p-7">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-[8px] bg-violet-brand text-white">
            <AlertCircle className="h-6 w-6" />
          </div>
          <p className="text-lg leading-8 text-ink/75">
            Early-stage startups, small business owners, and personal brands are
            often running ads without proper strategy or relying on random
            social media posting without clear results. In this free consultation,
            I&apos;ll identify the key problems in your current marketing and
            turn them into a simple growth plan.
          </p>
          <a
            href="#consultation-form"
            className="brand-button mt-6"
          >
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
