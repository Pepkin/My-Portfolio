function hotelRoom(input){
    let month = input[0];
    let nights = Number(input[1]);
    let sum = 0
    let studio = 0
    let apart = 0

    switch(month){ //May, June, July, August, September или October
        case "May":
        case "October":
            studio = 50 * nights
            apart = 65 * nights
            if(nights > 7 && nights < 14){
                studio = (50 * nights) * 0.95
            }else if(nights > 14){
                studio = (50 * nights) * 0.7
            }
            break;
        case "June":
        case "September":
            studio = 75.20 * nights
            apart = 68.70 * nights
            if(nights > 14){
                studio = (75.20 * nights) * 0.8
            }
            break;
        case "July":
        case "August":
            studio = 76 * nights
            apart = 77 * nights
            break;
    }
    if(nights > 14){
        apart = apart * 0.9
    }

    console.log(`Apartment: ${apart.toFixed(2)} lv.`)
    console.log(`Studio: ${studio.toFixed(2)} lv.`)
}
hotelRoom(["June",
"14"])
