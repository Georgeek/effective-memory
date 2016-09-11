var i = 0; c = 0;
while (i < 10) {
	if (i == 3 || i == 6) {
		alert(i);
		c++;
	}
	if (c == 2) break;
	i++;
}

for (var i = 0; i < 10; i++) {
	if (i == 3 || i == 6) break;
} alert(i);

var i = 0; c = 0;
while (i < 10) {
	if (i == 3 || i == 6) {
		c++;
	}
	if (c == 2) break;
	i++;
} alert (i,c);