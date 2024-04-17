import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google"
import "@/styles/globals.css"
import { cn } from "@/lib/utils"
import React from "react";
import {Providers} from "@/app/providers";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export const metadata: Metadata = {
  title: "Enigma Landing | By Borsalan",
  description: "A template landing to work with",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en" className='light'>
      <body

        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
      <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
