import Head from "next/head";
import About from "@/components/About";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return(
        <div className='relative min-h-screen'>
            <Head>
                <title>
                    About
                </title>
            </Head>
            <NavBar />
            <About/>
            <Footer />
        </div>
    )
}
