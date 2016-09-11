var username = prompt('Введите имя пользователя','');
if (username == 'Админ') {
	var password = prompt('Пароль?','');
		if (password == "Черный Властелин") {
			alert('Добро пожаловать!')
		} else if (password == null) { //если нажимает ESC или отмена
			alert('Вход отменен');
		} else alert('Пароль неверен'); //неверный пароль
}
	else if (username == null) { //если нажимает ESC или отмена
		alert('Вход отменен');
	} else alert('Я вас не знаю'); //неверный логин