function footballKit(input){
    let tshirtPrice = Number(input[0])
    let neededSum = Number(input[1])
    let leggingsPrice = tshirtPrice * 0.75
    let socksPrice = leggingsPrice * 0.2
    let shoesPrice = (tshirtPrice + leggingsPrice) * 2
    let sum = tshirtPrice + leggingsPrice + socksPrice + shoesPrice
    let discountSum = sum * 0.85
    
    let diff = Math.abs(discountSum - neededSum)
    if(discountSum >= neededSum){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${discountSum.toFixed(2)} lv.`);
    }else{
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${diff.toFixed(2)} lv. more.`);
    }
}
footballKit(["55",
"310"])