"use strict";

var salaries = {
   "Вася" : 100, 
   "Петя" : 200, 
   "Даша" : 300 
};

var sumMoney = 0;

for ( var key in salaries) {
    sumMoney += salaries[key];
}
alert ( sumMoney );