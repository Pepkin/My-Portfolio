function radar(speed, zone) {
    let zones={'residential':20,'city':50,'interstate':90,'motorway':130};
    let differences;
    let status;
   if (speed<=zones[zone]) {
    console.log(`Driving ${speed} km/h in a ${zones[zone]} zone`);
   } else {
    differences = speed - zones[zone];
    status='reckless driving';
    if (differences<=20) {
        status='speeding';
    } else {
        if (differences<=40) {
            status='excessive speeding';
        }
    }
    console.log(`The speed is ${differences} km/h faster than the allowed speed of ${zones[zone]} - ${status}`)
    }
}