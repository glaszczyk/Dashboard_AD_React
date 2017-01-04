import React from 'react';
import Text from '../01_atoms/Text.js';
import Icon from '../01_atoms/Icon.js';


const InfoBottomPart = (props) => {
	return (
		<div className={ props.content.class } >
			<div className="info__bottom-part-left">
				<Text key={1} class={ props.content.Text[0].class } content={ props.content.Text[0].content } />
			</div>
			<div className="info__bottom-part-right">
				<Icon class={ props.content.Icon.class } path={ props.content.Icon.path } />
			</div>
		</div>
	)
}

InfoBottomPart.propTypes = {
	class: React.PropTypes.string.isRequired,
	content: React.PropTypes.object.isRequired
}

InfoBottomPart.defaultProps = {
	class: 'text--large',
	content: 'This is sample paragraph text'
}

export default InfoBottomPart;