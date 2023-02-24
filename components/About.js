// import myimage from "./Ricardo.jpg"

export default function About() {

  return (
    <>
      <header className='flex p-4 bg-black text-white font-mono text-2xl font-medium'>
        <div
          className=" bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
            height: "400px",
            width: "100%",
          }}
        >
          <h1 className="p-32 text-center text-3xl font-normal tracking-wider"><b className="text-5xl">M</b>ission <b className="text-5xl">S</b>tatement</h1>
          <p className="text-center italic text-2xl font-serif tracking-wider">"Our mission is to save job seekers time and hassle by providing a more efficient and productive way to track their job applications!"</p>
        </div>
      </header>

      <main className="bg-black pl-16">

        <div className="bio-cards grid grid-cols-2 gap-4 place-content-center ">
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-2" src="https://i.ibb.co/hKmTgSX/Dylan.jpg" alt="Developer Dylan" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <article className="text-left m-4 p-4 text-gray-700 dark:text-gray-400">Hi, my name is Dylan Cabral. Thanks for visiting our application.  I am a Graduate of Code fellows In Advanced Software Development, In my free time I love doing hard labor involved hobbies to pretend I don't stare at a computer all day,  I enjoy helping my friends and tossing my dog around. you will usually here me laughing or i will be doing outdoor sports where I can hurt myself.</article>
            </div>
          </a>

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-2" src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/272282005_2084517421724021_8667888583782334934_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=UdZV9xpwn-UAX88T6j2&tn=OOj50z-fgiaD4HTg&_nc_ht=scontent-sea1-1.xx&oh=00_AfCvUKaOMJLYvVB9Jyg8BGt8V0eaYEASh1g5VakqXGkAIQ&oe=63FC95DF" alt="Developer Aubrey" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <article className="text-left m-4 p-4 text-gray-700 dark:text-gray-400">Hi! I'm Aubrey Corsetti, I have two dogs and a passion for coding. I love to paint, cook and create visually appealing, functional websites. Here is how we can connect!</article>
            </div>
          </a>

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-2" src="https://i.ibb.co/sQCtQ99/ian.jpg" alt="Developer Ian" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <article className="text-left m-4 p-4 text-gray-700 dark:text-gray-400">Hey! I'm Ian F. Shirley, currently living outside of Seattle with my wife, Leyla, and our golden doodle named Ramen and our snowshoe siamese cat named Sushi. As someone who not only loves building and fixing things, but also someone who is obsessed with finding answers to the questions “how” and “why”, being a software developer is a a rewarding career for me; and on top of that, I hope that someday I can use those skills and attributes at a company that makes positive contributions to issues that I care about, such as homelessness or environmental sustainability.</article>
            </div>
          </a>

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img src="https://i.ibb.co/2NtN3nY/IMG-20221106-203633-388.jpg" alt="Developer Ricardo" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg ml-2" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <article className="text-left m-4 p-4 text-gray-700 dark:text-gray-400">Hello, Im Ricardo Soto-Fabela. I love to code but on my free time. I love to play video games, explore new cities, and enjoy the little things in life.</article>
            </div>
          </a>

        </div>


      </main>
    </>
  
  )

}
