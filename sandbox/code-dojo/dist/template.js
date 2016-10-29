'use strict';

var _templateObject = _taggedTemplateLiteral(['Hello ', ''], ['Hello ', '']);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function greet(name) {
	console.log(('Hello ' + name).toUpperCase());
}

greet('Bill');

function createEmail(to, from, subject, message) {
	// body...  
	console.log('\n\t\tTo: ' + to + '\n\t\tFrom: ' + from + '\n\t\tSubject: ' + subject + '\n\t\tMessage: ' + message + '\n\t \t');
}

createEmail('John@mail.com', 'jane@mail.com', 'hello', 'how are you doing');

function add(x, y) {
	console.log(x + ' + ' + y + ' = ' + (parseInt(x) + parseInt(y)) + '   ');
	// parseInt позволяет складывать строки переводя их в числа
	// 5 + 7 = 57, но с parseInt = 12
}

add('5', '7');

var name = 'Bill';
console.log(upperName(_templateObject, name));

function upperName(literals, value) {
	return literals[0] + value.toUpperCase();
}