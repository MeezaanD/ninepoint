document.getElementById('hamburger').addEventListener('click', function () {
	var menu = document.getElementById('navbarMenu');
	var openIcon = document.getElementById('openIcon');
	var closeIcon = document.getElementById('closeIcon');

	menu.classList.toggle('active');

	if (menu.classList.contains('active')) {
		openIcon.style.display = 'none';
		closeIcon.style.display = 'block';
	} else {
		openIcon.style.display = 'block';
		closeIcon.style.display = 'none';
	}
});
