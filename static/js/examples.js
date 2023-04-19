$(document).ready(function () {
	$("#demosMenu").change(function () {
		selected_pj = $(this).find("option:selected").attr("id")
		if (selected_pj == 'gibson') {
			window.open('https://github.com/pearlilyy/gibson', 'Pearls Gibson Guitar');
		} else if (selected_pj == 'starbucks') {
			window.open('https://pearls-starbucks.netlify.app', 'Pearls Starbucks', 'width=500, height=700');
		} else if (selected_pj == 'nintendo') {
			window.open('https://pearls-nintendo.netlify.app', 'Pearls Nintendo Mobile', 'width=500, height=700');
		} else if (selected_pj == 'coffeebean') {
			window.open('https://pearls-coffeebean.netlify.app/', 'Pearls Coffee Bean', 'width=500, height=700');
		} else if (selected_pj == 'coco') {
			window.open('https://pearls-coco.netlify.app/');
		} else {
			window.open('https://pearls-subway.netlify.app/');
		}

	});
});