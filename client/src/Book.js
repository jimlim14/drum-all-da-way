import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './book.css';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

export default function Book() {
	let selectable = false;

	const date = new Date();
	date.setDate(date.getDate() + 1);

	const [instructors, setInstructors] = useState([]);
	const [appointment, setAppointment] = useState({
		name: '',
		start: '',
		instructor: '',
	});

	const appointments = [];

	useEffect(() => {
		fetch('http://127.0.0.1:3001/instructors')
			.then((res) => res.json())
			.then((instructors) => {
				setInstructors(instructors);
        console.log(instructors);
			});
	}, []);

	/* do something when a date is selected */
	function handleDateSelect(selectInfo) {
		console.log(selectInfo.view.calendar.getCurrentData());
		const title = `${appointment.name} - ${appointment.instructor} at ${appointment.time}pm`;
		const calendarApi = selectInfo.view.calendar;
		calendarApi.unselect();

		if (appointment.name && appointment.instructor) {
			calendarApi.addEvent({
				title: title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
	}

	function handleDateClick(arg) {
		//console.log(arg);
    const date = new Date(arg.dateStr);
		setAppointment((prev) => ({
			...prev,
			start: date
			// time: new Date(arg.dateStr).getHours(),
		}));
		selectable = false;
	}

	/* do something when event is clicked */
	function handleEventClick(clickInfo) {
		//console.log(new Date(clickInfo.event._context.options.initialDate).getHours());
		console.log(clickInfo);
		// clickInfo.event.remove();
	}

	/* access info about the added event */
	function eventAdd(info) {
		//console.log(info);
	}

	function handleSubmit(e) {
		e.preventDefault();
		if (appointment.start) {
			appointments.push(appointment);
			e.target.name.value = '';
			e.target.instructor.value = '';
			setAppointment({
				name: '',
				start: '',
				instructor: '',
			});
		}
		console.log(appointment);
		console.log(appointments);
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setAppointment((prev) => ({
			...prev,
			[name]: value,
		}));
	}

  function events (instructorName) {
		const selectedInstructor = instructors.filter(instructor => instructor.name === instructorName);
		console.log(selectedInstructor);
    return selectedInstructor[0].appointment.map(appointment => {
      return {
        title: `${appointment.name} - ${appointment.instructor}`,
        start: appointment.start,
      }
    });

  }

	if (appointment.name && appointment.instructor) {
		selectable = true;
	}
  console.log(appointment);
	return !instructors.length ? <></> : (
		<section id='book'>
			<Navbar />
			<div className='full-calendar'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Input your name'
						onChange={handleChange}
						name='name'
						value={appointment.name}
					/>
					<select onChange={handleChange} name='instructor'>
						<option value=''>-- select instructors --</option>
						{instructors.map((instructor) => (
							<option value={instructor.name}>{instructor.name}</option>
						))}
					</select>
					<button className={selectable ? 'visible' : 'invisible'}>Book</button>
				</form>
				{appointment.name && appointment.instructor && appointment.time ? (
					<h1>Select your date by simply clicking it.</h1>
				) : (
					<></>
				)}
				<FullCalendar
					plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
					initialView='timeGridWeek' // 'dayGridWeek' another example
					initialDate={date}
					validRange={{
						start: date, //validRange -> set passed date unselectable.
					}}
					slotDuration='01:00:00' // make calendar hourly
					allDaySlot={true}
					businessHours={[
						{
							daysOfWeek: [1, 2, 3, 4, 5],
							startTime: '09:00',
							endTime: '18:00',
						},
						{
							daysOfWeek: [6],
							startTime: '08:00',
							endTime: '20:00',
						},
					]}
					height={500}
					dayMaxEvents={true}
					editable={true}
					selectable={selectable} // make it so that you can 'select' it and change color
					select={handleDateSelect}
					eventClick={handleEventClick}
					eventAdd={eventAdd}
					dateClick={selectable ? handleDateClick : ''} // i initially installed on root directory, i then installed inside 'cd src' and it worked now.
					events={appointment.instructor ? events(appointment.instructor) : ''}
				/>
			</div>
		</section>
	);
}
