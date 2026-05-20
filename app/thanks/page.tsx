import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageCircle, PlayCircle } from "lucide-react";
import CleanVimeoPlayer from "@/components/CleanVimeoPlayer";

const VIMEO_VIDEO_URL = "https://vimeo.com/1193941498?fl=ip&fe=ec";
const WHATSAPP_CHAT_URL = "https://wa.me/9779840705438";

export const metadata: Metadata = {
  title: "Thanks",
  description:
    "Thanks for booking your free digital marketing consultation. Watch the next-step video before your consultation."
};

function getVimeoEmbedUrl(url: string) {
  const match = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return match
    ? `https://player.vimeo.com/video/${match[1]}?controls=0&title=0&byline=0&portrait=0&badge=0&autopause=0&dnt=1`
    : "";
}

export default function ThanksPage() {
  const embedUrl = getVimeoEmbedUrl(VIMEO_VIDEO_URL);
  const hasWhatsappLink = Boolean(WHATSAPP_CHAT_URL);

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
        <div className="mx-auto w-full max-w-4xl">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-soft text-violet-brand">
            <PlayCircle className="h-8 w-8" />
          </div>

          <h1 className="page-heading mx-auto mt-6 max-w-3xl">
            Wait... watch the video before you go
          </h1>
          <p className="page-copy mx-auto mt-4 max-w-2xl">
            Before your consultation, please watch this short video so you know
            what to do next.
          </p>

          <div className="mx-auto mt-9">
            {embedUrl ? (
              <CleanVimeoPlayer embedUrl={embedUrl} title="Next steps video" />
            ) : (
              <div className="flex aspect-video w-full flex-col items-center justify-center rounded-[18px] border border-slate-200 bg-slate-50 px-6 text-center shadow-soft">
                <PlayCircle className="mb-4 h-12 w-12 text-violet-brand" />
                <p className="text-lg font-black text-ink">
                  Vimeo video will appear here
                </p>
                <p className="mt-2 max-w-md text-sm leading-6 text-muted">
                  Send me your Vimeo link and I&apos;ll plug it into this video box.
                </p>
              </div>
            )}
          </div>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={hasWhatsappLink ? WHATSAPP_CHAT_URL : "#"}
              target={hasWhatsappLink ? "_blank" : undefined}
              rel={hasWhatsappLink ? "noopener noreferrer" : undefined}
              aria-disabled={!hasWhatsappLink}
              className="brand-button w-full max-w-xs aria-disabled:pointer-events-none aria-disabled:opacity-70 sm:w-auto sm:max-w-none"
            >
              <MessageCircle className="h-5 w-5" />
              Chat with me on WhatsApp
            </a>
            <Link
              href="/"
              className="focus-ring inline-flex min-h-14 w-full max-w-xs items-center justify-center gap-2 rounded-[12px] border border-violet-line bg-white px-7 text-base font-black text-violet-brand shadow-sm transition hover:-translate-y-0.5 hover:border-violet-brand hover:bg-violet-soft sm:w-auto sm:max-w-none"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
