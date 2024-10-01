import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Agri Tech",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={cn(
        //   "bg-background min-h-screen font-sans antialiased",
        //   montserrat.className
        // )}
        className={montserrat.className}
      >
        {children}
      </body>
    </html>
  );
}
