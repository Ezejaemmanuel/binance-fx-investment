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
        <body className={`${inter.className} bg-black`}>
          <div className=" w-full flex justify-center items-center ">
            {children}   
          </div>
       </body>
  );
}
