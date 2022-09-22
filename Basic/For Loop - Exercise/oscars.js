function oscars(input){
    let index = 0

    let name = input[index]
    index++

    let academyPoints = Number(input[index])
    index++

    let n = Number(input[index])
    index++
    hasNominee = false
    for(let i = 1; i <= n; i++){
        let juryName = input[index]
        index++
        let juryPoints = Number(input[index])
        index++
        
        let currentPoints = juryName.length * juryPoints / 2
        academyPoints += currentPoints
        if(academyPoints >= 1250.5){
            hasNominee = true
            console.log(`Congratulations, ${name} got a nominee for leading role with ${academyPoints.toFixed(1)}!`);
            break
        }
    }
    let diff = Math.abs(academyPoints - 1250.5)
    if(!hasNominee){
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }
}
oscars(["Zahari Baharov",
"205",
"4",
"Johnny Depp",
"45",
"Will Smith",
"29",
"Jet Lee",
"10",
"Matthew Mcconaughey",
"39"])

