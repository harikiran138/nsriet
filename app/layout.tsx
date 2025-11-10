import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const poppins = Poppins({ 
  weight: ['300', '400', '600', '700'],
  subsets: ["latin"],
  variable: '--font-poppins',
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#003366",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans antialiased`}>
        <ThemeProvider>
          <header className="sticky top-0 z-50 shadow-md">
            <Navbar />
          </header>
          <main>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
