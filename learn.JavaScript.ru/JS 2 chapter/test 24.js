function fib(n) {
	return (n > 1) ? (fib(n - 1) + fib(n - 2)) : n;
}
alert ( fib(3) );
alert ( fib(7) );
