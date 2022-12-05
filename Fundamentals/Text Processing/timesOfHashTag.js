function hashtag(text){
    const words = text.split(' ');
    words.forEach(word => {
        const isValidWord = word.startsWith('#') && word.length > 1;
        if(isValidWord){
            let temp = '';
            for(let i = 1; i < word.length; i++){
                const char = word[i].toLowerCase();
                if(char.charCodeAt() < 97 || char.charCodeAt() > 122){
                    break;
                }else{
                    temp += word[i];
                }
                
            }

            console.log(temp);
            temp = '';
        }
    });
}
hashtag('Nowadays everyone uses # to tag a #special word in #socialMedia')