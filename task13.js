let string = 'a.b.c.d'
let transform = () => string.split(".").reduceRight((previousValue, currentValue) => {
    let obj = {}
    obj[currentValue] = previousValue
    return obj
}, null)

console.log(transform()) ;