function stringReplace(word, text){

    let wordArray = word.split(', ')
    wordArray.forEach(word => {
        const match = (`${'*'.repeat(word.length)}`);
        text = text.replace(match, `${word}`);
    });
    console.log(text);
}
stringReplace('great, learning',
'softuni is ***** place for ******** new programming languages')