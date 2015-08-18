'use strict';

function run(n) {
	var arr = [-1, 9, 2, 5, 2, 7, 1],
		i = 0,
		sum = arr.reduce(function (a, b) { return a+b; }),
		leftsum = 0;

	for (;i < arr.length; i++) {
		sum -= arr[i];
		if (leftsum == sum)
			return i;
		leftsum += arr[i];
	}
	
	return -1;
};
