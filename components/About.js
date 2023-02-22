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

      <header className='flex p-4 bg-black text-white font-mono text-2xl font-medium mb-32'>
        <div
          className=" bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
            height: "300px",
            width: "100%",
          }}
        >
          
          <nav class="bg-gray-50 dark:bg-gray-700">
            <div class="max-w-screen-xl px-4 py-3 mx-auto md:px-6">
              <div class="flex items-center">
                <ul class="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
                  <li>
                    <a href="/" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Form</a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Dashboard</a>
                  </li>
                  <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">About Us</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          <h1 className="p-32 text-center text-3xl font-normal tracking-wider"><b className="text-5xl">M</b>ission <b className="text-5xl">S</b>tatement</h1>
          <p className="text-center italic text-2xl font-serif tracking-wider">"Our wonderful mission statement will go here!"</p>

        </div>
      </header>

      <main>
        <article className="text-left m-4 p-4">Dylan info</article>
        <article className="text-left m-4 p-4">Aubrey info</article>
        <article className="text-left m-4 p-4">Ian info</article>
        <article className="text-left m-4 p-4">Ricardo info</article>
      </main>


      <div>
        {props.children}
      </div>
    </div>
  )

}
