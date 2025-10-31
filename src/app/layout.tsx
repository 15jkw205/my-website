import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jakob West | DevOps Engineer & Software Developer",
  description: "Portfolio of Jakob West - DevOps Engineer, Data Analytics and Systems Engineering student at UCCS. Specializing in cloud infrastructure, automation, and modern web development.",
  keywords: ["Jakob West", "DevOps", "Software Engineering", "Cloud Infrastructure", "AWS", "Terraform", "Docker", "Elasticsearch", "UCCS"],
  authors: [{ name: "Jakob West" }],
  creator: "Jakob West",
  metadataBase: new URL('https://jakobwest.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://jakobwest.com',
    title: 'Jakob West | DevOps Engineer & Software Developer',
    description: 'Portfolio of Jakob West - DevOps Engineer specializing in cloud infrastructure and automation',
    siteName: 'Jakob West Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jakob West | DevOps Engineer & Software Developer',
    description: 'Portfolio of Jakob West - DevOps Engineer specializing in cloud infrastructure and automation',
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
