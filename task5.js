const number = 12345
let array = []
let arrayInd = []
/*for(let i = 0; i < number.toString().length;i++){
    array.push((number.toString().substring(i,i+1)))
}*/
array = number.toString().split("")
array.forEach(element => {
    arrayInd.push(array.indexOf(element).toString())
});
console.log(arrayInd.reverse())