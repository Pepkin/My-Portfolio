function amazingNumebrs(number){
    let numberToString = number.toString()
    let sum = 0
    for(let s = 0; s < numberToString.length; s++){
        sum += Number(numberToString[s])
    }
    if(sum.toString().includes('9')){
        console.log(`${number} Amazing? True`);
    }else{
        console.log(`${number} Amazing? False`)
    }
}
amazingNumebrs(999)