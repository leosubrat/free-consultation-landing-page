import type { Metadata } from "next";
import Link from "next/link";
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
          <h1 className="text-4xl font-black leading-tight text-ink sm:text-6xl">
            Thank you. Your free consultation request is confirmed.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted">
            I&apos;ll review your current marketing details and get back to you
            with the next steps for your free 1-on-1 digital marketing audit.
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

          <Link
            href="/"
            className="focus-ring mt-10 inline-flex min-h-14 items-center justify-center rounded-[8px] bg-violet-brand px-7 text-base font-black text-white shadow-button transition hover:-translate-y-0.5 hover:bg-violet-deep"
          >
            Back to Landing Page
          </Link>
        </div>
      </section>
    </main>
  );
}
