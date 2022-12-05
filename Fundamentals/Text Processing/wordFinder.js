function wordFinder(word, text){
    const tokens = text.split(' ');
    let check = true;
    tokens.forEach(token => {
        if(token.toLowerCase() === word.toLowerCase()){
            check = false;
            return console.log(word);
        }
    })
        console.log(`${word} not found!`);
    
}   
wordFinder('javascrypt',
'JavaScript is the best programming language')