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
	fetch('', {
		method: 'post',
		body: mail,
	}).then((response) => {
		return response.json();
	});
};
