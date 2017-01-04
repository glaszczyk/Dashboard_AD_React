import React from 'react';
import Text from '../01_atoms/Text.js';
import Icon from '../01_atoms/Icon.js';

const InfoTopPart = (props) => {
	return (
		<div className={ props.content.class } >
			<div className="info__top-part-left">
				<Text key={1} class={ props.content.Text[0].class } content={ props.content.Text[0].content } />
				<Text key={2} class={ props.content.Text[1].class } content={ props.content.Text[1].content } />
			</div>
			<div className="info__top-part-right">
				<Icon class={ props.content.Icon.class } path={ props.content.Icon.path } />
			</div>
		</div>
	)
}

InfoTopPart.propTypes = {
	content: React.PropTypes.object
}

InfoTopPart.defaultProps = {
	content: {}
}

export default InfoTopPart;