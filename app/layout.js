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
  metadataBase: new URL("https://iamalikex.tech"),
  alternates: { canonical: "/" },
  title: "Hammed Ali Oyeleye (Alike) | Software & Web3 Engineer",
  description: "Portfolio of Hammed Ali Oyeleye: full-stack software, on-chain payment verification, Solidity, open-source contributions and award-winning team hackathon projects.",
  openGraph: {
    title: "Hammed Ali Oyeleye (Alike) | Software & Web3 Engineer",
    description: "Portfolio of Hammed Ali Oyeleye: payment verification, Solidity, security tooling and open-source contributions.",
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
