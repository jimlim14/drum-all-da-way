import React from 'react';
import './middleBody.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MiddleBody() {
	return (
		<section id='middle-body'>
		
			<div
				id='carouselExampleIndicators'
				class='carousel slide'
				data-ride='carousel'
			>
				<ol class='carousel-indicators'>
					<li
						data-target='#carouselExampleIndicators'
						data-slide-to='0'
						class='active'
					></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='1'></li>
					<li data-target='#carouselExampleIndicators' data-slide-to='2'></li>
				</ol>
				<div class='carousel-inner'>
					<div class='carousel-item active'>
            hello
						{/* <h4 className='middle-body-h3'>
							<em>
								"DrilDrum is the real deal folks - a nice booking platform to
								find the best instructros. aef fawef awef awef awef"
							</em>
						</h4>
						<p className='middle-body-p'>
							Omar Zubaidi - Dark Mode 101 instructor
						</p> */}
					</div>
					<div class='carousel-item'>
						<h4 className='middle-body-h3'>
							<em>
								"DrilDrum is the real deal folks - a nice booking platform to
								find the best instructros. aef fawef awef awef awef"
							</em>
						</h4>
						<p className='middle-body-p'>
							Omar Zubaidi - Dark Mode 101 instructor
						</p>
					</div>
					<div class='carousel-item'>
						<h4 className='middle-body-h3'>
							<em>
								"DrilDrum is the real deal folks - a nice booking platform to
								find the best instructros. aef fawef awef awef awef"
							</em>
						</h4>
						<p className='middle-body-p'>
							Omar Zubaidi - Dark Mode 101 instructor
						</p>
					</div>
				</div>
				<a
					class='carousel-control-prev'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='prev'
				>
					<span class='carousel-control-prev-icon' aria-hidden='true'></span>
					<span class='sr-only'>Previous</span>
				</a>
				<a
					class='carousel-control-next'
					href='#carouselExampleIndicators'
					role='button'
					data-slide='next'
				>
					<span class='carousel-control-next-icon' aria-hidden='true'></span>
					<span class='sr-only'>Next</span>
				</a>
			</div>
			{/* <button onClick={() => plusDivs(+1)}>
				<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 512'>
					<path d='M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z' />
				</svg>
			</button>
			<div className='middle-body-div'>
				<div className='middle-body-text'>
					<h3 className='middle-body-h3'>
						<em>
							"DrilDrum is the real deal folks - a nice booking platform to find
							the best instructros."
						</em>
					</h3>
					<p className='middle-body-p'>
						Omar Zubaidi - Dark Mode 101 instructor
					</p>
				</div>
				<div className='middle-body-text'>
					<h3 className='middle-body-h3'>
						<em>
							"DrilDrum is the real deal folks - a nice booking platform to find
							the best instructros. aef fawef awef awef awef"
						</em>
					</h3>
					<p className='middle-body-p'>
						Omar Zubaidi - Dark Mode 101 instructor
					</p>
				</div>
				<div className='middle-body-text'>
					<h3 className='middle-body-h3'>
						<em>
							"DrilDrum is the real deal folks - a nice booking platform to find
							the best instructros. aef fawef awef awef awef"
						</em>
					</h3>
					<p className='middle-body-p'>
						Omar Zubaidi - Dark Mode 101 instructor
					</p>
				</div>
				<div className='middle-body-text'>
					<h3 className='middle-body-h3'>
						<em>
							"DrilDrum is the real deal folks - a nice booking platform to find
							the best instructros. aef fawef awef awef awef"
						</em>
					</h3>
					<p className='middle-body-p'>
						Omar Zubaidi - Dark Mode 101 instructor
					</p>
				</div>
			</div>
			<button onClick={() => plusDivs(-1)}></button> */}

			{/* <p className='middle-body-p'>;sdkfj zsdlkfj zdslfk j</p> */}
		</section>
	);
}
