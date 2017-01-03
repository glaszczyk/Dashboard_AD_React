import React from 'react';

const TitleSmall = (props) => {
	return (
		<h5 className={ props.class }>
			{ props.title }
		</h5>
	)
}

TitleSmall.propTypes = {
	class: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
}

TitleSmall.defaultProps = {
	class: 'title-small',
	title: 'This is sample Title Small'
}

export default TitleSmall;