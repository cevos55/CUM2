function addEvent() {
    var eventDate = document.getElementById('eventDate').value;
    var eventTitle = document.getElementById('eventTitle').value;
    var eventDescription = document.getElementById('eventDescription').value;
    var events = getEvents();
    events.push({
      date: eventDate,
      title: eventTitle,
      description: eventDescription
    });
    localStorage.setItem('events', JSON.stringify(events));
  }
  
  function sendEventToServer() {
    var events = getEvents();
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'file:///C:/Users/warren/Desktop/SiteduCum%201/accueil.html', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(events));
  }
  
  function getEvents() {
    var events = localStorage.getItem('events');
    if (events === null) {
      events = [];
    } else {
      events = JSON.parse(events);
    }
    return events;
  }