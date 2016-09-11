/**
 * Created by madyarov_gt on 24.05.2016.
 */
'use strict';

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
    var one = parseFloat(numOne.value) || 0;
    var two = parseFloat(numTwo.value) || 0;
    addSum.innerHTML = "Сумма чисел равняется: " + (one + two);
}

var simon = document.getElementById("simon");
var bruce = document.getElementById("bruce");
var ben = document.getElementById("ben");

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
ben.addEventListener("click", picLink);

function picLink() {
    var allImages = document.querySelectorAll("img");

    for (var i = 0; i < allImages.length; i++) {
        allImages[i].className = "hide";
    }

    var picId = this.attributes["data-img"].value;
    var pic = document.getElementById(picId);
    if (pic.className === "hide") {
        pic.className = "";
    } else {
        pic.className = "hide";
    }
}

var checklist = document.getElementById("checklist"); //ищем в html по id checklist

var items = checklist.querySelectorAll("li"); // среди списка checklist ищем по li и по input
var inputs = checklist.querySelectorAll("input");

for (var i = 0; i < items.length; i++) { //у нас получается массив из списка
    items[i].addEventListener("click", editItem); // и к каждому мы применяем действие и функцмю
    inputs[i].addEventListener("blur", updateItem);
    inputs[i].addEventListener("keypress", itemKeypress);
}

function editItem() { //открываем поле редактирования и разрешаем менять
    this.className = "edit";
    var input = this.querySelector("input");
    input.focus(); //красивая рамка выделения
    input.setSelectionRange(0, input.value.length); //выделяем слово при нажатии
}

function updateItem() { //изменяем значение после клика в любом месте
    this.previousElementSibling.innerHTML = this.value;
    this.parentNode.className = "";
}

// функция меняет элемент при нажатии enter (13)
function itemKeypress(event) {
    if (event.which === 13) {
        updateItem.call(this);
    }
}

$(document).ready(function() {

    $('.panel-button').on('click', function() {

        var content = 'My new awesome content';
        var panelId = $(this).attr('data-panelId');
        $('#' + panelId).toggle(200);
        $('#' + panelId + ' .panel-body').html(content);
    });

});
