import React from 'react';

const TitleBig = (props) => {
	return (
		<h3 className={ props.class }>
			{ props.title }
		</h3>
	)
}

TitleBig.propTypes = {
	class: React.PropTypes.string.isRequired,
	title: React.PropTypes.string.isRequired
}

TitleBig.defaultProps = {
	class: 'title-big',
	title: 'This is sample Title Big'
}

export default TitleBig;