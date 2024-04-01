import { Inter } from "next/font/google";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "../scss/index.scss";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Kindertagespflege in Sankt Augustin U3"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Lilita+One&display=swap" rel="stylesheet" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <div style={{ flex: 1 }}></div>
        <Footer />
      </body>
    </html>
  );
}
