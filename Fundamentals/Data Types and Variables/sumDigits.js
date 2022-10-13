function sumDigits(number){
    let sum = 0
    let numberString = number.toString()
    for(let i = 0; i < numberString.length; i++){
        sum += Number(numberString[i])
    }
    console.log(sum);
}
sumDigits(543)