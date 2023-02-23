import Head from "next/head";
import AddJob from "@/components/AddJob";

export default function AddaJobPage() {
    return (
        <>
            <Head>
                <title>
                    Add A Job Page
                </title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AddJob />
        </>
    )
}