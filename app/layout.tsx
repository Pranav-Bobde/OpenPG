import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import Sidebar from "@/components/sidebar/Sidebar";
import Header from "@/components/Header";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "OpenPG",
  description: "Open playground to play with LLMs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
        >
          <div className="grid grid-cols-10 grid-rows-11">
            <Sidebar className="col-span-2 row-span-11" />
            <Header className="col-span-8 row-span-1" />
            <div className="col-span-8 row-span-10 px-4">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
