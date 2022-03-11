// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

// Variables
const links = document.querySelector('.links');
const navToggle = document.querySelector('.nav-toggle');

// Événements
navToggle.addEventListener('click', () => {
	// if (links.classList.contains('show-links')){
	// 	links.classList.remove('show-links');
	// 	navToggle.classList.remove('nav-open');
	// } else {
	// 	links.classList.add('show-links');
	// 	navToggle.classList.add('nav-open');
	// }
	links.classList.toggle('show-links');
	navToggle.classList.toggle('nav-open');
});