import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './book.css';

import FullCalendar from '@fullcalendar/react'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // needed for dayClick

import { v4 as uuidv4 } from 'uuid'; // to create unique id for every appointment made.

export default function Book() {
	let selectable = false; // false so that date cannot be selected without typing in name and choosing instructor

	/* use to set fullcalendar initial selectable date */
	const date = new Date();
	date.setDate(date.getDate() + 1);

	/* use for only onChange */
	const [appointment, setAppointment] = useState({
		name: '',
		start: '',
		instructor: '',
		id: '',
	});

	const [temporary, setTemporary] = useState({});

	const [removeEvent, setRemoveEvent] = useState(null); //use to score information about clickInfo from handleEventClick callback argument.
	const [toggle, setToggle] = useState(false); //use to toggle css click-path/invisibility...

	/* use to fetch INSTRUCTORS and APPOINTMENTS from server */
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
		setToggle(true);
		setRemoveEvent(clickInfo);

		const { id, title, startStr } = clickInfo.event;
		setTemporary({
			// name: title.split('-')[0],
			// instructor: title.split('-')[1],
			title: title,
			start: startStr,
			id: id,
		});
	}

	function handleDelete() {
		setToggle(false);
		removeFunc(removeEvent)
			.then((deletedAppointment) => {
				console.log('deleted');
				setAppointments((prevAppointment) => {
					const filteredAppointments = prevAppointment.filter((appointment) => {
						return appointment.id !== deletedAppointment.id;
					});
					return [...filteredAppointments];
				});
			})
			.catch((err) => console.log(err));
	}

	/* access info about the added event */
	function eventAdd(info) {
		setAppointment((prev) => {
			return {
				...prev,
				id: info.event.id,
			};
		});
	}

	/* do something after user click button to do onSubmit on the form */
	function handleSubmit(e) {
		// e.preventDefault();
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
				id: appointment.id,
				title: `${appointment.name} - ${appointment.instructor}`,
				start: appointment.start,
				backgroundColor: '#FFFFFF',
				textColor: '#000000',
			};
		});
		return arr;
	}

	function removeFunc(clickInfo) {
		for (let appointment of appointments) {
			if (clickInfo.event.id === appointment.id) {
				return fetch('http://127.0.0.1:3001/appointments', {
					method: 'DELETE',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(appointment),
				})
					.then((res) => res.json())
					.then((deletedAppointment) => deletedAppointment);
			}
		}
	}

	function cancelFunc() {
		setToggle(false);
	}

	if (appointment.name && appointment.instructor) {
		selectable = true;
	}

	return !instructors.length ? (
		<h1>Loading...</h1>
	) : (
		<section id='book'>
			<Navbar className={temporary.id ? 'unselectable opacity' : ''} />
			<div
				className={
					toggle ? 'full-calendar opacity unselectable' : 'full-calendar'
				}
			>
				<form className='form-div' onSubmit={handleSubmit}>
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
							<option key={instructor._id} value={instructor.name}>
								{instructor.name}
							</option>
						))}
					</select>
					<button className={selectable ? 'visible' : 'invisible'}>Book</button>
				</form>
				{appointment.name && appointment.instructor ? (
					<h1 className='message'>Select your date by simply clicking it.</h1>
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
					selectConstraint='businessHours' // not selectable outside business hours
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
					height={650}
					dayMaxEvents={true}
					editable={true}
					selectable={selectable} // make it so that you can 'select' it and change color
					select={handleDateSelect}
					eventClick={handleEventClick}
					eventAdd={eventAdd} // before i press book, this cb will be triggered
					// eventBackgroundColor={'#F'} // change event color
					// eventBorderColor={'#0b76db'}
					// eventTextColor={'#000000'}
					dateClick={selectable ? handleDateClick : ''} // i initially installed on root directory, i then installed inside 'cd src' and it worked now.
					events={
						appointment.instructor
							? [...events(appointment.instructor), ...myAppointment()]
							: myAppointment()
						// ? new Map ([...events(appointment.instructor), [...myAppointment()]])
						// : new Map ([...myAppointment()])
					}
				/>
				{console.log('my appointments: ', myAppointment())}
			</div>
			<div className={toggle ? 'click-path' : 'invisible'}>
				<h1 className='click-path-message'>
					Do you want to delete this appointment?
				</h1>
				{temporary.id ? (
					<p className='delete-details'>
						{temporary.title} on {temporary.start.slice(0, 10)} at{' '}
						{new Date(temporary.start).getHours()}:00 o&apos;clock
					</p>
				) : (
					<></>
				)}
				<button className='delete-btn' onClick={() => handleDelete()}>
					remove
				</button>
				<button className='cancel-btn' onClick={cancelFunc}>
					X
				</button>
			</div>
		</section>
	);
}
