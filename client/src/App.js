import React from 'react';

import './app.css';

import Navbar from './Navbar';
import UpperBody from './UpperBody';
import MiddleBody from './MiddleBody';
import Footer from './Footer';

function App() {
	/* set homepage opacity to 0.2 */
	// const [css, setCss] = React.useState({
	// 	opacity: '',
	// 	disable: ''
	// });

	/* change opacity function passing down to child */
	// function changeOpacity () {
	// 	setCss(prev => {
	// 		return {
	// 			...prev,
	// 			opacity: 'opacity',
	// 			disable: 'disable'
	// 		}
	// 	});
	// }

	return (
		<section>
			<Navbar />
			<UpperBody />
			<MiddleBody />
			<Footer />

			<div className='calendar'></div>
		</section>
	);
}

export default App;
