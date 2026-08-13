import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yfujimura.github.io"),
  title: "Yuki Fujimura | Computer Vision Researcher",
  description: "Yuki Fujimura is an Associate Professor at NAIST researching physics-based vision, 3D reconstruction, and machine learning.",
  openGraph: {
    title: "Yuki Fujimura | Computer Vision Researcher",
    description: "Physics-based vision, 3D reconstruction, and machine learning at NAIST.",
    type: "website",
    url: "https://yfujimura.github.io",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Yuki Fujimura — Computer Vision and Computational Imaging" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yuki Fujimura | Computer Vision Researcher",
    description: "Physics-based vision, 3D reconstruction, and machine learning at NAIST.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
