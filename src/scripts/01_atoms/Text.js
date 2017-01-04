import React from 'react';

const Text = (props) => {
	return (
		<p className={ props.class }>
			{ props.content }
		</p>
	)
}

Text.propTypes = {
	class: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired
}

Text.defaultProps = {
	class: 'text--medium',
	content: 'This is sample paragraph text'
}

export default Text;