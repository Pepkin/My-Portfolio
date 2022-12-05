function houseParty(arr){
    let goingOnTheParty = []
    

    for(let index = 0; index < arr.length; index++){
        let answer = arr[index].split(' ')
        
        if(!answer.includes('not')){
            if(!goingOnTheParty.includes(answer[0])){
                goingOnTheParty.push(answer[0])
            }else{
                console.log(`${answer[0]} is already in the list`);
            }
            
        }else{
            
            if(goingOnTheParty.includes(answer[0])){
                goingOnTheParty.splice(goingOnTheParty.indexOf(`${answer[0]}`), 1)
            }else{
                console.log(`${answer[0]} is not in the list!`);
            }
        }
        answer = arr[index].split(' ')
    }
    for(let j = 0; j < goingOnTheParty.length; j++){
        console.log(goingOnTheParty[j]);
    }
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!'])
