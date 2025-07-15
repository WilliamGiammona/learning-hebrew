import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Learning Hebrew",
  description: "Learning Hebrew",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50">
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
