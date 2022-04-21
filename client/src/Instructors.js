import React, {useLocation} from 'react';
import Navbar from './Navbar';

export default function Instructors () {
	const location = useLocation();
	const { from } = location.state;
  return (
		<>
      <Navbar />
			<h1 style={{ color: 'white' }}>123</h1>
		</>
	);
}