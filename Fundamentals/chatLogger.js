function chatLogger(arr){
    let command = arr.shift().split(' ')
    let chat = []

    while(command != "end"){
        
        let specialWord = command[0]
        let message = command[1]
        let editedMessage = command[2]

        switch(specialWord){
            case "Chat":
                chat.push(message)
                break;
            case "Delete":
                if(chat.includes(message)){
                    chat.splice(chat.indexOf(message), 1)
                }
                break;
            case "Edit":
                if(chat.includes(message)){
                    chat.splice(chat.indexOf(message), 1, editedMessage)
                }else{

                }
                break;
            case "Pin":
                if(chat.includes(message)){
                    chat.splice(chat.indexOf(message), 1)
                    chat.push(message)
                }else{

                }
                break;
            case "Spam":
                for(let k = 1; k < command.length; k++){
                    message = command[k]
                    chat.push(message)
                }
                break;
        }
        command = arr.shift().split(' ')
    }
    for(let el of chat){
        console.log(el);
    }
}
chatLogger(["Chat Hello",
"Chat darling",
"Edit darling Darling",
"Spam how are you",
"Delete Darling",
"end"])