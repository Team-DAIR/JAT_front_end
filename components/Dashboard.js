import ApplicationForm from "./AddJobForm"
import Navbar from "./Nav"
import Footer from "./Footer"

export default function Dashboard() {
  return (
    <>

      <Navbar />
      <header className='flex p-4 bg-black text-black font-mono mb-32'>
        <header
          className=" bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
            height: "500px",
            width: "100%",
          }}
        >

          <ApplicationForm />
        </header>
      </header>
        <h1> DASHBOARD GOES HERE </h1>
        <Footer/>
    </>
  )
}