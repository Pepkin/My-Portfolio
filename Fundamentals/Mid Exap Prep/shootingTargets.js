function shootTargets(input){
    let targets = input
        .shift()
        .split(" ")
        .map(x => Number(x))
    let currentCommand = input.shift()

    while(currentCommand != "End"){
        let command = currentCommand.split(" ")
        let specialWord = command[0]
        let index = Number(command[1])
        let argument1 = Number(command[2])

        switch (specialWord) {
            case "Shoot":
                if(Number(targets[index] - argument1 <= 0)){
                    targets.splice(index, 1)
                }else{
                    targets.splice(index, 1, Number(targets[index]) - argument1)
                }
                
                break;
            case "Strike":
                if(targets[index] >= -1){
                    if((index - argument1) <= -1 || (index + argument1) >= targets.length){
                        console.log("Strike missed!");
                    }else{
                        targets.splice(index - argument1, index + argument1)
                    }
                }
                break;
            case "Add":
                if(targets.length > index){
                    targets.splice(index, 0, argument1)
                }else{
                    console.log("Invalid placement!");
                }
                break;
            
        }
        


        currentCommand = input.shift()
    }
    console.log(targets.join("|"));
}
shootTargets(["1 2 3 4 5",
"Strike 0 1",
"End"])