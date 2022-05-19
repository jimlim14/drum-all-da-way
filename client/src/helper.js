function handleGetStarted() {
  return document
    .getElementById('footer')
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* do something when a date is selected */
function handleDateSelect(
  selectInfo,
  uuidv4,
  appointment,
  lastEvent,
  setLastEvent
) {
  const title = `${appointment.name} - ${appointment.instructor}`;
  const calendarApi = selectInfo.view.calendar;
  calendarApi.unselect();
  if (lastEvent) {
    lastEvent.remove();
  }
  if (appointment.name && appointment.instructor) {
    const event = calendarApi.addEvent({
      id: uuidv4(),
      title: title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay,
    });
    setLastEvent(event);
  }
}

/* do something when event is clicked */
function handleEventClick(clickInfo, setToggle, setRemoveEvent, setTemporary) {
  if (clickInfo.event.id) {
    setToggle(true);
    setRemoveEvent(clickInfo);
    const { id, title, startStr } = clickInfo.event;
    setTemporary({
      title: title,
      start: startStr,
      id: id,
    });
  }
}

/* show my appointments */
function myAppointment(appointments) {
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

/* show instructors' appointments */
function events(instructorName, instructors) {
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

module.exports = {
  handleGetStarted,
  handleDateSelect,
  handleEventClick,
  myAppointment,
  events
};
