import React from "react";
import { render } from "react-dom";
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

const App = () => (
	<div>
		<LiteYouTubeEmbed
			id="L2vS_050c-M"
			title="What’s new in Material Design for the web (Chrome Dev Summit 2019)"
		/>
	</div>
);

render(<App />, document.getElementById("root"));