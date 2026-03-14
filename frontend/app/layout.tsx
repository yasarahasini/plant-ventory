"use client";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Providers from "./providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <Navbar />
       <Providers>{children}</Providers>
        <Footer/>
      </body>
    </html>
  );
}