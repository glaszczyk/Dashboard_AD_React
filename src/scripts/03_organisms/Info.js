import React from 'react';
import InfoTopPart from '../02_molecules/InfoTopPart.js';
import InfoBottomPart from '../02_molecules/InfoBottomPart.js';


const Info = (props) => {
	return (
		<div className={ props.content.class }>
			<InfoTopPart content={ props.content.InfoTopPart } />
			<InfoBottomPart content={ props.content.InfoBottomPart } />
		</div>
	)
}
 Info.propTypes = {
	content: React.PropTypes.object
}


export default Info;