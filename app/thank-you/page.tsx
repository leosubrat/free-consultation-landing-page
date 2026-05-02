import type { Metadata } from "next";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your free digital marketing audit and consultation request has been received."
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="section-shell flex min-h-screen items-center py-16">
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-violet-soft text-violet-brand">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <p className="eyebrow mb-4">Request received</p>
          <h1 className="mx-auto max-w-[46rem] text-[clamp(2rem,5vw,4rem)] font-black leading-[1.18] text-ink">
            Thank you. Your free consultation request is confirmed.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            I&apos;ll review your current marketing details and get back to you
            with the next steps for your free 1-on-1 digital marketing audit.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted">
            You can also message me directly on WhatsApp for a faster response.
          </p>

          <div className="mt-10 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-[8px] border border-slate-200 bg-slate-50 p-5">
              <Mail className="mb-4 h-6 w-6 text-violet-brand" />
              <h2 className="text-lg font-black text-ink">Check your email</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Watch your inbox for consultation details and any follow-up questions.
              </p>
            </div>
            <div className="rounded-[8px] border border-slate-200 bg-slate-50 p-5">
              <MessageCircle className="mb-4 h-6 w-6 text-violet-brand" />
              <h2 className="text-lg font-black text-ink">Keep WhatsApp ready</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                I may use your WhatsApp number to coordinate the consultation.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/9779840705438?text=Hello%20Subrat%2C%20I%20just%20filled%20out%20the%20consultation%20form.%20Excited%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-10 inline-flex min-h-14 items-center justify-center gap-2 rounded-[8px] bg-violet-brand px-7 text-base font-black text-white shadow-button transition hover:-translate-y-0.5 hover:bg-violet-deep"
          >
            <MessageCircle className="h-5 w-5" />
            Message Me on WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
