function imitationGame(input){
    let cryptedMessage = input.shift();
    let command = input.shift();

    while(command != 'Decode'){
        command = command.split('|')
        let key = command[0];
        switch(key){
            case 'ChangeAll':
                let substr = command[1];
                let replacement = command[2];
                for(;;){
                    if(cryptedMessage.includes(substr)){
                        cryptedMessage = cryptedMessage.replace(substr, replacement)
                        
                    }else{
                        break;
                    }
                }
                break;
            case 'Insert':
                let index = command[1];
                let word = command[2];
                let stringHolder = cryptedMessage.slice(index);
                cryptedMessage = cryptedMessage.replace(stringHolder, '');
                cryptedMessage = cryptedMessage.concat(word);
                cryptedMessage = cryptedMessage.concat(stringHolder);
                break;
            case 'Move':
                let movables = command[1];
                let mover = cryptedMessage.substring(0,movables);
                cryptedMessage = cryptedMessage.replace(mover, '');
                cryptedMessage = cryptedMessage.concat(mover);
                break;
        }
        command = input.shift();
    }
    console.log(`The decrypted message is: ${cryptedMessage}`);
}
imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'])