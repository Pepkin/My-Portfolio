function meetings(input){
    let meeting = {}

    for(const line of input){
        let [day, name] = line.split(' ')

        if(meeting[day]){
            console.log(`Conflict on ${day}`);
        }else{
            meeting[day] = name;
        }
    }

    for(let [day, name] of Object.entries(meeting)){
        console.log(`${day} -> ${name}`);
    }
    console.log("********************");
    for(const day in meeting){
        console.log(`${day} -> ${meeting[day]}`);
    }

}
meetings(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])