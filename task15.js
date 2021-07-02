function anagrams(input){
    let temp = [], anagrams = [], array = [...input] 
    array.forEach(element => {
        let word = element.split('').sort().join('');
        temp = array.filter(function (e) {
                return e.split('').sort().join('') === word;
            }) 
            anagrams.push(temp)
    });
    for(let i = 0; i < anagrams.length; i++){
        anagrams[i] = String(anagrams[i])
    }

    let set = Array.from(new Set(anagrams))
    for(let i = 0; i < set.length; i++){
        set[i] = set[i].split(",")
    };

    return set
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
