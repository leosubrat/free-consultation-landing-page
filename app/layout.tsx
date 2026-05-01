import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://free-consultation-lp.vercel.app"),
  title: {
    default: "Free Digital Marketing Audit and Strategy Call",
    template: "%s | Free Digital Marketing Audit"
  },
  description:
    "Book a free 1-on-1 digital marketing consultation to identify what is stopping your leads and sales, then walk away with a clear growth plan.",
  openGraph: {
    title: "Stop Wasting Money on Ads. Get Consistent Leads and Sales.",
    description:
      "Get a customized marketing plan for your business in a free 1-on-1 consultation.",
    url: "/",
    siteName: "Free Digital Marketing Audit",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Digital Marketing Audit and Strategy Call",
    description:
      "Running ads but not getting results? It is your strategy. Book a free 1-on-1 consultation."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
