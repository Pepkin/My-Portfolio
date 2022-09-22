function kongVsGodzilla(input){
    let budget = Number(input[0]);
    let staff = Number(input[1]);
    let clothingForOnePrice = Number(input[2]);
    let clothingPrice = staff * clothingForOnePrice
    let decorationPrice = budget * 0.1
    if(staff > 150){
        clothingPrice = clothingPrice * 0.9
    }
    let totalSum = clothingPrice + decorationPrice
    diff = Math.abs(totalSum - budget)
    if(totalSum > budget){
        console.log("Not enough money!")
        console.log(`Wingard needs ${diff.toFixed(2)} leva more.`)
    } else if (totalSum <= budget){
        console.log("Action!")
        console.log(`Wingard starts filming with ${diff.toFixed(2)} leva left.`)
    }


}
kongVsGodzilla(["15437.62",
"186",
"57.99"])
