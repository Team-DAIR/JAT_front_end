// HARDCODE HEADER!

import Head from 'next/head';
import Header from './Header';
import ApplicationForm from './FormPage';

export default function Landing() {

    
    return (
        <div>
            <Head>
                <title>{props.pageTitle}</title>
                <meta charSet='UFT-8' />
                <meta name='viewport' content="width=device-width, initial-scale=1.0" />
                <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
                <link ref="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
            </Head>
            
            <ApplicationForm />
            <div>
                {props.children}
            </div>
        </div>
    )

}
