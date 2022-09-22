function bonusScore(input){
    let points = Number(input[0])
    let bonus = 0

    if(points <= 100){
        bonus = 5; 
    } else if(points < 1000) {
        bonus = points * 0.20
    } else {
        bonus = points * 0.10
    }

    if(points % 2 === 0){
        bonus = bonus + 1
    } else if(points % 10 === 5){
        bonus = bonus + 2
    }
    points = points + bonus
    console.log(bonus)
    console.log(points)
}
bonusScore(["20"])