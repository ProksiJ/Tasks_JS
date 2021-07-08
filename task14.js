function union(arr1, arr2){
    return new Set([...arr1, ...arr2]) 
}

function intersection(arr1,arr2){
    return new Set (arr1.filter((element) =>arr2.includes(element)))
}

function difference(arr1,arr2){
    return new Set(arr1.filter((element) => !arr2.includes(element)))
}

console.log(union([4,5,7,2,1,5],[1,2,3,7,9]))
console.log(intersection([1,2,3], [4,3,2]))
console.log(difference([1,2,3,7,9],[4,5,7,2,1,5]))
console.log(difference([4,5,7,2,1,5], [1,2,3,7,9])) 