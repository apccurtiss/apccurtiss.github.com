$(document).ready(function() {
  // Instantiate calendar.
  $('#calendar').fullCalendar({
    header: {
      left: '',
      center: '',
      right: ''
    },
    columnFormat: 'ddd',
    hiddenDays: [0, 6],
    defaultDate: '2014-06-12',
    defaultView: 'agendaWeek',
    minTime: '08:00:00',
    maxTime: '19:00:00',
    height: 'auto',
    allDaySlot: false,
    editable: false,
    events: [
      {
        start: '2014-06-09T14:00:00',
        end: '2014-06-09T16:00:00',
      },
      {
        start: '2014-06-10T11:00:00',
        end: '2014-06-10T14:00:00',
      },
      {
        start: '2014-06-11T14:00:00',
        end: '2014-06-11T16:00:00',
      },
      {
        start: '2014-06-12T08:00:00',
        end: '2014-06-12T09:15:00',
      },
      {
        start: '2014-06-12T15:30:00',
        end: '2014-06-12T19:00:00',
      },
      {
        start: '2014-06-13T15:00:00',
        end: '2014-06-13T17:00:00',
      },
    ]
  });
});
