import './ModeBtn.css'

const ModeBtn = (props: any) => {
	
	const state = props.state

	let stateClass;

	if( state ) {
		stateClass = 'Light'
	} else {
		stateClass = 'Dark'
	}

	const changeState = props.changeState

	return ( 
		<div className="btnContainer">
			<button 
			className={ stateClass }
			onClick={ changeState }>
				{ stateClass }
			</button>
		</div>
	)
}



export default ModeBtn