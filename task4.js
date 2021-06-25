const string = 'a,b,c,d,f'
let newString = ""
let array = string.split(",")

for(let i = 0; i < array.length; i++){
       newString += array[i] + i + " "
    }
console.log(newString)