import type { Metadata } from "next";
import { Roboto_Flex, Oswald } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: "--font-roboto",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sales Analysis",
  description: "Tool to analyze sales data exported from Aztec Reporting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
