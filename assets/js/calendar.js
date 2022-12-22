document.addEventListener("DOMContentLoaded", () => {
  const calendarEl = document.getElementById("calendar");
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
    googleCalendarApiKey: "AIzaSyBn_2Tftcitj-K_3GNlucxZ6owm2NFgQYk",
    events: {
      googleCalendarId: "52m29ie91l9d3k0cfbmthu7e4o@group.calendar.google.com",
      className: ["evento"],
      color: "red",
    },
    locale: "es",
    height: "500px",
  });

  calendar.render();
});
