import React from 'react';
import FullCalendar, { formatDate } from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

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
	function handleDateSelect(selectInfo) {
		const title = prompt('Please enter a new title for your event');
		const calendarApi = selectInfo.view.calendar;

		console.log(selectInfo.view.calendar.addEvent);
		calendarApi.unselect();

		if (title) {
			const fullTitle = `${title}      5pm-6pm`;
			calendarApi.addEvent({
				title: fullTitle,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	}

	function handleDateClick(arg) {
		console.log(arg);
	}

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
		<>
			<img
				src='https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nickoshiro.com%2F&psig=AOvVaw2Mg39bSnmC4EX21XNmd5Za&ust=1650562246352000&source=images&cd=vfe&ved=0CAwQjRxqFwoTCLD7i9mVo_cCFQAAAAAdAAAAABAJ'
				alt=''
			/>
			<div className='calendar'>
				<FullCalendar
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
				/>
			</div>
		</>
	);
}

export default App;
