const words = ['some', 'thing', 'is', 'here', 'in', 'array']
const allowedWord = 'herethingarray'
console.log(words.filter(word => allowedWord.includes(word)))