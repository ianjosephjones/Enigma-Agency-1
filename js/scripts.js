window.addEventListener('DOMContentLoaded', (event) => {
	// Navbar shrink function
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#mainNav');
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink');
		} else {
			navbarCollapsible.classList.add('navbar-shrink');
		}
	};

	// Shrink the navbar
	navbarShrink();

	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink);

	// Activate Bootstrap scrollspy on the main nav element
	const mainNav = document.body.querySelector('#mainNav');
	if (mainNav) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#mainNav',
			offset: 74,
		});
	}

	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const responsiveNavItems = [].slice.call(
		document.querySelectorAll('#navbarResponsive .nav-link')
	);
	responsiveNavItems.map(function (responsiveNavItem) {
		responsiveNavItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			}
		});
	});
});

window.addEventListener('load', () => {
	AOS.init({
		duration: 1000,
		easing: 'ease-in-out',
		once: true,
		mirror: false,
	});
});

// Featured projects button
// var button = document.getElementById('button');

// button.onclick = function () {
// 	var div = document.getElementById('newpost');
// 	if (div.style.display !== 'none') {
// 		div.style.display = 'none';
// 	} else {
// 		div.style.display = 'block';
// 	}
// };

var isLocalhost = window.location.href.includes('localhost');
var isDevelopment = window.location.href.includes('ianjosephjones');
var isProduction = window.location.href.includes('engimaagenceync.co');

var contactUsUrl = '';
if (isLocalhost) {
	contactUsUrl = 'https://localhost:44346/api/contactus';
} else if (isDevelopment) {
	contactUsUrl = 'https://emailer20210811113143.azurewebsites.net/api/contactus';
} else if (isProduction) {
	contactUsUrl = 'https://enimgaagencyapi.azurewebsites.net/api/contactus';
}

$('#learnMorebutton').click(function () {
	$('#newpost').slideToggle();
	$('#learnMoreVideo')[0].play();
});

// Get form by Id
const form = document.getElementById('contactForm');
// When triggered create FormData object called mail
const formEvent = form.addEventListener('submit', (event) => {
	event.preventDefault();

	let mail = new FormData(form);
	// Call a func sendMail()
	sendMail(mail);
});

const sendMail = (mail) => {
	// show the user the app is doing work
	$('#signup').hide();
	$('#spinner').show();

	var requestOptions = { method: 'POST', body: mail };
	fetch(contactUsUrl, requestOptions)
		.then((response) => response.text())
		.then((result) => {
			// on succes
		})
		.catch((error) => {
			console.log('error', error);
		})
		.finally((done) => {
			// show the user the app is done working
			$('#spinner').hide();
			$('#thankYou').show();
		});
};
