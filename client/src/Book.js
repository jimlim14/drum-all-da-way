import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './book.css';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import { v4 as uuidv4 } from 'uuid'; // to create unique id for every appointment made.

export default function Book() {
	//const [appointmentId, setAppointmentId] = useState(1);
	let selectable = false; // false so that date cannot be selected without typing in name and choosing instructor
	const date = new Date();
	date.setDate(date.getDate() + 1);

	const [appointment, setAppointment] = useState({
		// use for only onChange
		name: '',
		start: '',
		instructor: '',
		id: '',
	});

	const [instructors, setInstructors] = useState([]);
	const [appointments, setAppointments] = useState([]); // use for fetching appointments from server
	useEffect(() => {
		fetch('http://127.0.0.1:3001/instructors')
			.then((res) => res.json())
			.then((instructors) => {
				setInstructors(instructors);
			});
		fetch('http://127.0.0.1:3001/appointments')
			.then((res) => res.json())
			.then((appointments) => {
				setAppointments(appointments);
			});
	}, []);

	/* do something when a date is selected */
	function handleDateSelect(selectInfo) {
		console.log('handleDateSelect clicked');
		//console.log(selectInfo.view.calendar.getCurrentData());
		const title = `${appointment.name} - ${appointment.instructor}`;
		const calendarApi = selectInfo.view.calendar;
		calendarApi.unselect();

		if (appointment.name && appointment.instructor) {
			calendarApi.addEvent({
				id: uuidv4(),
				title: title,
				start: selectInfo.startStr,
				end: selectInfo.endStr,
				allDay: selectInfo.allDay,
			});
		}
		// setAppointmentId(prev => {
		// 	return prev++;
		// })
	}

	function handleDateClick(arg) {
		console.log('handleDateClick clicked');
		const date = new Date(arg.dateStr);
		setAppointment((prev) => ({
			...prev,
			start: date,
		}));
		selectable = false;
	}

	/* do something when event is clicked */
	function handleEventClick(clickInfo) {
		console.log('event clicked: ', clickInfo);
		console.log(clickInfo.event.id);
		//appointments.forEach(appointment => console.log(appointment.id));
		appointments.forEach((appointment) => {
			if (clickInfo.event._instance.defId === appointment.id) {
				fetch('http://127.0.0.1:3001/appointments', {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(appointment),
				})
					.then((res) => res.json())
					.then((deletedAppointment) => {
						setAppointments((prevAppointment) => {
							const filteredAppointments = prevAppointment.filter(
								(appointment) => {
									return appointment.id !== deletedAppointment.id;
								}
							);
							return [...filteredAppointments];
						});
					});
			}
		});
		//console.log(appointment.start);
		//console.log(clickInfo.event._instance.instanceId);

		// clickInfo.event.remove();
	}

	/* access info about the added event */
	function eventAdd(info) {
		//info.event.id = 
		console.log(info.event.id);
		console.log('event add: ', info);
		setAppointment((prev) => {
			return {
				...prev,
				id: info.event.id,
			};
		});
	}

	/* do something after user click button to do onSubmit on the form */
	function handleSubmit(e) {
		e.preventDefault();

		if (appointment.start) {
			fetch('http://127.0.0.1:3001/appointments', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(appointment),
			})
				.then((res) => res.json())
				.then((data) => {
					setAppointments((prev) => {
						return [...prev, data];
					});
				});
			e.target.name.value = '';
			e.target.instructor.value = '';
			setAppointment({
				name: '',
				start: '',
				instructor: '',
			});
		}
		//console.log(appointments);
	}

	function handleChange(e) {
		const { name, value } = e.target;
		setAppointment((prev) => ({
			...prev,
			[name]: value,
		}));
	}

	/* show instructors' appointments */
	function events(instructorName) {
		const selectedInstructor = instructors.filter(
			(instructor) => instructor.name === instructorName
		);
		const arr = selectedInstructor[0].appointment.map((appointment) => {
			return {
				title: `${appointment.name} - ${appointment.instructor}`,
				start: appointment.start,
			};
		});
		return arr;
	}

	/* show my appointments */
	function myAppointment() {
		const arr = appointments.map((appointment) => {
			return {
				//id: `${appointment.id}`,
				title: `${appointment.name} - ${appointment.instructor}`,
				start: appointment.start,
				backgroundColor: '#FFFFFF',
				textColor: '#000000',
			};
		});
		//console.log(arr);
		return arr;
	}

	if (appointment.name && appointment.instructor) {
		selectable = true;
	}
	// console.log(appointment);
	//console.log(appointments);
	return !instructors.length ? (
		<h1>Loading...</h1>
	) : (
		<section id='book'>
			<Navbar />
			<div className='full-calendar'>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						placeholder='Input your name'
						onChange={handleChange}
						name='name'
						value={appointments.name}
					/>
					<select onChange={handleChange} name='instructor'>
						<option value=''>-- select instructors --</option>
						{instructors.map((instructor) => (
							<option value={instructor.name}>{instructor.name}</option>
						))}
					</select>
					<button className={selectable ? 'visible' : 'invisible'}>Book</button>
				</form>
				{appointment.name && appointment.instructor ? (
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
					allDaySlot={false}
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
					eventAdd={(info) => eventAdd(info)} // before i press book, this cb will be triggered
					// eventBackgroundColor={'#FFFFFF'} // change event color, this is red
					// eventBorderColor={'#0b76db'}
					// eventTextColor={'#000000'}
					dateClick={selectable ? handleDateClick : ''} // i initially installed on root directory, i then installed inside 'cd src' and it worked now.
					events={
						appointment.instructor
							? [...events(appointment.instructor), [...myAppointment()]]
							: myAppointment()
						// ? new Map ([...events(appointment.instructor), [...myAppointment()]])
						// : new Map ([...myAppointment()])
					}
				/>
			</div>
		</section>
	);
}
