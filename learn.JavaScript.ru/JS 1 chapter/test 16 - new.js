for (var n = 0; n <= 100; n++) {
	var output ="";
	if (n % 3 == 0) {
		output = "fizz";
	}
	if (n % 5 == 0) {
		output = "bizz";
	}
	console.log (output || n);
}