const words = ['some', 'thing', 'is', 'here', 'in', 'array']
const allowedWord = 'herethingarray'
let newWords = []

for(let i = 0; i<words.length; i++){
    if(!allowedWord.includes(words[i])){
        newWords.push(words[i])
    }
}

newWords.forEach(element => {
    console.log(element)
});