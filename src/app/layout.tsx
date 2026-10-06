import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Free stand-ins for the licensed design fonts:
//   Sofia Pro    -> --font-primary   (Nunito Sans)
//   Suisse Int'l -> --font-secondary (Inter)
// Replace the files in ./fonts to use the real ones.
const primary = localFont({
  src: "./fonts/NunitoSans-Variable.woff2",
  variable: "--font-primary",
  weight: "200 1000",
  display: "swap",
});

const secondary = localFont({
  src: "./fonts/Inter-Variable.woff2",
  variable: "--font-secondary",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://byteex-product-page-theta.vercel.app"),
  title: "Byteex Loungewear | Don’t apologize for being comfortable",
  description:
    "Beautiful, comfortable loungewear for day or night. Ethically sourced, responsibly made.",
  openGraph: {
    title: "Byteex Loungewear | Don’t apologize for being comfortable",
    description:
      "Beautiful, comfortable loungewear for day or night. Ethically sourced, responsibly made.",
    url: "https://byteex-product-page-theta.vercel.app",
    siteName: "Byteex Loungewear",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Byteex Loungewear | Don’t apologize for being comfortable",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Byteex Loungewear | Don’t apologize for being comfortable",
    description:
      "Beautiful, comfortable loungewear for day or night. Ethically sourced, responsibly made.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${primary.variable} ${secondary.variable}`}>
      <body>{children}</body>
    </html>
  );
}