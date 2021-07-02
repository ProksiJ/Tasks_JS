function union(arr1, arr2){
    /*let unionArray = []
    arr1 = arr1.concat(arr2)
    arr1.forEach(element => {
        if(!unionArray.includes(element)) unionArray.push(element)
    })
    return unionArray*/
    return new Set(arr1.concat(arr2)) 
}

function intersection(arr1,arr2){
    let intersectionArray = []
    arr1.forEach(element => {
        if(arr2.includes(element)) intersectionArray.push(element)
    })
    return intersectionArray
}

function difference(arr1,arr2){
    let differenceArray = []
    arr1.forEach(element => {
        if(!arr2.includes(element) && !differenceArray.includes(element)) differenceArray.push(element)
    })
    return differenceArray
}

console.log(union([4,5,7,2,1,5],[1,2,3,7,9]))
console.log(intersection([1,2,3], [4,3,2]))
console.log(difference([1,2,3,7,9],[4,5,7,2,1,5]))
console.log(difference([4,5,7,2,1,5], [1,2,3,7,9])) 