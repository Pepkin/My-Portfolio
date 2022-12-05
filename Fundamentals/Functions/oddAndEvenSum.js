function sum(number){

    let sNumber = number.toString()
    let sumEven = 0
    let sumOdd = 0
    let addNumber = 0

    for(let i = 0; i < sNumber.length; i++){
         
        addNumber = Number(sNumber[i])

        if(addNumber % 2 === 0){
            sumEven += addNumber
        }else{
            sumOdd += addNumber
        }
    }

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}
sum(3495892137259234)