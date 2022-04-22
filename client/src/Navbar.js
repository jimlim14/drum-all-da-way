import React from 'react';
import './navbar.css';
import logo from './images/drildrum.png';
import './navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({css}) {
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
						to={'/instructors'}
						className={`navbar-right-link ${css?.disable}`}
					>
						<p>Instructors</p>
					</Link>
				</div>
				<div>
					<Link to='/about' className={`navbar-right-link ${css?.disable}`}>
						<p>About</p>
					</Link>
				</div>
				<div>
					<Link to='/book' className={`navbar-right-link ${css?.disable}`}>
						<p>Book</p>
					</Link>
				</div>
			</div>
		</section>
	);
}
