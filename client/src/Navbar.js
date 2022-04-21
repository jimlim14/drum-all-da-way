import React from 'react';
import './navbar.css';
import logo from './images/drildrum.png';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({css, instructors }) {
	return (
		<section id='navbar'>
			<div className='navbar-left'>
				<Link to='/' className={css?.disable}>
					<img src={logo} className='logo' alt='asdf' />
				</Link>
			</div>

			<div className='navbar-right'>
				<div>
					<Link
						to='/instructors'
						state={{from: "Navbar"}}
						className={`navbar-right-link ${css?.disable}`}
					>
						<p>Instructors</p>
					</Link>
				</div>
				<div>
					<Link to='/about' className={`navbar-right-link ${css?.disable}`}>
						<p>about</p>
					</Link>
				</div>
				<div>
					<Link to='' className={`navbar-right-link ${css?.disable}`}>
						<p>events</p>
					</Link>
				</div>
			</div>
		</section>
	);
}
