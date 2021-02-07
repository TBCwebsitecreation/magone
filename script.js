const options = document.querySelectorAll('.option');

options.forEach((option) => {
	option.addEventListener('click', () => {
		removeActiveClasses();
		option.classList.add('active');
	});
});

function removeActiveClasses() {
	options.forEach((option) => {
		option.classList.remove('active');
	});
}
