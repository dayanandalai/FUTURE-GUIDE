// app/layout.tsx (or the layout file that wraps your /signup page)

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/contexts/auth-context"; // <--- Import your AuthProvider
import { Toaster } from "@/components/ui/toaster";     // <--- For useToast to work

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SkillSwap App", // Or your app name
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider> {/* <--- Wrap children with AuthProvider */}
          {children}
          <Toaster /> {/* <--- Place Toaster here as well for global toasts */}
        </AuthProvider>
      </body>
    </html>
  );
}