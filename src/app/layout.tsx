import type { Metadata } from "next";
import { Inter, League_Spartan } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const league_spartan = League_Spartan({ weight: ["400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Bhagat",
  description: "a seasoned full-time trader and dynamic speaker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={league_spartan.className}>{children}</body>
    </html>
  );
}
