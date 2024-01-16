import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./_utils/styles/globals.scss";
import { Header } from "./_components/Header";
import { Footer } from "./_components/Footer";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Selidbe Plan A | Selidbe Srbija, Beograd",
  description:
    "Sleidbe u Beogradu, Srbiji - usluge selidbi, pakovanja i transporta. Pouzdano i profesionalno selidbeno preduzeće u Beogradu koje vam nudi sve što vam je potrebno za selidbu. Kontaktirajte nas danas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
