const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
var foxImage = document.querySelector('img');

foxImage.onclick = sayOuch;
