import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { CartProvider } from "./components/CartProvider";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://votre-domaine.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Kinesvelt | Reprenez le contrôle de votre silhouette",
  description: "Nos programmes minceur personnalisés vous aident à perdre du poids de manière efficace et durable.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kinesvelt | Centre de Minceur et Bien-être",
    description: "Atteignez votre poids idéal avec nos experts certifiés.",
    url: SITE_URL,
    siteName: "Kinesvelt",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FAF8F7] text-gray-800`}
      >
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RZZF4SM78Z"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RZZF4SM78Z');
          `}
        </Script>

        <main className="min-h-screen pt-24">
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </main>
      </body>
    </html>
  );
}
