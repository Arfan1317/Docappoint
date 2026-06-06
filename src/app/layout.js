import "./globals.css";
import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "DocAppoint | Your Health, Our Priority",
  description: "Book appointments with trusted doctors.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="icon" href="/Favicon.png" sizes="any" />
      </head>
      
      <body className="antialiased bg-white text-gray-900 font-sans" style={{ fontFamily: "var(--font-poppins)" }}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}