function sumTo(a) {
	if (a != 1) {
		return a + sumTo(a - 1);
	} else {
		return a;
	}
}

alert ( sumTo(10) );