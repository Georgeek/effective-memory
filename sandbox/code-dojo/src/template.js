function greet (name) {
	 console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill');

function createEmail (to, from, subject, message) {
	 // body...  
	 console.log(`
		To: ${to}
		From: ${from}
		Subject: ${subject}
		Message: ${message}
	 	`);
}

createEmail('John@mail.com', 'jane@mail.com', 'hello', 'how are you doing');

function add (x, y) {
	console.log(`${x} + ${y} = ${parseInt(x) + parseInt(y)}   `);
	// parseInt позволяет складывать строки переводя их в числа
	// 5 + 7 = 57, но с parseInt = 12
}

add('5', '7');

let name = 'Bill';
console.log(upperName `Hello ${name}` );

function upperName (literals, value) {
	 return literals[0] + value.toUpperCase();
}