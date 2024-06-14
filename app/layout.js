import "../styles/globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import QueryProvider from "../components/queryprovider";

export const metadata = {
  title: "CSAJ",
  description: "CSAJ Khmer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
