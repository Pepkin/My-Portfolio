function factorialDivision(number1, number2){
    let fac1 = 1
    let fac2 = 1
    for(let i = 1; i <= number1; i++){
        fac1 *= i
    }
    for(let j = 1; j <= number2; j++){
        fac2 *= j
    }
    console.log((fac1 / fac2).toFixed(2));
}
factorialDivision(5, 2)