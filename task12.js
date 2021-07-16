//неуверена как правильно это можно сделать 
Array.prototype.duplicate = function(){
    return JSON.parse(JSON.stringify(this))
}

let a = [1,2,3]
let b = a.duplicate()
console.log(b)

