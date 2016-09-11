var text1 = "Ночью ты пробрался фойе главного офиса Сбербанка. \n" +
"Куда ты решишь пойти в первую очередь? \n " +
"1) Пойти в комнату охраны. \n " + // going choice 1
"2) подойти к сейфу. \n " + // going choice 2
"3) осмотреться. \n " + 
"Type ONLY 1, 2 or 3"; // going choice 3
var choice1 = "Ты подошел к комнате охраны. Внутри спит охранник. \n" +
"Вырубить его или выкрасть карточку?";
var choice2 = "Ты спустился к сейфу. Дверь выглядит внушительной, а замок сложным. Попробуем открыть? \n" +
"1) открыть сейф \n " + // not exsist
"2) идти в комнату охраны за ключем"; // going choice 1
var choice3 = "Ты наслаждаешься тишиной и спокойствием. Стоит отметить, что офис неплохо отделали \n" +
"Помедитировали и хватит. Куда идем? \n" +
"1) Пойти и привести друзей, чтобы 'прониклись' атмосферой!. \n " + // going choice 1
"2) Уснуть"; // going choice 2


var stage1 = +prompt(text1, '').toLowerCase();

switch (stage1) {
	case 1:
		console.log("У тебя есть план и ты ему следуешь!");
		var guardChoice = +prompt(choice1, '').toLowerCase();
		if (guardChoice === 1) {
				console.log('отлично! Ключ у тебя. Ты успешно им открываешь сейф. Поздравляю!');
			} else {
				console.log('Охранник проснулся и поймал вас. В следующий раз будем бить сильнее и не по столу. Game Over');
		}
		break;
	case 2:
        var fast = prompt("Сработала сигнализация! Бежим!! Ты быстро бегаешь? (YES or NO)?").toUpperCase();
        var headStart = prompt("Как рысь бежишь?").toUpperCase();
        if(fast === 'YES' || headStart === 'YES') {
          console.log("Отличный побег! В следующий раз продумаем ограбление четенько");
        } else {
          console.log("Пойман. Жаль... повторим попытку через 20 лет");
    }
        break;
	case 3:
        var calm = prompt("тихо и спокойно. Нравится ремонт? (YES or NO)?").toUpperCase();
        var peace = prompt("Дома надо сделать такой же ремонт, согласен?").toUpperCase();
        if(calm === 'YES' && peace === 'YES') {
          console.log("надо позвать сюда друзей, пусть оценят");
        } else {
          console.log("Что-то со вкусами у тебя у тебя не так. Потом обсудим");
    }
        break;
}
/*// after stage 1
switch (choice1) {
	case 1:
		console.log("У тебя есть план и ты ему следуешь!");
		+prompt(choice1, '');
		break;
	case 2:
		console.log("У тебя есть план и ты ему следуешь!");
		+prompt(choice1, '');
		break;
	default:
		console.log('choice1 Охрана заметила вас и включила тревогу. Game Over');
		break;
}
// after stage 2
switch (choice2) {
	case 2:
		console.log("У тебя есть план и ты ему следуешь!");
		+prompt(choice1, '');
		break;
	default:
		console.log('choice2 Охрана заметила вас и включила тревогу. Game Over');
		break;
}
// after stage 3
switch (choice3) {
	case 1:
		console.log("У тебя есть план и ты ему следуешь!");
		+prompt(choice1, '');
		break;
	case 2:
		console.log("Сразу к сейфу?? Ты у мамы инженер!!");
		+prompt(choice2, '');
		break;
	default:
		console.log('choice3 Охрана заметила вас и включила тревогу. Game Over');
		break;
}*/