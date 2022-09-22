function toyShop(input){
    let vacationPrice = Number(input[0]);
    let puzzel = Number(input[1]);
    let doll = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let truck = Number(input[5]);

    totalPrice = puzzel * 2.6 + doll * 3 + bears * 4.10 + minions * 8.20 + truck * 2
    totalNumber = puzzel + doll + bears + minions + truck
   
    if(totalNumber >= 50){
        totalPrice = totalPrice * 0.75
    }
    
    totalPrice = totalPrice * 0.9

    diff = Math.abs(totalPrice - vacationPrice)

    if(totalPrice >= vacationPrice){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
    } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
    }

}
toyShop(["320",
"8",
"2",
"5",
"5",
"1"])
