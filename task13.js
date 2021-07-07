function transform(string){

    function write_next(dict, k=0) {
        if (k < array.length) {
            dict[array[k]] = write_next({}, k + 1)
            return dict
        }
        return null
    }

    let array = string.split('.')
    let dict = {}
    return write_next(dict)
    
}


let string = 'a.b.c.d'
console.log(transform(string))