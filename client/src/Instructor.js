import React from 'react';
import './instructor.css';

export default function Instructor({
	image,
	name,
	experience,
	description,
	quote,
	categories,
}) {
	return (
		<div className='instructor'>
			<img className='instructor-img' src={image} alt='' />
			<div className='instructor-details'>
				<div className='instructor-header'>
					<h1 className='instructor-name'>{name} </h1>
					<h3 className='instructor-quote'>&quot{quote}&quot</h3>
				</div>
				<div>
					<h2 className='instructor-experience'>
						teaching experience: {experience}
					</h2>
					<p className='category-p'>
						{categories.map((category) => {
							return category + '  ';
						})}
					</p>
				</div>
				<p className='instructor-description'>{description}</p>
			</div>
		</div>
	);
}
