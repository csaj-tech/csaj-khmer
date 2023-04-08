import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Layout({ children, title }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/logo.jpg" />
            </Head>

            <Navbar></Navbar>

            <main>{children}</main>
            
            <Footer></Footer>
        </>
    );
}