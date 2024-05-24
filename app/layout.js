import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export const metadata = {
  title: "CSAJ",
  description: "CSAJ Khmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-1 container mx-auto">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
