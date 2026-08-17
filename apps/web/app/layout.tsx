import { Inter } from "next/font/google";
import localFont from "next/font/local";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
const goga = localFont({
  src: [
    { path: "./fonts/goga/Goga-Thin.otf", weight: "100", style: "normal" },
    { path: "./fonts/goga/Goga-Extralight.otf", weight: "200", style: "normal" },
    { path: "./fonts/goga/Goga-Light.otf", weight: "300", style: "normal" },
    { path: "./fonts/goga/Goga-Regular.otf", weight: "400", style: "normal" },
    { path: "./fonts/goga/Goga-Medium.otf", weight: "500", style: "normal" },
    { path: "./fonts/goga/Goga-Semibold.otf", weight: "600", style: "normal" },
    { path: "./fonts/goga/Goga-Bold.otf", weight: "700", style: "normal" },
    { path: "./fonts/goga/Goga-Extrabold.otf", weight: "800", style: "normal" },
    { path: "./fonts/goga/Goga-Black.otf", weight: "900", style: "normal" },
  ],
  variable: "--font-goga",
  display: "swap",
});

export const metadata = {
  title: "Attention Factory | Your AI Partner",
  description: "For people who would rather leverage AI than talk about leveraging AI.",
  authors: [{ name: "Mercy Thaddeus", url: "https://mercythaddeus.xyz" }, { name: "Joshua Omobola", url: "https://koha.wtf" }],
  creator: "Joshua Omobola",
  publisher: "Joshua Omobola",
  openGraph: {
    title: "Attention Factory | Your AI Partner",
    description: "For people who would rather leverage AI than talk about leveraging AI.",
    url: "https://attentionfactory.io",
    siteName: "Attention Factory",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${goga.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
