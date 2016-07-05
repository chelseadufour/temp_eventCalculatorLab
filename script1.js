var temp;
temp=prompt("Enter temperature")

var event;
event=prompt("Enter event")

var casual = "comfy";
var semi = "polo";
var formal = "suit";

event=formal;

if(temp < 54 && event === true) {
	document.write("Attire: " + event + " and a coat");
} else if (temp <= 70) {
	document.write("Attire: " + event + " and a jacket");
} else if (temp > 70) {
	document.write("Attire: " + event + " and no jacket");
} else {
	console.log("nothing")
}