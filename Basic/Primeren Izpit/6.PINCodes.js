function PinCodes(input){
    let n1Limit = Number(input[0])
    let n2Limit = Number(input[1])
    let n3Limit = Number(input[2])

    for(let a = 2; a <= n1Limit; a++){
        if(a % 2 === 0){

        }else{
            continue
        }
        for(let b = 2; b <= n2Limit; b++){
            if(2 % b === 0 || 3 % b === 0 || 5 % b === 0 || 7 % b === 0){
                
            }else{
                continue
            }
            for(let c = 2; c <= n3Limit; c++){
                if(c % 2 === 0){

                }else{
                    continue
                }
                console.log(`${a} ${b} ${c}`);
            }
        }
    }
}
PinCodes(["8",
"2",
"8"])