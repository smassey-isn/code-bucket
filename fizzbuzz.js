'use strict';

for (var i = 1, stdout, fizz, buzz; i <= 100; i++) {
	stdout = '';
	fizz = false;
	buzz = false;
	if (i%3 == 0) {
		fizz = true;
		stdout += 'Fizz';
	}
	if (i%5 == 0)  {
		buzz = true;
		stdout += 'Buzz';
	}
	if (!fizz && !buzz) {
		stdout += i;
	}
	console.log(stdout);
}
