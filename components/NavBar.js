import Link from 'next/link';
import { useAuth } from '@/contexts/auth';
import { useRouter } from 'next/router';

export default function NavBar() {

  const { logout } = useAuth();
  const router = useRouter()

  function handleLogout(){
    logout();
    router.push('/')
  }
  
  return (
    <nav className='top-0 w-screen flex items-center flex-wrap bg-blue-900 p-3 '>

      <div className='inline-flex items-center p-2 mr-4 '>
        <span className='text-xl text-white tracking-wide font-mono'>
          <b className="text-2xl">J</b>ob <b className="text-2xl">A</b>pplication <b className="text-2xl">T</b>racker
        </span>
      </div>

      <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>

        <Link
          href='/dashboard'
          className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white '>

          Dashboard

        </Link>

        <Link
          href='/add-a-job'
          className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>

          Add A Job

        </Link>

        <Link
          href='/about'
          className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>

          About Us

        </Link>

        <button className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white' onClick={handleLogout}>Logout</button>

      </div>
    </nav>
  )
};

