"use client";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { OptimizedStars } from "@/components/shared/OptimizedStars";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import { SWRConfig } from 'swr';
import { swrConfig, localStorageProvider } from '@/lib/swr-config';
import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/shared/LoadingSpinner';
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <SWRConfig 
          value={{
            ...swrConfig,
            provider: localStorageProvider
          }}
        >
          <Suspense fallback={<LoadingSpinner className="fixed inset-0 z-50" />}>
            <StarsCanvas />
            <Navbar />
            {children}
          </Suspense>
        </SWRConfig>
      </body>
    </html>
  );
}