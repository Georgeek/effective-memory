"use strict";

var salaries = {
   "Вася" : 100, 
   "Петя" : 200, 
   "Даша" : 300 
};

var maxMoney = Infinity;
var maxName = '';

for ( var name in salaries) {
    if (salaries[name] < maxMoney) {
      maxMoney = salaries[name];
      maxName = name;
    } 
}
alert ( maxName || "нет сотрудников" );