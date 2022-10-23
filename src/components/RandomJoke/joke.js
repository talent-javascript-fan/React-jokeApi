import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import GetStatus from "../../actions/GetStatus";
import GetData from "../../actions/GetData";
import '../../styles/style.scss'

const DisplayJoke = () => {

	const apiUrl = "https://official-joke-api.appspot.com/jokes/random"
	const [btnClicked, setClicked] = useState(false);
	const [apiData, setApiData] = useState("");
	const [isActive, setActive] = useState(false);
	const [jokeData, setJokeData] = useState("");
	const [punchLine, setPunchLine] = useState("");
	const [error, setError] = useState(false);

	const handleClick = async () => {
		setClicked(true);
		const statusCode = await GetStatus(apiUrl);
		if (statusCode === 200) {
			const data = await GetData(apiUrl);
			setApiData(data);
			setActive(false);
			setJokeData(data.setup);
			setPunchLine(data.punchline);
			setError(false);
		}
		else {
			setError(true);
		}
	}

	const clickPunchBtn = () => {
		setActive(!isActive);
	}

	return (
		<section className="display-joke">
			<Container>
				<div className="display-header">
					<button
						className="display-btn"
						onClick={handleClick}
					>Get A New Random Joke
					</button>
					<a href="https://karljoke.herokuapp.com/"
						target="_blank"
						rel="noopener noreferrer"
					>View API Docs</a>
				</div>
				{btnClicked && !apiData && !error && (
					<p className="loading"> LOADING YOUR JOKE...</p>
				)}
				{btnClicked && error && (
					<p className="error">THERE WAS AN ERROR LOADING YOUR JOKE.</p>
				)}
				{btnClicked && apiData && !error && (
					<div className="joke-content">
						<FontAwesomeIcon icon={faQuoteLeft} className="quote" />
						<div className="joke-setup">
							{jokeData}
						</div>
						<button
							className={!isActive ? "punch-btn punchBtn-show" : "punch-btn punchBtn-hide"}
							onClick={clickPunchBtn}
						>{!isActive ? "Show Punchline" : "Hide Punchline"}</button>
					</div>
				)}
				{btnClicked && apiData && isActive && (
					<div className="display-punch">
						<FontAwesomeIcon icon={faQuoteRight} className="quote" />
						<div className="joke-punch">
							{punchLine}
						</div>
					</div>
				)}
			</Container>
		</section>
	);
};

export default DisplayJoke;
