function factorialRecursively(n) {
	// 0! == 1
	if (0 == n)
		return 1;
		
	// where n = 4
	// return 4 * (4-1)
	// repeat until 0	
	return n * factorialsRecursively(n-1);
}

factorialRecursively(4);
