import React from "react";
import { Socket } from "socket.io-client";
import "./App.css";
import { useSockets } from "./context/socket.context";


const App = () : JSX.Element=>{
	const {socket} = useSockets()
	console.log(socket)
	
	console.log(socket.id)
  	return (
    	<div className="App">
			hello
    	</div>
  	);
}

export default App;
