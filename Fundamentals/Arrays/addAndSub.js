function addAndSub(input){
    let newArray = []
    let orginalArraySum = 0
    let newArraySum = 0
    let inputLength = input.length
    let number = 0
    let newNumber = 0
    for(let i = 0; i < inputLength; i++){
        number = input[i]
        orginalArraySum += number
        if(number % 2 === 0){
            number += i
            newArray.push(number)
        }else{
            number -= i
            newArray.push(number)
        }
        newArraySum += number
        
    }
    console.log(newArray);
    console.log(orginalArraySum);
    console.log(newArraySum);
}
addAndSub([5, 15, 23, 56, 35])