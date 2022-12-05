function plantsVSZombies(input){
    let plantCount = input.shift();
    let plants = {};

    for(let i = 0; i < plantCount; i++){
        let plant = input.shift().split('<->')
        let name = plant[0];
        let rarity = plant[1];

        plants[name] = {
            rarity: rarity,
            rating: [],
        }
    }
    
    let command = input.shift()
    while(command != 'Exhibition'){
        let [operation, args] = command.split(': ');
        let [plantName, line] = args.split(' - ')
        if(plants[plantName]){
            switch (operation) {
                case 'Rate':
                    let newRating = line;
                    plants[plantName].rating.push(newRating)
                    break;
                case 'Update':
                    let newRarity = line;
                    plants[plantName].rarity = newRarity;
                    break;
                case 'Reset':
                    plants[plantName].rating = [];
                    break;
            }
        }else{
            console.log('error');
        }

        command = input.shift();
    }

    console.log(`Plants for the exhibition:`);
    for (const plant of Object.keys(plants)) {
        let averageRating = calculateRating(plants[plant].rating)
        console.log(`- ${plant}; Rarity: ${plants[plant].rarity}; Rating: ${averageRating.toFixed(2)}`);
    }

    function calculateRating(ratings) {
        let sum = 0;
        for (const rating of ratings) {
            sum += rating;
        }

        let averageRating = sum / ratings.length;
        if (!averageRating) {
            averageRating = 0;
        }

        return averageRating;
    }
}
plantsVSZombies(["3",
"Arnoldii<->4",
"Woodii<->7",
"Welwitschia<->2",
"Rate: Woodii - 10",
"Rate: Welwitschia - 7",
"Rate: Arnoldii - 3",
"Rate: Woodii - 5",
"Update: Woodii - 5",
"Reset: Arnoldii",
"Exhibition"]);