import { Geist, Geist_Mono, Onest } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const onest = Onest({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-onest",
});

export const metadata = {
  title: "Byte Health | Accessible Healthcare for Bharat",
  description: "Byte Health brings affordable outpatient healthcare services to underserved communities through local clinics and low-cost health plans.",
  // The comma below is required before adding openGraph!
  openGraph: {
    title: "Byte Health | Accessible Healthcare for Bharat",
    description: "Byte Health brings affordable outpatient healthcare services to underserved communities through local clinics and low-cost health plans.",
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${onest.variable} font-sans antialiased`} suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
