import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReggaeTONED Gym",
  description: "Music. Strength. Discipline. Attitude.",
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