function handleGetStarted() {
  return document
    .getElementById('footer')
    .scrollIntoView({ behavior: 'smooth', block: 'center' });
}

/* do something when a date is selected */
  function handleDateSelect(selectInfo, uuidv4, appointment, lastEvent, setLastEvent) {
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

module.exports = {handleGetStarted, handleDateSelect};