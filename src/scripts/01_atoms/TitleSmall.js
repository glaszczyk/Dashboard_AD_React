import React from 'react';

const TitleSmall = (props) => {
	return (
		<h5 className={ props.class }>
			{ props.content }
		</h5>
	)
}

TitleSmall.propTypes = {
	class: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired
}

TitleSmall.defaultProps = {
	class: 'title-small',
	content: 'This is sample Title Small'
}

export default TitleSmall;