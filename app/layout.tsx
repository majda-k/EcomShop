import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "./components/Header";
import FooterTop from "./components/FooterTop";
import Footer from "./components/Footer";
import FooterBottom from "./components/FooterBottom";


const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ecomerce_Web",
  description: "site web ecommerce",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <>

      <ClerkProvider
        appearance={{
          cssLayerName: 'clerk',
        }}
      >
        <Header />
        <html
          lang="en"
          className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
          <body className="min-h-screen flex flex-col px-80">
            <main className="flex-1">{children}</main>
              <FooterTop />
              <Footer />
              <FooterBottom />
          </body>
        </html>
      </ClerkProvider>
    </>
  );
}
   
  
