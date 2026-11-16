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
  description: "I’m Hammed Ali Oyeleye (Alike), a software and Web3 developer building useful tools across payments, blockchain and security.",
  openGraph: {
    title: "Hammed Ali Oyeleye (Alike) | Software & Web3 Engineer",
    description: "Selected software projects, team hackathon achievements and open-source contributions by Hammed Ali Oyeleye.",
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
