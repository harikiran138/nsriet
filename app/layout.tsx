import type { Metadata } from "next";
import { Inter, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const robotoSlab = Roboto_Slab({ 
  weight: ['300', '400', '500', '700'],
  subsets: ["latin"],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "NSRIET - Excellence in Engineering Education",
  description: "NSRIET is a premier engineering institution committed to academic excellence, innovation, and industry collaboration. Explore our programs, research, and campus life.",
  keywords: "NSRIET, engineering college, technology, education, admissions, placements, research, innovation",
  authors: [{ name: "NSRIET" }],
  openGraph: {
    title: "NSRIET - Excellence in Engineering Education",
    description: "Premier engineering institution committed to academic excellence and innovation",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "NSRIET - Excellence in Engineering Education",
    description: "Premier engineering institution committed to academic excellence and innovation",
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#003366",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${robotoSlab.variable} antialiased`}>
        <ThemeProvider>
          <Navbar />
          <main className="mt-[120px] lg:mt-[140px]">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
