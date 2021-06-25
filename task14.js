/*function union(arr1, arr2){
    /*let unionArray = []
    for(let i = 0; i<arr2.length; i++){
        arr1.push(arr2[i])
    }
    for(let i = 0; i<arr1.length; i++){
        if (!unionArray.includes(arr1[i])){
            unionArray.push(arr1[i])
        }
    }
    return new Set(arr1.concat(arr2)) 
}
    console.log(union([4,5,7,2,1,5],[1,2,3,7,9]))
*/
let ar = [1,2,3,4], arr = [1,2]
console.log(ar + arr)