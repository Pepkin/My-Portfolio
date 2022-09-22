function timeAnd15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let hoursInMin = hours * 60
    hoursInMin = hoursInMin + 15 + minutes

    h = Math.floor(hoursInMin / 60)
    m = hoursInMin % 60
    
    if(h >= 24){
        h = 0
    }

    if(m < 10){
        console.log(`${h}:0${m} `)
    } else {
        console.log(`${h}:${m}`)
    }

    
}
timeAnd15Minutes(["23", "59"])
