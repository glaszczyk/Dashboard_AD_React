import React from 'react';
import TitleSmall from '../01_atoms/TitleSmall.js';
import TitleMedium from '../01_atoms/TitleMedium.js';
import TitleLarge from '../01_atoms/TitleLarge.js';
import Text from '../01_atoms/Text.js';
import InfoTopPart from '../02_molecules/InfoTopPart.js';
import InfoBottomPart from '../02_molecules/InfoBottomPart.js';
import Info from '../03_organisms/Info.js';

var InfoPanel = {
	class: "info",
	InfoTopPart: {
		class: "info__top-part",
		Text: [
			{
				class: "text--large",
				content: "20,000 k"
			},
			{
				class: "text--small",
				content: "Total views component"
			}
		],
		Icon: {
			class: "icon--large",
			path: "https://odesk-prod-portraits.s3.amazonaws.com/Users:grzegorzlaszczyk:PortraitUrl?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=hfbuUfI9axeW9OqQENClLgInAcI%3D&1478988284640575"
		}
	},
	InfoBottomPart: {
		class: "info__bottom-part--red",
		Text: [
			{
				class: "text--small",
				content: "Change from visit"
			}
		],
		Icon: {
			class: "icon--large",
			path: "https://odesk-prod-portraits.s3.amazonaws.com/Users:grzegorzlaszczyk:PortraitUrl?AWSAccessKeyId=1XVAX3FNQZAFC9GJCFR2&Expires=2147483647&Signature=hfbuUfI9axeW9OqQENClLgInAcI%3D&1478988284640575"
		}
	}
}

class Dashboard extends React.Component {
	render () {

		// build dynamic element with elementname, className, content using arrow function
		var element = (element, customClass, content) => React.createElement(element, customClass, content);
		let customMadeElement = element(Text, {class: "text--medium"}, "This is fucking title");
		
		// build dynamic element with elementname, className, content using object
		let customElement = {
				element: Text,
				customClass: {class: "text--medium"},
				content: "My super sample text"
			};
		customMadeElement = React.createElement(customElement.element, customElement.customClass, customElement.content);
		
		
		return (
			<main>
				{ customMadeElement }
				<TitleLarge class={ "title-large" } content={ "To jest mój tytuł duży Title Big"} />
				<TitleLarge class={ "title-large" } content={ "To jest mój tytuł duży Title Big"} />
				<TitleMedium class={ "title-medium" } content={ "To jest mój tytuł średni Title Medium"} />
				<TitleSmall  />

				<Info content={ InfoPanel } />
			</main>
		);
	}
}

export default Dashboard;