import React from 'react';
import { useState, useEffect } from 'react'
import './App.css';
import IntroText from './components/startText/Text'
import ModeBtn from './components/mode/ModeBtn'
import CommercialFeild from './components/commercials/CommercialFeild'


function App() {

	const [mode, setMode] = useState(true)

	const changeState = () => ( mode ? setMode(!mode) : setMode(!mode) )
	// Possible to send params from child, ex. code below
	/* const changeState = (param) => ( mode ? setMode(!mode) : setMode(!mode) ) */

	let stateClass: string;

	if( mode ) {
		stateClass = 'light'
	} else {
		stateClass = 'dark'
	}

	useEffect(() => {
		if(stateClass === 'light') {
			document.title = 'Dark Mode'
		} else {
			document.title = 'Light Mode'
		}
	})


	return (
		<div className={ stateClass + ' App' } >
			<div className="mode">
				<ModeBtn stateClass={ stateClass } changeState={ changeState }/>
			</div>
			<div className="commercialContainer">
				<CommercialFeild />
			</div>
			<div className="introText">
				<IntroText />
			</div>
		</div>
	);
}

export default App;
