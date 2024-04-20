import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import { Toaster } from "@/components/ui/toaster";
import { Providers } from "@/providers/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Assignment",
  description: "Full stack development assignment",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>

      <html lang="en">
        <body className={inter.className}>
          <Providers>
            <Toaster />
            {children}
          </Providers>
        </body>
      </html>
    </SessionProvider>
  );
}
