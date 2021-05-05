import {useState} from 'react'
import Commercial1 from './Commercial1'
import Commercial2 from './Commercial2'
import './CommercialFeild.css'

const CommercialFeild = () => {

	const [commercial, setCommercial] = useState( true )
	
	/* setTimeout(() => {
		setCommercial( !commercial )
	}, 2000); */

	return (
		<div className="commercialFeild">	
				{ commercial ? <Commercial1 /> : <Commercial2 /> }
		</div>
	)
}

export default CommercialFeild