function sumOfThreeNumbers(n1, n2, n3){

    function add(num1, num2){
        let sumOfTwo = num1 + num2
        return sumOfTwo;
    }
    let sum = add(n1, n2)

    function subtract(numero1, numero2){
        return numero1 - numero2
    }
    let result = subtract(sum, n3)

    console.log(result);

}   
sumOfThreeNumbers(23, 6, 10)