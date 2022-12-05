function shoopingList(input){
    let rawList = input.shift()
    let list = rawList.split("!")
    let currentCommand = input.shift()

    while(currentCommand != "Go Shopping!"){
        let command = currentCommand.split(" ")
        let specialWord = command[0]
        let argument1 = command[1]
        let argument2 = command[2]

        switch(specialWord){
            case "Unnecessary":
                let itemIndex = list.indexOf(argument1);

                if(itemIndex > -1){
                    list.splice(itemIndex, 1)
                }
                break;
            case "Urgent":

                if(!list.includes(argument1)){
                    list.unshift(argument1)
                }
            
                break;
            case "Correct":
                let updatedIndex = list.indexOf(argument1)

                if(updatedIndex > -1){
                    list.splice(updatedIndex, 1, argument2)
                }
                break;
            case "Rearrange":
                let thirdIndex = list.indexOf(argument1)

                if(thirdIndex > -1){
                    list.splice(thirdIndex, 1,)
                    list.push(argument1)
                }
                break;
        }

        currentCommand = input.shift() 
    }
    console.log(list.join(", "));

}
shoopingList(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

