import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fariz Portfolio",
  description: "A Portfolio made by Fariz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <header className="bg-[#121212] md:fixed md:top-0 md:left-0 md:right-0 md:px-8 z-50">
          <div
            className={`animate-fadeInFromUp max-w-7xl mx-auto flex flex-wrap justify-between items-center py-8 px-4 text-lg w-full backdrop-blur-md bg-opacity-80 z-40`}
          >
            <div className="text-[#98c1d9]">farizRifkyBerliano();</div>
            <nav className="hidden text-white text-sm md:flex md:items-center">
              <ul className="flex justify-between gap-10 font-semibold">
                <li>
                  <Link href={`/`}>Home</Link>
                </li>
                <li>
                  <Link href={`/about`}>About</Link>
                </li>
                <li>
                  <Link href={`/projects`}>Projects</Link>
                </li>
              </ul>
            </nav>
            <div>
              <Image className="rounded-full w-[40px]" src={`https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png`} alt="Github" width={2000} height={2000} />
            </div>
          </div>
        </header>

        <main className="md:mt-[94px]">{children}</main>

        <nav className="text-white px-10 py-4 text-sm fixed bottom-0 left-0 right-0 backdrop-blur-md backdrop-opacity-90 border border-[#383838] rounded-t-3xl bg-[#121212] bg-opacity-80 md:hidden">
          <ul className="flex justify-around">
            <li>
              <Link href={`/`}>Home</Link>
            </li>
            <li>
              <Link href={`/about`}>About</Link>
            </li>
            <li>
              <Link href={`/projects`}>Projects</Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}
