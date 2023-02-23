import Head from "next/head";
import About from "@/components/About";
import Navbar from "@/components/Nav";

export default function AboutPage() {
    return(
        <div>
            <Head>
                <title>
                    About
                </title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="min-h-screen flex flex-col justify-center">
                <Navbar/>

                <About/>

            </main>
        </div>
    )
}