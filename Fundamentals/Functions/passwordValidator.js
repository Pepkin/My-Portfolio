function passwordValidator(password){
    passChar = ''
    numCount = 0
    let test1 = true
    let test2 = true
    let test3 = true
    if(password.length < 6 || password.length > 10){
        console.log("Password must be between 6 and 10 characters");
        test1 = false
    }else{
        for(let i = 0; i < password.length; i++){
            passChar = password[i]

            if((passChar.charCodeAt() >= 48 && passChar.charCodeAt()
                <= 57) || (passChar.charCodeAt() >= 65 && passChar.charCodeAt()
                <= 90) || (passChar.charCodeAt() >= 97 && passChar.charCodeAt() <= 122)){
                
                if(!isNaN(passChar)){
                    numCount += 1
                    
                }else{
                }
                
            }else{
                console.log("Password must consist only of letters and digits");
                test3 = false
                break;
            }
        }
    }
    if(numCount < 2){
        console.log("Password must have at least 2 digits");
        test2 = false
    }else{
        
    }
    if(test1 && test2 && test3){
        console.log("Password is valid");
    }
}
passwordValidator('Pa$s$s')