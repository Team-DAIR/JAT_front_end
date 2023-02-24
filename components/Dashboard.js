import useResource from "@/hooks/useResource"
import Image from "next/image"
import Doughnut from "./Doughnut"
import Footer from "./Footer"
import JobList from "./JobList"
import NavBar from "./NavBar"

export default function Dashboard() {

  const { deleteResource } = useResource();

  return (
    <>
      <div className='relative min-h-screen '>

        <NavBar />
        <header className='flex p-4 bg-black text-black font-mono'>

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
              height: "300px",
              width: "100%",
            }}
          >
            <h1 className='pt-32 text-center text-white text-3xl font-mono tracking-wider'> DASHBOARD</h1>
            <p className='pt-3 text-center text-white text-lg font-mono italic tracking-wider'> You're on the road to success! Keep it up!</p>



          </div>
        </header>
        <h1 className="text-white bg-black text-center text-2xl font-mono pt-11">Your Applications</h1>
        <div className='items-center flex flex-col align-center bg-black px-28 py-11'>
          <JobList onDelete={deleteResource}/>
        </div>
        <div className='p-2 pb-32 items-center flex flex-col mx-auto bg-black'>
          <Doughnut
            className=''
            options={{ maintainAspectRatio: true }} />
        </div>
        <Footer />
      </div>
    </>



  )
}
