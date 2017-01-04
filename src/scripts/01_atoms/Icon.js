import React from 'react';

const Icon = (props) => {
	return (
		<img className={ props.class } src={ props.path } alt=""/>
	)
}

Icon.propTypes = {
	class: React.PropTypes.string.isRequired,
	path: React.PropTypes.string.isRequired
}

Icon.defaultProps = {
	class: 'icon--large',
	path: 'http://google.com'
}

export default Icon;