function pirates(input){
    let Target = {};
    let command = input.shift();
    let count = 0

    while(command != 'Sail'){
        command = command.split('||');
        count++
        let town = command[0]
        let population = Number(command[1]);
        let gold = Number(command[2]);

        if(Target.hasOwnProperty(town)){
            Target[town].population += population;
            Target[town].gold += gold;
            count--
        }else{
            Target[town] = {
                population: population,
                gold: gold
            }
        }
        

        command = input.shift();
    }

    while(command != 'End'){
        command = command.split('=>');
        let keyWord = command[0];
        switch(keyWord){
            case 'Plunder':
                let plunderedCity = command[1];
                let casualties = Number(command[2]);
                let goldStolen = Number(command[3]);

                console.log(`${plunderedCity} plundered! ${goldStolen} gold stolen, ${casualties} citizens killed.`);

                Target[plunderedCity].population -= casualties;
                Target[plunderedCity].gold -= goldStolen;

                if(Target[plunderedCity].gold == 0 || Target[plunderedCity].population == 0){
                    console.log(`${plunderedCity} has been wiped off the map!`);
                    count--
                    delete Target[plunderedCity];
                }

                break;
            case 'Prosper':
                let prosperTown = command[1];
                let goldAdded = Number(command[2]);

                if(goldAdded >= 0){
                    Target[prosperTown].gold += goldAdded; 
                    console.log(`${goldAdded} gold added to the city treasury. ${prosperTown} now has ${Target[prosperTown].gold} gold.`);
                }else{
                    console.log(`Gold added cannot be a negative number!`);
                }

                break;
        }

        command = input.shift();
    }

    console.log(`Ahoy, Captain! There are ${count} wealthy settlements to go to:`);
    for (const town of Object.keys(Target)) {
        console.log(`${town} -> Population: ${Target[town].population} citizens, Gold: ${Target[town].gold} kg`);
    }

}
pirates(["Nassau||95000||1000",
    "San Juan||930000||1250",
    "Campeche||270000||690",
    "Port Royal||320000||1000",
    "Port Royal||100000||2000",
    "Sail",
    "Prosper=>Port Royal=>-200",
    "Plunder=>Nassau=>94000=>750",
    "Plunder=>Nassau=>1000=>150",
    "Plunder=>Campeche=>150000=>690",
    "End"])