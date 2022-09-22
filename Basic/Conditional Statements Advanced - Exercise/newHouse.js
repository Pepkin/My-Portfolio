function newHouse(input){
    let type = input[0]
    let number = Number(input[1])
    let budget = Number(input[2])
    let sum = 0
    

    switch(type){ //"Roses", "Dahlias", "Tulips", "Narcissus", "Gladiolus"
        case "Roses": 
            sum = number * 5
            if(number > 80){
                sum = sum * 0.9
            }
            break;
        case "Dahlias": 
            sum = number * 3.80
            if(number > 90){
                sum = sum * 0.85
            }
            break;
        case "Tulips":
            sum = number * 2.80
            if(number > 80){
                sum = sum * 0.85
            }
            break;
        case "Narcissus":
            sum = number * 3
            if(number < 120){
                sum = sum * 1.15
            }  
            break;
        case "Gladiolus":
            sum = number * 2.50
            if(number < 80){
                sum = sum * 1.2
            }
            break;
    }
    let diff = Math.abs(sum - budget)
   if(budget >= sum){
        console.log(`Hey, you have a great garden with ${number} ${type} and ${diff.toFixed(2)} leva left.`)
   } else{
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`)
   }

}
newHouse(["Tulips",
"88",
"260"])

