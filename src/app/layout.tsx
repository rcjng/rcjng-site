import type { Metadata } from "next";
import { JetBrains_Mono } from 'next/font/google';
import "./globals.css";
import React from "react";

const jetBrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrains-mono',
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} antialiased ._font-color`}
      >
        {children}
        {modal}
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = await import("@/app/metadata.json");

  return metadata.default;
}