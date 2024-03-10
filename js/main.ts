let inputFields: HTMLCollectionOf<Element> = document.getElementsByClassName('inputField');
let dataOutput: HTMLCollectionOf<Element> = document.getElementsByClassName('dataOutput');
let resultButton: HTMLCollectionOf<Element> = document.getElementsByClassName('button');
let currentDate: any = Date();
let dateToArray = currentDate.split(' ');
console.log(dateToArray.splice(1,3))

const ClickButton = (): void => {
  console.log(resultButton)
}

resultButton[0].addEventListener('click', ClickButton)