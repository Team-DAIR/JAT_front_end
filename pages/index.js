import Head from 'next/head';
import Landing from '@/components/Landing';
import AddJob from '@/components/AddJob';
import { useAuth } from '../contexts/auth'
import Footer from '@/components/Footer';

export default function Home() {

  const { user, login } = useAuth();

  return (
    <div className='relative min-h-screen'>
      <Head>
        <title>Job Application Tracker</title>
      </Head>
      {user ?
        <AddJob />
        :
        <Landing onLogin={login} />
      }
      <Footer />
    </div>
  )
}
