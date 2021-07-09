const numbers = 12345
let arrayOfNum = numbers.toString().split("")
//нужно вывести массив строк из чисел в numbers или индексов этих цифр?
console.log(numbers.toString().split("").reverse().filter(number => number.toString()))
console.log(arrayOfNum.map((number)=>{return arrayOfNum.indexOf(number).toString()}).reverse())