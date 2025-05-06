import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@chakra-ui/react";
const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopping Bag",
  description: "A shopping bag app built with Next.js and Chakra UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}  antialiased`}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
