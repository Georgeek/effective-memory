function factorial (n) {
	if (n) {
		return (n * factorial(n - 1));
	} else {
		return 1;
	}
}
alert ( factorial(5) );
