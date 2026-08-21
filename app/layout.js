import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk"
});

export const metadata = {
  title: "Hammed Ali | Web3 Engineer",
  description: "Web3 engineer and Solidity developer building decentralized systems from Lagos, Nigeria",
  openGraph: {
    title: "Hammed Ali | Web3 Engineer",
    description: "Web3 engineer and Solidity developer building decentralized systems from Lagos, Nigeria",
    type: "website",
    locale: "en_NG"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
