import Head from "next/head";
import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return(
        <>
            <Head>
                <title>
                    About
                </title>
            </Head>
            <NavBar />
            <About/>
            <Footer />
        </>
    )
}