import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kerany Castaneda | Portfolio",
  description:
    "Portfolio of Kerany Castaneda — developer, computer science student, and former Marine communications specialist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}