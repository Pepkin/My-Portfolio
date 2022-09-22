function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let destination = 0
    let suit = 0

    if(budget <= 100){
        destination = "Bulgaria"
        if(season === "summer"){
            budget = budget * 0.30
            suit = "Camp"
        } else{
            budget = budget * 0.70
            suit = "Hotel"
        }
    } else if(budget <= 1000 && budget > 100){
        destination = "Balkans"
        if(season === "summer"){
            budget = budget * 0.40
            suit = "Camp"
        } else{
            budget = budget * 0.80
            suit = "Hotel"
        }
    } else{
        destination = "Europe"
        budget = budget * 0.90
        suit = "Hotel"
    }     
    
console.log(`Somewhere in ${destination}`)
console.log(`${suit} - ${budget.toFixed(2)}`)





}
journey(["678.53", "winter"])