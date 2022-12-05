function piccolo(input){
    let parkingLot = {}

    for(let i = 0; i < input.length; i++){
        let command = input[i].split(', ')
        let specialWord = command[0]
        let carNumber = command[1]
        let serialNumber = carNumber.split('')
        switch(specialWord){
            case 'IN':
                parkingLot[carNumber] = serialNumber[2] + serialNumber[3] + serialNumber[4] + serialNumber[5]
                break;
            case 'OUT':
                delete parkingLot[carNumber]
                break;
        }
    }

    let parkingLotEntries = Object.entries(parkingLot)

    parkingLotEntries.sort((kvpA, kvpB) => Number(kvpA[1]) - Number(kvpB[1]));

    let sortedParkingLot = Object.fromEntries(parkingLotEntries)
    
   
    if(Object.keys(sortedParkingLot).length){
    for (const key in sortedParkingLot) {
          console.log(`${key}`);
        }
    }else{
        console.log('Parking Lot is Empty');
    }
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)
console.log('***************************');

piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])