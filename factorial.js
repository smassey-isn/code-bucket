function factorial(n) {
	// this tends to be a lot faster than its recursively colleague
	var t = 1;
	// always start at 1
	for (var i = 2; i <= n; ++i) {
		t = t * i;
	}
	return t;
}

factorial(4);
