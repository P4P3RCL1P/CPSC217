"use strict";

var eventDates = ["November 01, 2019 12:00:00", "November 01, 2019 19:00:00", "November 02, 2019 08:30:00", 
"November 02, 2019 13:00:00", "November 02, 2019 13:00:00", "November 02, 2019 17:00:00", "November 02, 2019 18:00:00",
"November 04, 2019 14:00:00", "November 05, 2019 13:30:00", "November 06, 2019 13:00:00", "November 07, 2019 10:00:00",
"November 07, 2019 12:30:00", "November 08, 2019 19:00:00"];

var eventDescriptions = ["SRU Field Hockey Vs Shippensburg University", "SRU Volleyball Vs Indiana University (PA)",
"Open House", "SRU Football Vs California University (PA)", "SRU Women's Soccer Vs Edinboro University", "Atomic Wing Challenge",
"Chad Williamson Memorial Scholarship Competition", "Voice Area Song Session and Masterclass", "Payroll and Student Employment Trainings",
"SRU Men's Soccer at Univ. Of Pitt-Johnstown", "Graduation Celebration /Guest Ticket Distribution", "Tesol Graduate Program Info Session",
"SRU Women's Volleyball At Seton Hill University"];

var eventLocations = [ "Slippery Rock, PA - Mihalik-Thompson Stadium", "Slippery Rock, PA / Morrow Field House", 
"Robert M. Smith Student Center", "Slippery Rock, PA/Mihalik-Thompson Stadium", "Slippery Rock, PA / James Egli Field",
"Quaker Steak and Lube","Slippery Rock, PA - Mihalik-Thompson Stadium", "Swope Music Building - Recital Hall", "Swope Music Building - Recital Hall", "Johnstown, PA",
"Smith Student Center Ballroom (3rd floor)", "Spotts World Culture Bldg, Room 219", "Greensburg, PA"];
var thisDay = new Date("November 1, 2019");
var eventTable = "<table> <caption> Slippery Rock University Events </caption> <tr> <th>Date</th> <th>Event</th> <th>Location</th> </tr>";
var endDate = thisDay.getDay() + 14;
for (var i=0; i<=eventDates.length; i++){
    var eventDate= new Date((eventDates[i]));
    var eventDay = eventDate.toDateString();
    var eventTime = eventDate.toLocaleTimeString();
    if ((thisDay <= eventDate) && (eventDate<=endDate)){
        eventTable += "<tr> <td>"+ eventDay + "@" + eventTime + "</td> <td>" + eventDescriptions[i] + "</td> <td>" + eventLocations[i] +"</td>"
    }
}
eventTable += "</table>";
document.getElementById('eventList').innerHTML+= eventTable;

/*Digital Clock*/

function displayTime(){
    var currentTime = new Date();
    document.getElementById('clock').innerHTML=currentTime.toString();
}
setInterval("displayTime()",1000);