import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "DocAppoint | Your Health, Our Priority",
  description: "Book appointments with trusted doctors.",
  icons: {
    icon: "/Favicon.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
    
      <body className="antialiased bg-gray-50 text-gray-900 font-sans min-h-screen flex flex-col" style={{ fontFamily: "var(--font-poppins)" }}>
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer /> 
      </body>
    </html>
  );
}