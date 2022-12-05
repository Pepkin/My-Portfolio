function activationKeyManager(input){
    let activationKey = input.shift();
    let command = input.shift();

    while(command != 'Generate'){
        command = command.split('>>>');
        let operation = command[0];
        
        switch (operation){
            case 'Contains': {
                let substring = command[1];
                if(activationKey.includes(substring)){
                    console.log(`${activationKey} contains ${substring}`);
                }else{
                    console.log('Substring not found!');
                }
            }
                break;
            case 'Flip': {
                let caseInput = command[1];
                let inputStart = command[2];
                let inputFinish = command[3];
                let part = activationKey.substring(inputStart, inputFinish)
                let newPart = ''
                if(caseInput === 'Upper'){
                    newPart = part.toUpperCase();
                }else{
                    newPart = part.toLowerCase();
                }
                activationKey = activationKey.replace(part, newPart)
                console.log(activationKey);
            }
                break;
            case 'Slice': {
                let startIndex = command[1];
                let endIndex = command[2];
                let deletedPart = activationKey.substring(startIndex, endIndex);
                activationKey = activationKey.replace(deletedPart, '');
                console.log(activationKey);
            }
                break;
        }
        command = input.shift();
    }
    console.log(`Your activation key is: ${activationKey}`);
}
activationKeyManager(["abcdefghijklmnopqrstuvwxyz",
"Slice>>>2>>>6",
"Flip>>>Upper>>>3>>>14",
"Flip>>>Lower>>>5>>>7",
"Contains>>>def",
"Contains>>>deF",
"Generate"]);