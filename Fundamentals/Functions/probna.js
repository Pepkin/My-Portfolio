function passwordValidator(password){
    passChar = ''
    numCount = 0
    if(password.length < 6 && password.length > 10){
        console.log("Password must be between 6 and 10 characters");
    }else{
        for(let i = 0; i < password.length; i++){
            passChar = password[i]
            console.log(passChar.charCodeAt());;
        }

        console.log(passChar.charCodeAt());
    }
    console.log(passChar.charCodeAt());
}
passwordValidator('login')