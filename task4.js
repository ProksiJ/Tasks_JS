const string = 'a,b,c,d,f'
console.log(string.split(",").map((letter)=>{return letter + string.split(",").indexOf(letter)}).toString())