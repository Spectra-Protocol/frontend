import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";


import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { Providers } from "../providers";

export const metadata: Metadata = {

  title: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <Providers>
      <div className="relative flex flex-col h-screen">
        <Navbar />
        <main className="container mx-auto max-w-7xl px-6 flex-grow">
          {children}
        </main>
        <footer className="w-full flex items-center justify-center py-3" />
      </div>
    </Providers>
  );
}
