import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Your free digital marketing audit and consultation request has been received."
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-white">
      <header className="bg-white pt-5 sm:pt-8">
        <div className="section-shell flex justify-center">
          <Image
            src="/brand-logo.png"
            alt="Subrat Thapa"
            width={180}
            height={112}
            priority
            className="h-auto w-32 sm:w-36 lg:w-32"
          />
        </div>
      </header>

      <section className="section-shell pb-14 pt-8 text-center sm:pb-16 sm:pt-10 lg:pb-20">
        <div className="mx-auto w-full max-w-3xl text-center">
          <div className="mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-full bg-violet-soft text-violet-brand sm:mb-8">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <p className="eyebrow mb-4">Request received</p>
          <h1 className="mx-auto flex max-w-[46rem] flex-col items-center gap-2 text-center text-ink">
            <span className="block text-[clamp(2rem,4.1vw,3.3rem)] font-semibold leading-[1.1]">
              Thank you.
            </span>
            <span className="block max-w-[58rem] text-[clamp(1.35rem,2.3vw,2.1rem)] font-medium leading-[1.22] lg:whitespace-nowrap">
              Your free consultation request is confirmed.
            </span>
          </h1>
          <p className="page-copy mx-auto mt-5 max-w-2xl">
            I&apos;ll review your current marketing details and get back to you
            with the next steps for your free 1-on-1 digital marketing audit.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-muted">
            You can also message me directly on WhatsApp for a faster response.
          </p>

          <a
            href="https://wa.me/9779840705438?text=Hello%20Subrat%2C%20I%20just%20filled%20out%20the%20consultation%20form.%20Excited%20to%20connect!"
            target="_blank"
            rel="noopener noreferrer"
            className="brand-button mt-4"
          >
            <MessageCircle className="h-5 w-5" />
            Message Me on WhatsApp
          </a>

          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            <div className="rounded-[16px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <Mail className="mb-4 h-6 w-6 text-violet-brand" />
              <h2 className="text-lg font-black text-ink">Check your email</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Watch your inbox for consultation details and any follow-up questions.
              </p>
            </div>
            <div className="rounded-[16px] border border-slate-200 bg-slate-50 p-5 sm:p-6">
              <MessageCircle className="mb-4 h-6 w-6 text-violet-brand" />
              <h2 className="text-lg font-black text-ink">Keep WhatsApp ready</h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                I may use your WhatsApp number to coordinate the consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
