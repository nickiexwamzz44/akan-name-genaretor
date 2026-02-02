// Akan name generator
document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('nameForm');
	const birthInput = document.getElementById('birthDate');
	const genderInput = document.getElementById('gender');
	const resultEl = document.getElementById('akanName');
	const resetBtn = document.getElementById('resetBtn');

	const male = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
	const female = ['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];

	form.addEventListener('submit', (ev) => {
		ev.preventDefault();
		resultEl.textContent = '';
		const dateVal = birthInput.value;
		const genderVal = genderInput.value;

		if (!dateVal) {
			resultEl.textContent = 'Please enter your birth date.';
			return;
		}
		if (!genderVal) {
			resultEl.textContent = 'Please select your gender.';
			return;
		}

		const d = new Date(dateVal + 'T00:00:00');
		if (isNaN(d.getTime())) {
			resultEl.textContent = 'Invalid date.';
			return;
		}

		const day = d.getDay(); // 0 (Sun) - 6 (Sat)
		const name = genderVal === 'male' ? male[day] : female[day];
		resultEl.textContent = name || '';
	});

	resetBtn.addEventListener('click', () => {
		form.reset();
		resultEl.textContent = '';
	});
});

