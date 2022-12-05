function wordTracker(input){
    let wordCount = {}
    let desiredLine = input[0];
    let desiredLineToArray = desiredLine.split(' ')

    for (const word of desiredLineToArray) {
        wordCount[word] = 0
    }
    
    let holder = input.shift()
    for (const el of input) {
        if(el in wordCount){
            wordCount[el] += 1
        }
    }
    
    let wordCountEntries = Object.entries(wordCount)
    wordCountEntries.sort((kvpA, kvpB) => (kvpB[1] - kvpA[1]));
    
    for (const entry of wordCountEntries) {
        let [word, count] = entry
        console.log(`${word} - ${count}`);
    };
}
wordTracker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ])
console.log('*******************************');
wordTracker([
    'is the', 
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])