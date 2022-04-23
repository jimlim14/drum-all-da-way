import React from 'react';
import Navbar from './Navbar';
import './about.css';

import instagramLogo from './images/instagram.png';
import facebookLogo from './images/facebook.png';

export default function About() {
	return (
		<div className='about-wrapper'>
			<Navbar />
			<section id='about'>
				<h1 className='about-header'>
					We are <span className='about-header-span'>DrilDrum</span>
				</h1>
				<p className='about-description'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
					minim veniam, quis nostrud exercitation ullamco laboris nisi ut
					aliquip ex ea commodo consequat. Duis aute irure dolor in
					reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
					pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
					culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<div className='about-logo-div'>
					<img className='instagram-logo' src={instagramLogo} alt='' />
					<img className='instagram-logo' src={facebookLogo} alt='' />
				</div>
			</section>
		</div>
	);
}
