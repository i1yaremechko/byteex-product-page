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
  title: "Byteex Loungewear | Don’t apologize for being comfortable",
  description:
    "Beautiful, comfortable loungewear for day or night. Ethically sourced, responsibly made.",
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