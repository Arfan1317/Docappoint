import { Toaster } from "react-hot-toast";
import "./globals.css";

export const metadata = {
  title: "DocAppoint | Doctor Appointment Manager",
  description: "Book your doctor appointments easily and securely.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        {}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}