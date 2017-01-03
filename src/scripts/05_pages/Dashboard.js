import React from 'react';
import TitleSmall from '../01_atoms/TitleSmall.js';
import TitleMedium from '../01_atoms/TitleMedium.js';
import TitleBig from '../01_atoms/TitleBig.js';

class Dashboard extends React.Component {
	render () {
		return (
			<main>
				<TitleBig class={ "title-big" } title={ "To jest mój tytuł duży"} />
				<TitleMedium class={ "title-medium" } title={ "To jest mój tytuł średni"} />
				<TitleSmall  />
			</main>
		);
	}
}

export default Dashboard;