const objects = [{a: 3}, {a: 5, b: 5}, {c: 7, b: 1},  {a: 0}]
let newObjects = []

for(let i = 0; i<objects.length; i++){
    if(objects[i].a > 1 || objects[i].b > 5){
        newObjects.push(objects[i])
    }
}

newObjects.forEach(element => {
    console.log(element)
});