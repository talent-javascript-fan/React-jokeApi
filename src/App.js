import React from "react";
import DisplayJoke from "./components/RandomJoke";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";

function App() {
	return (
		<div className="App">
			<DisplayJoke />
		</div>
	);
}

export default App;
