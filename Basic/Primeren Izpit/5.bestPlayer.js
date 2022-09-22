function bestPlayer(input){
    index = 0
    command = input[index]
    let name = 0
    let goals = 0
    let previousGoals = 0
    let previousPlayer = 0
    let bestPlayer = false
    while(command !== "END"){
        name = command
        index++
        command = input[index]
        goals = command
        index++
        command = input[index]
        if(goals >= previousGoals){
            bestPlayer = true
        }
        
        if(goals >= 10){
            break
        }
        previousPlayer = name
        previousGoals = goals
    }
    if(bestPlayer){
        if(previousGoals = goals){
            console.log(`${previousPlayer} is the best player!`)
        }else{
        console.log(`${name} is the best player!`);
        }
        if(goals >= 3){
            console.log(`He has scored ${goals} goals and made a hat-trick !!!`);
        }else{
            console.log(`He has scored ${goals} goals.`);
        }
    }

}
bestPlayer(["Rooney",
"1",
"Junior",
"2",
"Paolinio",
"2",
"END"])

// AKO POSLEDNIQ I PREDPOSLEDNIQ IMAT EDNAKVI GOLOVE TRQBVA DA SE PRINTIRA PURVIQT NAMEREN (KOETO E MNOGO TUPO)