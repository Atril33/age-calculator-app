var inputFields = document.querySelectorAll('.inputField');
var dataOutput = document.getElementsByClassName('dataOutput');
var resultButton = document.getElementsByClassName('button');
var currentDate = Date();
var dateToArray = currentDate.split(' ');
var finalDate = dateToArray.splice(1, 3);
var years;
var months;
var days;
finalDate[0] = finalDate[0].toLowerCase();
finalDate[1] = Number(finalDate[1]);
if (finalDate[0] == 'jan')
    finalDate[0] = 1;
if (finalDate[0] == 'feb')
    finalDate[0] = 2;
if (finalDate[0] == 'mar')
    finalDate[0] = 3;
if (finalDate[0] == 'apr')
    finalDate[0] = 4;
if (finalDate[0] == 'may')
    finalDate[0] = 5;
if (finalDate[0] == 'jun')
    finalDate[0] = 6;
if (finalDate[0] == 'jul')
    finalDate[0] = 7;
if (finalDate[0] == 'aug')
    finalDate[0] = 8;
if (finalDate[0] == 'sep')
    finalDate[0] = 9;
if (finalDate[0] == 'oct')
    finalDate[0] = 10;
if (finalDate[0] == 'nov')
    finalDate[0] = 11;
if (finalDate[0] == 'dec')
    finalDate[0] = 12;
var yearsDisplay;
var monthsDisplay;
var daysDisplay;
var ageCalculation = function () {
    days = inputFields[0].value;
    months = inputFields[1].value;
    years = inputFields[2].value;
    if (finalDate[0] < months) {
        yearsDisplay = (finalDate[2] - years) - 1;
        console.log(yearsDisplay);
    }
    if (finalDate[0] > months) {
        yearsDisplay = finalDate[2] - years;
    }
    if (finalDate[0] == months && finalDate[1] >= days) {
        yearsDisplay = finalDate[2] - years;
    }
    if (finalDate[1] <= days) {
        yearsDisplay = (finalDate[2] - years) - 1;
        console.log(yearsDisplay);
    }
};
var clickButton = function () {
    ageCalculation();
};
resultButton[0].addEventListener('click', clickButton);
