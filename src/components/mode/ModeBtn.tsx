import './ModeBtn.css'

const ModeBtn = (props: any) => {
	
	const changeState = props.changeState
	const stateClass = props.stateClass

	return ( 
		<div className="btnContainer">
			<button 
			className={ stateClass }
			onClick={ changeState }>
			{/* if you would like to send param to parent, see code below */}
			{/* onClick={ () => changeState(param) }> */}
				{ stateClass }
			</button>
		</div>
	)
}



export default ModeBtn