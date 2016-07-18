import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import App from "./components/App";

document.addEventListener( "DOMContentLoaded", () => {
	const reactNode = document.getElementById( "react-node" );

	if ( reactNode ) {
		ReactDOM.render(
			<App />
		, reactNode );
	}
} );
