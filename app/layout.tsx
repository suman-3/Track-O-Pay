import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/components/font/index.css";
import { ClerkProvider } from "@clerk/nextjs";
import { QueryProvider } from "@/providers/query-providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Track-O-Pay",
  description: "Bank Expenses Tracker Website",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <QueryProvider>{children}</QueryProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
