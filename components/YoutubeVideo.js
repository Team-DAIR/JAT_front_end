import React from "react";
import YouTube from "react-youtube";

export default class YoutubeVideo
extends React.Component {
render() {
	const opts = {
	height: "390",
	width: "640",
	playerVars: {
		autoplay: 1,
	},
	};

	return (
	<div>
		<h3>How to find Software Engineering job openings</h3>
		<YouTube videoId="KObiuTFYTkM"
			opts={opts} onReady={this._onReady} />
	</div>
	);
}

_onReady(event) {
	event.target.pauseVideo();
}
}
