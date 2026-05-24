import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2834642983535611');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2834642983535611&ev=PageView&noscript=1" alt="" />'
          }}
        />
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
