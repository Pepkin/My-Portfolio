function oddOccurances(input){
    let arr = input.split(' ')
    let wordCount = {}
    let result = []
    let result2 = []
    for (const word of arr) {
        wordCount[word.toLowerCase()] = 0
    }
    Object.fromEntries(Object.entries(wordCount).sort())
    for (let word of arr) {
        word = word.toLowerCase()
        if(word in wordCount){
            wordCount[word.toLowerCase()] += 1
        }
    }
    Object.fromEntries(Object.entries(wordCount).sort())
    for (const word in wordCount) {
        if(Number(wordCount[word]) % 2 != 0){
            result.push(word)
            
        }
    }
    console.log(result.join(' '));
}
oddOccurances('Cake IS SWEET is Soft CAKE sweet Food')