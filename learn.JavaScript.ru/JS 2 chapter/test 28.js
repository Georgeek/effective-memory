// Напишите функцию getDecimal(num), которая возвращает десятичную часть числа:

function (num) {
    var sum = 0;
    return 
        if (num > 0) { 
            sum = num - Math.floor(num); 
        } else {
            Math.ceil(num) - num;
        }
}

alert( getDecimal(12.345) ); // 0.345
alert( getDecimal(1.2) ); // 0.2
alert( getDecimal(-1.2) ); // 0.2