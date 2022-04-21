import React, {useState, useEffect} from 'react';
// import FullCalendar, { formatDate } from '@fullcalendar/react'; // must go before plugins
// import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
// import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick
import './app.css';

import Navbar from './Navbar';
import UpperBody from './UpperBody';
import MiddleBody from './MiddleBody';
import Footer from './Footer';

/* --- CAN ACCESS SOME FORMATTING DIRECTLY FROM FULLCALENDAR INSTEAD OF INSTALLING OTHER PACKAGES --- */
/*
import { formatDate } from '@fullcalendar/react';

let str = formatDate(new Date(), {
	month: 'long',
	year: 'numeric',
	day: 'numeric',
});

//April 20, 2022
console.log(str);
*/

function App() {
	const [instructors, setInstructors] = useState(null);
	useEffect(() => {
		fetch('http://127.0.0.1:3001/instructors')
			.then(res => res.json())
			.then(instructors => {
				setInstructors(instructors);
			});
	}, []);
	/* set homepage opacity to 0.2 */
	// const [css, setCss] = React.useState({
	// 	opacity: '',
	// 	disable: ''
	// });

	/* change opacity function passing down to child */
	// function changeOpacity () {
	// 	setCss(prev => {
	// 		return {
	// 			...prev,
	// 			opacity: 'opacity',
	// 			disable: 'disable'
	// 		}
	// 	});
	// }

	// function handleDateSelect(selectInfo) {
	// 	const title = prompt('Please enter a new title for your event');
	// 	const calendarApi = selectInfo.view.calendar;

	// 	console.log(selectInfo.view.calendar.addEvent);
	// 	calendarApi.unselect();

	// 	if (title) {
	// 		const fullTitle = `${title}      5pm-6pm`;
	// 		calendarApi.addEvent({
	// 			title: fullTitle,
	// 			start: selectInfo.startStr,
	// 			end: selectInfo.endStr,
	// 			allDay: selectInfo.allDay,
	// 		});
	// 	}
	// }

	// function handleDateClick(arg) {
	// 	console.log(arg);
	// }

	/*function renderEventContent(eventInfo) {
		console.log(eventInfo);
		return (
			<>
				<b>{eventInfo.timeText}</b>
				<i>{eventInfo.event.title}</i>
			</>
		);
	}*/

	return (
		<section>
			<Navbar instructors={instructors}/>
			<UpperBody />
			<MiddleBody />
			<Footer />


			<div className='calendar'>
				{/* <FullCalendar
					plugins={[dayGridPlugin, interactionPlugin]}
					initialView='dayGridMonth' // 'dayGridWeek' another example
					//weekends={false} //take out weekends (only monday - friday)
					//eventContent={renderEventContent}

					editable={true}
					selectable={true} // make it so that you can 'select' it and change color
					select={handleDateSelect}
					dateClick={handleDateClick} // i initially installed on root directory, i then installed inside 'cd src' and it worked now.
					events={[
						{ title: 'me birthday', date: '2022-04-14' },
						{ title: 'jie jie birthday', date: '2022-04-18' },
					]}
				/> */}
			</div>
		</section>
	);
}

export default App;
