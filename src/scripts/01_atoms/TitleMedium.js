import React from 'react';

const TitleMedium = (props) => {
	return (
		<h3 className={ props.class }>
			{ props.title }
		</h3>
	)
}

TitleMedium.propTypes = {
	class: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
}

TitleMedium.defaultProps = {
	class: 'title-medium',
	title: 'This is sample Title Medium'
}

export default TitleMedium;