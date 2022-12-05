function blackFlag(input){
    let days = Number(input[0])
    let pluderPerDay = Number(input[1])
    let totalPlunder = 0
    let plunderNeeded = Number(input[2])

    for(let i = 1; i <= days; i++){
        totalPlunder += pluderPerDay

        if(i % 3 == 0){
            totalPlunder += pluderPerDay / 2
        }else if(i % 5 == 0){
            totalPlunder *= 0.7
        }

    }
    if(totalPlunder > plunderNeeded){
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }else{
        percentage = (totalPlunder / plunderNeeded) * 100
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}
blackFlag(["7",
"15",
"380"])
