var inputFields = document.getElementsByClassName('inputField');
var dataOutput = document.getElementsByClassName('dataOutput');
var resultButton = document.getElementsByClassName('button');
var currentDate = Date();
var dateToArray = currentDate.split(' ');
var finalDate = dateToArray.splice(1, 3);
var ClickButton = function () {
    console.log(resultButton);
};
resultButton[0].addEventListener('click', ClickButton);
