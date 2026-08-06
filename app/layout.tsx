import type { Metadata } from "next";
import "./globals.css";
import "./aurelia-images.css"; // Add this line

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Aurelia — Digital Product Studio | Websites, Apps & Software",
  description:
    "Aurelia designs and builds websites, web applications, mobile products and custom software for ambitious businesses. From idea to product.",
  keywords: [
    "digital product studio",
    "web development",
    "web applications",
    "custom software",
    "mobile development",
    "e-commerce",
    "MVP development",
  ],
  authors: [{ name: "Aurelia" }],
  openGraph: {
    title: "Aurelia — Digital Product Studio",
    description:
      "We build digital products people remember. Websites, apps, and software for ambitious businesses.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurelia — Digital Product Studio",
    description:
      "We build digital products people remember. Websites, apps, and software for ambitious businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
