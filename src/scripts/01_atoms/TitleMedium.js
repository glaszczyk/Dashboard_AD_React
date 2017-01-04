import React from 'react';

const TitleMedium = (props) => {
	return (
		<h3 className={ props.class }>
			{ props.content }
		</h3>
	)
}

TitleMedium.propTypes = {
	class: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired
}

TitleMedium.defaultProps = {
	class: 'title-medium',
	content: 'This is sample Title Medium'
}

export default TitleMedium;