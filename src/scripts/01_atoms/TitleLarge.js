import React from 'react';

const TitleLarge = (props) => {
	return (
		<h2 className={ props.class }>
			{ props.content }
		</h2>
	)
}

TitleLarge.propTypes = {
	class: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired
}

TitleLarge.defaultProps = {
	class: 'title-large',
	content: 'This is sample Title Large'
}

export default TitleLarge;