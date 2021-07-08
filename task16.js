function sum(a) {
    let sum = a;
  
    function func(b = 0) {
        sum += b;
        return func;
    }
  
    func.toString = function() {
      return sum;
    };
  
    return func;
  }

console.log(sum(1)(2)(3)()); //6
console.log(sum(1)(2)(3)(4) + 1); //11
console.log(sum(1)(2)(3)(4)(5) + 1); //16