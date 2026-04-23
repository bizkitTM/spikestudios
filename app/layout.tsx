import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spike Studios",
  description:
    "An app studio building products that serve their customers. Human-centric, with AI as a tool — not the driver.",
  metadataBase: new URL("https://spikestudios.com"),
  openGraph: {
    title: "Spike Studios",
    description:
      "An app studio building products that serve their customers. Human-centric, with AI as a tool — not the driver.",
    url: "https://spikestudios.com",
    siteName: "Spike Studios",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
