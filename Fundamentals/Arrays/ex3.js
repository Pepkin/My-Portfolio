function merge(array1, array2){
    let newArray = []
    let number1 = 0
    let number2 = 0
    let newNumber = 0
    
    for(let i = 0; i < array1.length; i++){
        number1 = array1[i]  
        number2 = array2[i]
            
        if(i % 2 === 0){
            newArray.push(Number(number1) + Number(number2))
        }else{
            newArray.push(number1 + number2)
        }
    }
    let separation = newArray.join(" - ")
    console.log(separation);
}
merge(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44']
)