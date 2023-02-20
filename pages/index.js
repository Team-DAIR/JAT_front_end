import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import Landing from '../components/Landing';
import FormPage from '../components/FormPage';
import { useAuth } from '../contexts/auth';



export default function Home() {

  const { user, login } = useAuth();

  return (
    <>
      {/* <div
        className="bg-scroll bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1612198790700-0ff08cb726e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGNvb2tpZSUyMHN0YWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60')`,
          height: "1000px",
        }}
      > */}
        <Head>
              <title>Job Application Tracker</title>
              </Head>
            {user ?
                <FormPage />
                :
                <Landing />
            }

      {/* </div> */}
    </>
  )
}
