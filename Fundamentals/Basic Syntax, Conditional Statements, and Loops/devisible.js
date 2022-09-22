function division(number){
    if(number % 10 === 0){
        console.log(`The number is divisible by 10`);
    }else if(number % 7 === 0){
        if(number % 10 === 0){
            console.log(`The number is divisible by 10`)
            return
        }

        console.log("The number is divisible by 7");
    }else if(number % 6 === 0){
        if(number % 10 === 0){
            console.log(`The number is divisible by 10`)
            return
        }
        console.log('The number is divisible by 6');
        return
    }else if(number % 3 === 0){
        if(number % 2 === 0){
            console.log('The number is divisible by 6');
        }else if(number % 10 === 0){
            console.log(`The number is divisible by 10`);
        }
        console.log(`The number is divisible by 3`)

    }else if(number % 2 === 0){
        console.log(`The number is divisible by 2`);
    }else if(number % 10 === 0){
        console.log(`The number is divisible by 10`);    
    }else if(number % 2 !== 0 || number % 3 !== 0 || number % 6 !== 0 || number % 7 !== 0 || number % 10 !== 0){
        console.log('Not divisible');
    }
}

division(-1)