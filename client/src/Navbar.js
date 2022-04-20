import React from 'react';
import './navbar.css';
import logo from './images/drildrum.png';

import { Link } from 'react-router-dom';

export default function Navbar() {
	return (
		<section id='navbar'>
			<div className='navbar-left'>
				<img src={logo} className='logo' alt='asdf' />
			</div>

			<div className='navbar-right'>
				<div>
					<Link to='' className='a'>
						<p>Instructors</p>
					</Link>
				</div>
				<div>
					<Link to='' className='a'>
						<p>about</p>
					</Link>
				</div>
				<div>
					<Link to='' className='a'>
						<p>events</p>
					</Link>
				</div>
			</div>
		</section>
	);
}
