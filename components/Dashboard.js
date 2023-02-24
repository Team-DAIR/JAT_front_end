import Image from "next/image"
import Doughnut from "./Doughnut"
import Footer from "./Footer"
import JobList from "./JobList"
import NavBar from "./NavBar"

export default function Dashboard() {
  return (
    <div className='relative min-h-screen '>

      <NavBar />
      <header className='flex p-4 bg-black text-black font-mono mb-32'>

        {/* <div className="bg-no-repeat bg-cover">
          <Image
            src='https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='sparkly black sand'
            fill='true'
          />
        </div> */}

        <div
          className="flex content-center flex-col bg-no-repeat"
          
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
            height: "200px",
            width: "100%",
          }}
        >
          <h1 className='p-32 text-center text-white text-3xl font-mono tracking-wider'> DASHBOARD</h1>

          
        </div>
      </header>
      <div className='items-center flex flex-col align-center '>
          <JobList />
      </div>
      <div className='mt-2 items-center flex flex-col align-center  '>
        <Doughnut
        className=''
          options={{ maintainAspectRatio: true}} />
      </div>
      <Footer />

      </>

  )
}
