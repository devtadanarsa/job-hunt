import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./../globals.css";
import Image from "next/image";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "@/providers/AuthProvider";

const epilogue = Epilogue({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JobHunt",
  description:
    "Discover Your Dream Job with JobHunt - Your Ultimate Job Search Companion! Explore a vast array of career opportunities, connect with top employers, and streamline your job search effortlessly. JobHunt offers a user-friendly platform, advanced search filters, and personalized job recommendations. Start your journey towards a fulfilling career today!",
  viewport: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.className} relative overflow-x-hidden`}>
        <AuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <Toaster />
        </AuthProvider>
      </body>
    </html>
  );
}
