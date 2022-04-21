import React from 'react';
import './upperBody.css';
import upperBodyBackground from './images/upper-body-background.jpg';

export default function UpperBody() {
	return (
		<section id='upper-body'>
			{/* <div className='upper-body-background-div'>
				<img
					src={upperBodyBackground}
					className='upper-body-background-img'
					alt=''
				/>
	
			</div> */}
			<div className='upper-body-text-div'>
				<h1 className='upper-body-h1'>
					Learn to play drums no matter what levels you are in.
				</h1>
				<p className='upper-body-p'>
					Beginners, Amateurs, Professional. Follow your own pace, pick an instructor that suits you best.
				</p>
        <button className='upper-body-btn'>
          Get started
        </button>
			</div>
		</section>
	);
}
