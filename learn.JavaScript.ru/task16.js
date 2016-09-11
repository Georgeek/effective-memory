
 function pow (a, b) {
	var powA = a;
	for (var i = 1; i < b; i++) {
		powA *= a;
	} return powA; 
}

var	a = prompt('введите число','');
var b = prompt('введите степень числа', '');

if (b >= 1) {
		alert (pow (a, b));
	} else {
		alert('значение степени должно быть больше Единицы');
	}