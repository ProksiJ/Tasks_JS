const objects = [{a: 3}, {a: 5, b: 5}, {c: 7, b: 1},  {a: 0}]
console.log(objects.filter(object => object.a > 1 || object.b > 5))