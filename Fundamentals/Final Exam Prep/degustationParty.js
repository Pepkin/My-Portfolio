function degustationParty(input){
    let command = input.shift();
    let list = {}
    let dislikedMeals = 0
    while(command != 'Stop'){
        command = command.split('-')
        let inputKey = command[0];
        let name = command[1];
        let dish = command[2];
        switch(inputKey){
            case 'Like':
               if(!list.hasOwnProperty(name)){
                    list[name] ={
                        spise: []
                    }
                    list[name].spise.push(dish)
               }else{
                    if(list[name].spise.includes(` ${dish}`)){

                    }else{
                        list[name].spise.push(` ${dish}`)
                    }
               }
                break;
            case 'Dislike':
                
                if(!list.hasOwnProperty(name)){
                    console.log(`${name} is not at the party.`);
                }else{
                    if(!list[name].spise.includes(dish)){
                        console.log(`${name} doesn't have the ${dish} in his/her collection.`);
                    }else{
                        console.log(`${name} doesn't like the ${dish}.`);
                        dislikedMeals++
                        list[name].spise.pop()
                    }
                }
                break;

        }
        command = input.shift();
    }
    for (const person of Object.keys(list)) {
        console.log(`${person}: ${list[person].spise} `);
    }
    console.log(`Unliked meals: ${dislikedMeals}`);
}
degustationParty(["Like-Krisi-shrimps",
"Like-Krisi-soup",
"Like-Krisi-soup",
"Like-Penelope-dessert",
"Like-Misho-salad",
"Stop"])

console.log('///////////////////////////////////////');

degustationParty(["Like-Krisi-shrimps",
"Dislike-Vili-carp",
"Dislike-Krisi-salad",
"Stop"])

console.log('///////////////////////////////////////');

degustationParty(["Like-Katy-fish",
"Dislike-Katy-fish",
"Stop"])