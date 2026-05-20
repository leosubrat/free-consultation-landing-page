import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://free-consultation-lp.vercel.app"),
  title: {
    default: "Free Digital Marketing Consultation",
    template: "%s | Free Digital Marketing Consultation"
  },
  description:
    "Book a free 1-on-1 digital marketing consultation to identify what is stopping your leads and sales, then walk away with a clear growth plan.",
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "512x512", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    shortcut: "/favicon-32x32.png",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title: "Free Digital Marketing Consultation",
    description:
      "Book a free 1:1 digital marketing consultation for Nepal-based business owners who want more leads, customers, and sales.",
    url: "/",
    siteName: "Free Digital Marketing Consultation",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Digital Marketing Consultation",
    description:
      "Get a simple digital marketing plan to generate more leads, customers, and sales."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function () {
              function cleanInitialFormHash() {
                if (window.location.pathname === "/" && window.location.hash === "#consultation-form") {
                  window.history.replaceState(null, "", window.location.pathname + window.location.search);
                  window.scrollTo(0, 0);
                }
              }

              cleanInitialFormHash();
              window.addEventListener("pageshow", cleanInitialFormHash);
              window.addEventListener("load", cleanInitialFormHash, { once: true });

              document.addEventListener("click", function (event) {
                var link = event.target && event.target.closest ? event.target.closest('a[href="#consultation-form"]') : null;
                var target = document.getElementById("consultation-form");

                if (!link || !target) {
                  return;
                }

                event.preventDefault();
                target.scrollIntoView({ behavior: "smooth", block: "start" });
              }, true);
            })();
          `
          }}
        />
        {children}
      </body>
    </html>
  );
}
