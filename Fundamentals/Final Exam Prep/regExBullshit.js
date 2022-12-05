function hensee(input){
    let totalCalories = 0
    let daysCanLast = 0
    let shtand = [];


    let pattern = /(#|\|)(?<name>[A-Za-z ]+)\1(?<expiredate>[0-9]+\/[0-9]+\/[0-9]+)\1(?<calories>[0-9]+)\1/g;
    let eatables = pattern.exec(input)
    while(eatables){
        let name = eatables.groups['name'];
        let date = eatables.groups['expiredate'];
        let kcal = eatables.groups['calories'];
        totalCalories += Number(kcal);

        let raft = `Item: ${name}, Best before: ${date}, Nutrition: ${kcal}`
        shtand.push(raft)
        eatables = pattern.exec(input)
    }
       
    daysCanLast = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${Number(daysCanLast)} days!`); 

    for(let i = 0; i < shtand.length; i++){
        console.log(shtand[i]);
    }  
}
hensee([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])