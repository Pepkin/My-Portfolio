function lunchBreak(input){
    let name = input[0];
    let episodeLenght = Number(input[1]);
    let brakeLenght = Number(input[2]);
    let lunch = brakeLenght / 8
    let relax = brakeLenght / 4
    let brakeLeft = brakeLenght - lunch - relax
    let diff = Math.ceil(Math.abs(brakeLeft - episodeLenght))
    if(episodeLenght <= brakeLeft){
        console.log(`You have enough time to watch ${name} and left with ${diff} minutes free time.`)
    } else {
        console.log(`You don't have enough time to watch ${name}, you need ${diff} more minutes.`)
    }

}
lunchBreak(["Teen Wolf",
"48",
"60"])
