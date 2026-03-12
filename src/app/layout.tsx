import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jakob West — Software Engineer",
  description:
    "Jakob West is a software engineer based in Colorado Springs, CO. DASE graduate from UCCS specializing in cloud, DevOps, and full-stack development.",
  openGraph: {
    title: "Jakob West — Software Engineer",
    description:
      "Software engineer, tech enthusiast, and outdoor adventurer based in Colorado Springs.",
    url: "https://jakobwest.dev",
    siteName: "Jakob West",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Jakob West — Software Engineer",
    description: "Software engineer based in Colorado Springs, CO.",
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
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body style={{ margin: 0, padding: 0, background: "#0a0a0a" }}>
        {children}
      </body>
    </html>
  );
}