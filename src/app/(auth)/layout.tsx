import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./../globals.css";
import Image from "next/image";
import { Toaster } from "@/components/ui/toaster";

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
        <main className="grid grid-cols-2">
          <div className="relative h-screen">
            <div className="absolute w-full h-full">
              <Image
                src="/images/bg-auth.png"
                alt="images/bg-auth.png"
                fill
                objectFit="cover"
                objectPosition="top"
              />
            </div>
          </div>
          <div className="w-full relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              {children}
            </div>
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
