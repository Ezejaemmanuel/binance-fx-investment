import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Full Authentication",
  description: "Provide your full authentication here",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (

    >
      <html lang='en'>
        <body className={`${inter.className} bg-dark-1`}>
          <div className=" w-full flex justify-center items-center min-h-screen">
            {children}   
          </div>
       </body>
      </html>

  );
}
