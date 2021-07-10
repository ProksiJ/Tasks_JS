function anagrams(words) {
    const anagrams = {};
    const arr = [];

    words.forEach((word) => {
        const sortedWord = word.split('').sort().join('');

        if (anagrams[sortedWord]) {
            anagrams[sortedWord].push(word);
        } else {
            anagrams[sortedWord] = [word];
            arr.push(anagrams[sortedWord]);
        }
    });

    return arr;
}
const input = [
    'вертикаль',
    'кильватер',
    'апельсин',
    'спаниель',
    'австралопитек',
    'ватерполистка',
    'кластер',
    'сталкер',
    'стрелка'
];
console.log(anagrams(input))
