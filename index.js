document.addEventListener('DOMContentLoaded', function () {
	// Smooth scrolling for navigation links
	const navLinks = document.querySelectorAll('nav ul li a');

	navLinks.forEach((link) => {
		link.addEventListener('click', function (e) {
			e.preventDefault();
			const targetId = this.getAttribute('href').substring(1);
			const targetSection = document.getElementById(targetId);
			window.scrollTo({
				top: targetSection.offsetTop,
				behavior: 'smooth'
			});
		});
	});

	// Form submission handling (replace 'submit.php' with your actual form submission URL)
	const form = document.querySelector('form');

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const formData = new FormData(this);

		// Example: Sending form data using Fetch API
		fetch('submit.php', {
			method: 'POST',
			body: formData
		})
			.then((response) => {
				if (response.ok) {
					alert('Message sent successfully!');
					form.reset();
				} else {
					alert('An error occurred. Please try again later.');
				}
			})
			.catch((error) => {
				console.error('Error:', error);
				alert('An error occurred. Please try again later.');
			});
	});
});
