import Head from "next/head";
import Dashboard from "@/components/Dashboard";


export default function DashboardPage() {
    return (
        <>
            <Head>
                <title>
                    dashboard
                </title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="node_modules/lite-youtube-embed/src/lite-yt-embed.css" />
            </Head>
                <Dashboard />
        </>
    )
}