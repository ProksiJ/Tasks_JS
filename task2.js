const words = ['some', 'thing', 'is', 'here', 'in', 'array']
const allowedWords = ['some', 'is']
console.log(words.filter(word => allowedWords.includes(word)))