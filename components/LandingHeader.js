
export default function LandingHeader() {
  return (
    <>
      <header className='flex p-4 bg-black text-white font-mono text-2xl font-medium mb-8'>
        <div
          className=" bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
            height: "500px",
            width: "100%",
          }}
        >
          <h1 className="p-32 text-center text-3xl font-normal tracking-wider"><b className="text-5xl">J</b>ob <b className="text-5xl">A</b>pplication <b className="text-5xl">T</b>racker</h1>
          <p className="text-center italic text-2xl font-serif tracking-wider">"Just JAT it down!"</p>
        </div>
      </header>
    </>
  )
}


