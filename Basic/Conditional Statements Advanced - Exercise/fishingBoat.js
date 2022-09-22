function fishingBoat(input){
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);
    let boat = 0

    switch(season){ // "Spring", "Summer", "Autumn", "Winter"
        case "Spring": 
            boat = 3000
            break;
        case "Summer":
        case "Autumn":
            boat = 4200
            break;
        case "Winter":
            boat = 2600
            break;
    }
    let sum = 0
    sum = boat
    if(fishermen <= 6){
        sum = sum * 0.9
    } else if(fishermen >= 7 && fishermen <=11){
        sum = sum * 0.85
    } else{
        sum = sum * 0.75
    }

    if(fishermen % 2 === 0 && season !== "Autumn"){
        sum = sum * 0.95
    }

    let diff = Math.abs(sum - budget)
    if(budget >= sum){
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`)
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`)
    }


}
fishingBoat(["3600",
"Autumn",
"6"])
