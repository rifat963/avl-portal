import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Applied Vision Lab | Dr. Mohammad Rifat Ahmmad Rashid",
    template: "%s | Applied Vision Lab",
  },
  description:
    "Teaching, research, and tutorials in computer vision and applied AI — Associate Professor at East West University, Dhaka, Bangladesh.",
  openGraph: {
    siteName: "Applied Vision Lab",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
