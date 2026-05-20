import Image from "next/image";
import {
  ArrowDown,
  BarChart3,
  ClipboardList,
  FileText,
  Mail,
  Megaphone,
  MousePointerClick,
  PhoneCall,
  Target,
  Users
} from "lucide-react";
import CTAForm from "@/components/CTAForm";
import FAQ from "@/components/FAQ";
import FormScrollButton from "@/components/FormScrollButton";

const painPoints = [
  "Posting on Facebook and Instagram but not getting enough inquiries",
  "Boosting posts but not seeing real sales",
  "Not knowing what marketing strategy to use",
  "Getting random leads but not serious customers",
  "Depending only on referrals or word of mouth",
  "Feeling confused about ads, content, landing pages, and follow-up"
];

const processSteps = [
  {
    title: "Fill up the form",
    icon: FileText
  },
  {
    title: "Receive an email with the appointment link",
    icon: Mail
  },
  {
    title: "Fill the appointment form",
    icon: ClipboardList
  },
  {
    title: "Join the 1:1 consultation call",
    icon: PhoneCall
  },
  {
    title: "Get your customized digital marketing plan for FREE",
    icon: Target
  }
];

export default function Home() {
  return (
    <main>
      <header className="bg-white pt-4 sm:pt-6">
        <div className="section-shell flex justify-center">
          <Image
            src="/brand-logo.png"
            alt="Subrat Thapa"
            width={210}
            height={130}
            priority
            className="h-auto w-32 sm:w-36 lg:w-32"
          />
        </div>
      </header>

      <section className="section-shell flex min-h-[54vh] items-center justify-center pb-10 pt-7 text-center sm:min-h-[58vh] sm:pb-12 sm:pt-8 lg:min-h-[56vh] lg:pb-12">
        <div className="mx-auto max-w-4xl">
          <p className="eyebrow mb-4">Free 1:1 digital marketing consultation</p>
          <h1 className="page-heading mx-auto max-w-3xl">
            Struggling to grow your business online?
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-[clamp(1.45rem,3vw,2.1rem)] font-bold leading-tight text-violet-brand">
            Grab a FREE 1:1 Digital Marketing consultation call with me
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-[1.0625rem] leading-8 text-ink/68 sm:text-lg">
            I&apos;ll identify what&apos;s hurting your marketing and give you a simple
            growth plan that you can immediately implement to get more leads,
            sales, and faster business growth.
          </p>
          <div className="mt-8">
            <FormScrollButton
              className="brand-button w-full max-w-xs sm:w-auto sm:max-w-none"
            >
              Book your FREE call now
              <ArrowDown className="h-5 w-5" />
            </FormScrollButton>
          </div>
        </div>
      </section>

      <section className="section-y bg-violet-soft">
        <div className="section-shell grid gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12">
          <div>
            <p className="eyebrow mb-4">The problem</p>
            <h2 className="section-heading">
              Digital marketing should bring customers, not confusion.
            </h2>
            <p className="mt-5 text-base leading-8 text-ink/68 sm:text-lg">
              If you run a business in Nepal, you may already be posting,
              boosting, and trying different ideas online. But if the results
              are still unclear, the problem is usually not effort. It is the
              missing strategy behind your marketing.
            </p>
          </div>

          <div className="rounded-[20px] border border-violet-line/50 bg-white p-5 shadow-soft sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {painPoints.map((point, index) => (
                <div
                  key={point}
                  className="rounded-[14px] border border-slate-200 bg-slate-50/80 p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[10px] bg-violet-soft text-violet-brand">
                    {index % 2 === 0 ? (
                      <Megaphone className="h-4 w-4" />
                    ) : (
                      <MousePointerClick className="h-4 w-4" />
                    )}
                  </div>
                  <p className="text-[0.95rem] font-semibold leading-6 text-ink/80">
                    {point}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-[16px] bg-ink p-6 text-white">
              <div className="mb-3 flex items-center gap-2 text-violet-line">
                <BarChart3 className="h-5 w-5" />
                <span className="text-sm font-bold">The solution</span>
              </div>
              <p className="text-base leading-8 text-white/82">
                In this free consultation, I&apos;ll understand your business,
                identify what is not working, and give you a clear digital
                marketing plan you can start implementing immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white pb-10 pt-12 sm:pb-12 sm:pt-14 lg:pb-12 lg:pt-16">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-4">Simple process</p>
            <h2 className="section-heading">
              How The Free Consultation Works
            </h2>
          </div>

          <div className="mt-10 grid gap-3 sm:gap-4 md:grid-cols-5">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="rounded-[18px] border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-soft md:p-4 lg:p-5"
                >
                  <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-violet-brand text-base font-black text-white shadow-button">
                    {index + 1}
                  </div>
                  <Icon className="mx-auto mb-3 h-6 w-6 text-violet-brand" />
                  <p className="text-[0.95rem] font-bold leading-6 text-ink md:text-sm lg:text-[0.95rem]">
                    {step.title}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-9 flex justify-center">
            <FormScrollButton
              className="brand-button"
            >
              <Users className="h-5 w-5" />
              Book your FREE call now
            </FormScrollButton>
          </div>
        </div>
      </section>

      <FAQ />
      <CTAForm />

      <footer className="bg-white px-5 pb-8 pt-2 text-center text-sm text-muted">
        <p>&copy; 2026 Subrat Thapa &mdash; Made with &#128156;. All rights reserved.</p>
      </footer>
    </main>
  );
}
