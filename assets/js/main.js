// Mobile menu and search toggles for the site header.
(function () {
	var header = document.querySelector('.site-header');
	if (!header) return;

	function toggle(button, className) {
		var open = header.classList.toggle(className);
		button.setAttribute('aria-expanded', open ? 'true' : 'false');
		return open;
	}

	var menu = header.querySelector('.menu-toggle');
	if (menu) {
		menu.addEventListener('click', function () {
			toggle(menu, 'menu-open');
		});
	}

	var search = header.querySelector('.search-toggle');
	var close = header.querySelector('.search-close');
	var input = header.querySelector('.search-bar input[type=search]');
	if (search && input) {
		search.addEventListener('click', function () {
			if (toggle(search, 'search-open')) input.focus();
		});
	}
	if (close && search) {
		close.addEventListener('click', function () {
			toggle(search, 'search-open');
			search.focus();
		});
	}
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Escape' && header.classList.contains('search-open') && search) {
			toggle(search, 'search-open');
			search.focus();
		}
	});
})();
