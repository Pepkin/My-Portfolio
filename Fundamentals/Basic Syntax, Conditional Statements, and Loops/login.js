function login(array){
    let input = 0
    let name = array[input]
    input++
    let newPassword = ''
    for (let i = name.length - 1; i >= 0; i--) {
        newPassword += name[i];
    }

    let logPassword = 0
    while(logPassword = array[input]){
       if(logPassword !== newPassword){
            if(input === 4){
                 console.log(`User ${name} blocked!`);
                 break
            }
            console.log("Incorrect password. Try again.");
            
       }else{
            console.log(`User ${name} logged in.`);
       }
       input++
     }
}
login(['Acer','login','go','let me in','recA'])