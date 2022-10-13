function gladiator(input){
    let fightsLost = input[0]
    let helmetPrice = input[1]
    let swordPrice = input[2]
    let shieldPrice = input[3]
    let armorPrice = input[4]
    let helmetCount = 0
    let swordCount = 0
    let shieldCount = 0
    let armorCount = 0
    let sum = 0

    helmetCount = Math.floor(fightsLost / 2)
    swordCount = Math.floor(fightsLost / 3)
    shieldCount = Math.floor(fightsLost / 6)
    armorCount = Math.floor(shieldCount / 2)
    
    sum = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armorCount * armorPrice

    
    console.log(`Gladiator expenses: ${Number(sum.toFixed(2))} aureus`);
}
gladiator([23,
    12.50,
    21.50,
    40,
    200
    ])