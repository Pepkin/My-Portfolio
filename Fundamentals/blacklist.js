function blacklist(arr){
    let list = arr.shift().split(", ")
    let command = arr.shift().split(" ")

    while(command != "Report"){
        let specialWord = command[0]
        let index = command[1]
        let newName = command[2]

        switch(specialWord){
            case "Blacklist":
                let name = index
                if(list.includes(name)){
                    list.splice(list.indexOf(name), 1, "Blacklisted")
                    console.log(`${name} was blacklisted.`);
                }else{
                    console.log(`${name} was not found.`);
                }
                break;
            case "Error":
                if(list[index] != "Blacklisted" && list[index] != "Lost"){
                    console.log(`${list[index]} was lost due to an error.`);
                    list.splice(index, 1, "Lost")
                }
                break;
            case "Change":
                if(index >= 0 && index < list.length){
                    console.log(`${list[index]} changed his username to ${newName}`);
                    list.splice(index, 1, newName)
                }
                break;

        }
        command = arr.shift().split(" ")
    }
    let lostNames = 0
    let blacklistedNames = 0
    for(let el of list){
        if(el == "Blacklisted"){
            blacklistedNames++
        }
        if(el == "Lost"){
            lostNames++
        }
    }
    console.log('Blacklisted names: ' + blacklistedNames);
    console.log('Lost names: ' + lostNames);
    console.log(list.join(' '));

}
blacklist(["Mike, John, Eddie, William",
"Blacklist Maya",
"Error 1",
"Change 4 George",
"Report"])