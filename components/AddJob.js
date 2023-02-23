import CreateJobForm from "./CreateJobForm";
import NavBar from "./NavBar";
import React from "react";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const Video = () => (
  <div>
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
      <NavBar />
      <CreateJobForm />
      <Video />
    </>
  )
}