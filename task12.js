Array.prototype.duplicate = function(){
    return [...this]
}

let a = [1,2,3]
let b = a.duplicate()
console.log(b)

