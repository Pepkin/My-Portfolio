function stavri(input){
    let index = 0
    let days = Number(input[index])
    index++
    let sumLiters = 0
    let sumRakiq = 0
    let liters = 0
    let degrees = 0
    let rakiq = 0
    for(let i = 1; i <= days; i++){
        liters = Number(input[index])
        index++
        degrees = Number(input[index])
        index++

        sumLiters += liters
        rakiq = liters * degrees
        sumRakiq += rakiq
        
    }
    sumRakiq = sumRakiq / sumLiters

    console.log(`Liter: ${sumLiters.toFixed(2)}`);
    console.log(`Degrees: ${sumRakiq.toFixed(2)}`);
    if(sumRakiq < 38){
        console.log(`Not good, you should baking!`);
    }else if(sumRakiq >= 38 && sumRakiq <= 42){
        console.log("Super!");
    }else if(sumRakiq > 42){
        console.log("Dilution with distilled water!");
    }

}
stavri(["2",
"200",
"43",
"200",
"40"])