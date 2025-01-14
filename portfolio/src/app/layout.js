import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// Remove the navbar import if not needed
import Navbar from './components/Navbar/page';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "It is my portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar className='z-10'/>
        {children}
      </body>
    </html>
  );
}
