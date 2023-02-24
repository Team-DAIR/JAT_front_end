// import myimage from "./Ricardo.jpg"

export default function About() {

  return (
    <>
      <header className='flex p-4 bg-black text-white font-mono text-2xl font-medium mb-32'>
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

      <main>

        <div className="bio-cards">
          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow   md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://via.placeholder.com/150" alt="Developer Dylan" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <article className="text-left m-4 p-4 text-gray-700 dark:text-gray-400">Hi, my name is Dylan Cabral. Thanks for visiting our application.  I am a Graduate of Code fellows In Advanced Software Development, In my free time I love doing hard labor involved hobbies to pretend I don't stare at a computer all day,  I enjoy helping my friends and tossing my dog around. you will usually here me laughing or i will be doing outdoor sports where I can hurt myself.</article>
            </div>
          </a>

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://scontent-sea1-1.xx.fbcdn.net/v/t39.30808-6/272282005_2084517421724021_8667888583782334934_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=UdZV9xpwn-UAX88T6j2&tn=OOj50z-fgiaD4HTg&_nc_ht=scontent-sea1-1.xx&oh=00_AfCvUKaOMJLYvVB9Jyg8BGt8V0eaYEASh1g5VakqXGkAIQ&oe=63FC95DF" alt="Developer Aubrey" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <article className="text-left m-4 p-4 text-gray-700 dark:text-gray-400">Hi! I'm Aubrey Corsetti, I have two dogs and a passion for coding. I love to paint, cook and create visually appealing, functional websites. Here is how we can connect!</article>
            </div>
          </a>

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://i.ibb.co/sQCtQ99/ian.jpg" alt="Developer Ian" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <article className="text-left m-4 p-4 text-gray-700 dark:text-gray-400">Hey! I'm Ian F. Shirley, currently living outside of Seattle with my wife, Leyla, and our golden doodle named Ramen and our snowshoe siamese cat named Sushi. As someone who not only loves building and fixing things, but also someone who is obsessed with finding answers to the questions “how” and “why”, being a software developer is a a rewarding career for me; and on top of that, I hope that someday I can use those skills and attributes at a company that makes positive contributions to issues that I care about, such as homelessness or environmental sustainability.</article>
            </div>
          </a>

          <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img src="https://lh3.googleusercontent.com/m9XiDPUycYQ4PQqjskSQvtg6m2_8_xCp9X3UEAFNAHZ8xgVeozuM_F7diZMhIe_tKIdhK-WtcOufBw342DnDj7KmgkHGDzJpQ8apEb-k4PgiQl3mU67i5xfJLFDHrEBZVrK3IxW5RkBoR3TaPFHOWdkNlZGuJHExzFMzjizh1Ot9O1mwEh308wpLhVoGRtg-NGz_OOqcmwIIGFOB8yzUcuyyxIAXVPcNFI4L1QFsO_qi7pdG5Xp0wbx0UKlos3UQQgIqmLuAxrVA7oPyxv16Wi5E2yHWqsDiByJO7ulFYdn1OUrprzFxV5NcA4-O8W3k2lm_BNPL5zII7D3dGNnuiQXNTULrLmCJtedW93w3TLGXflhJ02oeJ3pr5KRNweXykO15goWRC8HQ1pIpuuyaNobzPnz41ecK97j0_GFUTdtAz1MBlPSzhxG4ZI57jIJ6ZGU1hzAqDfmaoGBmvwtaUeE81WME5EDfUga5aw2m3I8n_xv_0BheSmjozFPvR2YeMYYcmcYabsWpqJZzOyK01DJDCdkvuCTx-f5KMIr1Xu_Qfj56qelWbjBxGu3DgFaSRd-v7o9rGfhdrrlsEoYCiluRF1UAVe8ewRAZRFwftHBnPuy38iWlW7kxhidEnaOwPSOCRcEOTokzHbwOFuHkzS4ymmdGcC0c4jCBs86ehI8x2uDSWbVCl6B6IO_NWsjUMd-9aZxNjp_9MzzyrgNULygOGY33Cp2JwhVCl4_EfwpfM3BrOn-AAkEcBS4ILOfe5VVcR_m5_xWIXY_0WZ3c7u2pOMRfDCv-CgNoHJDQnJRcsu3nnIz-hYLEm6aLIyamdFbADPf2tjdf9ZyA157LyQyAQFM6gJN1arN-v56S1I1Ulks_NLwkoWoX9-1uleW4VW4ha23f2en0jVBneJwnHEiv7NOb0vagcukK-N71-bkTkckl=w517-h689-no?authuser=0" alt="Developer Ricardo" className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <article className="text-left m-4 p-4 text-gray-700 dark:text-gray-400">Hello, Im Ricardo Soto-Fabela. I love to code but on my free time. I love to play video games, explore new cities, and enjoy the little things in life.</article>
            </div>
          </a>

        </div>


      </main>
    </>
  )

}
