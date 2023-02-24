import CreateJobForm from "./CreateJobForm";
import NavBar from "./NavBar";
import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Video = () => (
  <div className="grow p-32 flex-col">
      <LiteYouTubeEmbed
          id="KObiuTFYTkM"
          activeClass="lyt-activated" // Default as "lyt-activated", gives control to wrapper once clicked
          iframeClass="" // Default none, gives control to add a class to iframe element itself
          playerClass="lty-playbtn" // Default as "lty-playbtn" to control player button styles
          wrapperClass="yt-lite" // Default as "yt-lite" for the div wrapping the area, the most important class and needs extra attention, please refer to LiteYouTubeEmbed.css for a reference.
      />
  </div>
);


export default function AddJob() {
  return (
    <>
      <div className="bg-black">
        
                <div
                className=" bg-no-repeat bg-cover"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')`,
                  height: "650px",
                  width: "100%",
                }}
            >
                <NavBar />
      <CreateJobForm />
      </div>
      <h1 className="text-white text-center pt-14 text-xl font-mono italic">Need help? Watch this video for some tips on landing your dream job!</h1>
      <Video />
        </div>        
    </>
  )
}