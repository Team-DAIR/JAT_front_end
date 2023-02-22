import Head from 'next/head';
import { useState } from 'react';
import Header from '../components/Header';
import ApplicationForm from '../components/FormPage';
import Footer from '../components/Footer.js';
import LoginForm from '../components/LoginForm';
import { useAuth } from '../contexts/auth';
import Landing from '@/components/Landing';
import Dashboard from '@/components/Dashboard';

export default function Home() {

  const { user, login } = useAuth();

  return (
    <>
      <div
        className='bg-gradient-to-b from-stone-100 to-gray-200'
      >
        <Head>
              <title>Job Application Tracker</title>
              </Head>
            {user ?
                <Dashboard />
                :
                <LoginForm onLogin={login} />
            }

      </div>
    </>
  )
}
