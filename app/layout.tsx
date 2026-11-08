import type { Metadata, Viewport } from "next";
import { Fraunces, Inter, JetBrains_Mono, Newsreader, Nunito, Pixelify_Sans } from "next/font/google";
import { ModeProvider } from "@/hooks/useMode";
import { profile } from "@/data/profile";
import "./globals.css";

const fraunces = Fraunces({ subsets: ["latin"], variable: "--font-fraunces", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });
const newsreader = Newsreader({ subsets: ["latin"], variable: "--font-newsreader", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });
const pixel = Pixelify_Sans({ subsets: ["latin"], variable: "--font-pixel", display: "swap" });

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.headline,
};
export const viewport: Viewport = { width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable} ${jetbrains.variable} ${pixel.variable} ${newsreader.variable} ${nunito.variable}`}>
      <body>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
