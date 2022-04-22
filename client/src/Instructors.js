import React, { useState, useEffect } from 'react';
//import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Instructor from './Instructor';

export default function Instructors() {
	const [instructors, setInstructors] = useState([]);

	useEffect(() => {
		fetch('http://127.0.0.1:3001/instructors')
			.then((res) => res.json())
			.then((instructors) => {
				setInstructors(instructors);
			});
	}, []);

	return (
		<>
			<Navbar />
			{instructors.map((instructor) => (
				<Instructor
					key={instructor._id}
					name={instructor.name}
					experience={instructor.experience}
					description={instructor.description}
					quote={instructor.quote}
					cost={instructor.cost}
					category={instructor.category}
				/>
			))}
		</>
	);
}
