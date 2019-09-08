
function myFunction() {
    var x = document.getElementById("mynav");
    if (x.className === "nav-collaps") {
      x.className = "nav-list";
    } 
    else {
      x.className = "nav-collaps";
    }
  }




function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(Date.parse(new Date()) + 91 * 24 * 60 * 60 * 1000);
initializeClock('clockdiv', deadline);




function initMap() {
var uluru = {lat: 23.755796, lng: 90.376635};
var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 17, center: uluru});
var marker = new google.maps.Marker({position: uluru, map: map});
}
