import React from 'react';
import './instructor.css';

export default function Instructor({
	image,
	name,
	experience,
	description,
	quote,
	cost,
	category,
}) {
	return (
		<div className='instructor'>
			<img className='instructor-img' src={image} alt='' />
			<div className='instructor-details'>
				<div className='instructor-header'>
					<h1 className='instructor-name'>{name} </h1>
					<h3 className='instructor-quote'>"{quote}"</h3>
				</div>
				<h2 className='instructor-experience'>
					teaching experience: {experience}
				</h2>
				<p className='instructor-description'>{description}</p>
			</div>
		</div>
	);
}
