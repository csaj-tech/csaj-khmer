import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QueryProvider from "../components/queryprovider";
import { Noto_Sans_Khmer } from "next/font/google";

const notoKhmer = Noto_Sans_Khmer({
  subsets: ["khmer"],
  variable: "--font-noto-khmer",
  display: "swap",
});



export const metadata = {
  title: "CSAJ",
  description: "CSAJ Khmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={notoKhmer.variable}>
      <body>
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
