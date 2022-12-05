function towns(input){
    let town = {

    }
    for(let i = 0; i < input.length; i++){
        let command = input[i].split(" | ")
        town.town = command[0]
        town.latitude = Number(command[1]).toFixed(2)
        town.longitude = Number(command[2]).toFixed(2)

        console.log(town);
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])