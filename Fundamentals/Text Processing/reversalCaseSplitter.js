function reversalCaseSplitter(input){
    let text = input.split('');
    let printer = ''
    let holder = []
    for (let i = 0; i < text.length; i++) {
        if(text[i].charCodeAt() > 65 && text[i].charCodeAt() < 90){
            if(i != 0){
                printer += ','
                printer += ' '
                printer += `${text[i]}`
            }else{
                printer += `${text[i]}`
            }
        }else{
                printer += `${text[i]}`
               
        }
    
    }
    console.log(printer);
}
reversalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')