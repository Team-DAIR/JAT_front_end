import Head from 'next/head';
import Landing from '@/components/Landing';
import AddJob from '@/components/AddJob';
import { useAuth } from '../contexts/auth'
import Footer from '@/components/Footer';

export default function Home() {

  const { user, login } = useAuth();

  return (
    <>
      <div className='bg-gradient-to-b from-stone-100 to-gray-200'>

        <Head>
          <title>Job Application Tracker</title>
        </Head>

        {user ?
          <AddJob />
          :
          <Landing onLogin={login} />
        }

      </div>
      <Footer />
    </>
  )
}
