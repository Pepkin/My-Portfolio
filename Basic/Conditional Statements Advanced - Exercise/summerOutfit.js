function summerOutfit(input){
    let degres = Number(input[0]);
    let time = input[1];
    let outfit = 0;
    let shoes = 0;

    
    if(degres >= 10 && degres <=18){
        if(time === "Afternoon" || time === "Evening"){
            outfit = "Shirt"
            shoes = "Moccasins"
        } else {
            outfit = "Sweatshirt"
            shoes = "Sneakers"
        }   
    } else if(degres > 18 && degres <= 24){
        if(time === "Morning" || time === "Evening"){
            outfit = "Shirt"
            shoes = "Moccasins"
        } else {
            outfit = "T-Shirt"
            shoes = "Sandals"
        } 
    } else {
        if(time === "Morning"){
            outfit = "T-Shirt"
            shoes = "Sandals" 
        } else if(time === "Afternoon"){
            outfit = "Swim Suit"
            shoes = "Barefoot"
        } else {
            outfit = "Shirt"
            shoes = "Moccasins"
        }
    }
console.log(`It's ${degres} degrees, get your ${outfit} and ${shoes}.`);


}



summerOutfit(["28",
"Evening"])


