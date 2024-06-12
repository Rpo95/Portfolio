import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Mateo Restrepo",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/teo.svg" />
        <meta
          property="og:url"
          content="https://portfolio-rpo95s-projects.vercel.app/"
        />
        <meta property="og:image" content="/path/to/teo.svg" />
        <meta property="og:site_name" content="Portfolio" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
