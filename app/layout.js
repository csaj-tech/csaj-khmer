import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QueryProvider from "../components/queryprovider";
import {Noto_Sans_Khmer } from "next/font/google";

const font = Noto_Sans_Khmer({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
});


export const metadata = {
  title: "CSAJ",
  description: "CSAJ Khmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${font.variable}`}>
      <body className="font-sans">
        <QueryProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 container mx-auto">{children}</main>
            <Footer />
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
