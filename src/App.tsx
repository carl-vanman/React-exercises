import React from 'react';
import { useState } from 'react'
import './App.css';
import IntroText from './components/startText/Text'
import ModeBtn from './components/mode/ModeBtn'

function App() {

	const [mode, setMode] = useState(true)

	const changeState = () => ( mode ? setMode(!mode) : setMode(!mode) )

	let stateClass;

	if( mode ) {
		stateClass = 'light'
	} else {
		stateClass = 'dark'
	}

	return (
		<div className={ stateClass + ' App' } >
			<div className="mode">
				<ModeBtn state={ mode } changeState={ changeState }/>
			</div>
			<div className="introText">
				<IntroText />
			</div>
		</div>
	);
}

export default App;
