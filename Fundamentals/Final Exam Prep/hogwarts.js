function hogwarts(input){
    let spell = input.shift();
    let command = input.shift();

    while(command != 'Abracadabra'){
        command = command.split(' ')
        let inputspell = command[0];
        switch(inputspell){
            case 'Illusion':
                let index = Number(command[1]);
                let letter = command[2];
                if(spell[index]){
                    spell = spell.replace(spell[index], letter)
                    console.log('Done!');
                }else{    
                    console.log('The spell was too weak.');
                }
                break;
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                break;
            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell);
                break;
            case 'Divination':
                let firstSubstring = command[1];
                let secondSubstring = command[2];
                if(spell.includes(firstSubstring)){
                    while(spell.includes(firstSubstring)){
                        spell = spell.replace(firstSubstring,secondSubstring)
                    }
                    console.log(spell);
                }
                break;
            case 'Alteration':
                let subbstring = command[1]
                if(spell.includes(subbstring)){
                    spell = spell.replace(subbstring, '')
                    console.log(spell);
                }
                break;
            default:
                console.log('The spell did not work!');
        }
        command = input.shift();
    }
}
hogwarts(["TR1GG3R",
"Necromancy",
"Illusion 8 m",
"Illusion 9 n",
"Abracadabra"])

console.log('/////////////////////////////////////////////');

hogwarts(["SwordMaster",
"Target Target Target",
"Abjuration",
"Necromancy",
"Illusion 9 n",
"Alteration master",

"Abracadabra"])