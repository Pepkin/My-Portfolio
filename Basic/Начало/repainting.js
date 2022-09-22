function repainting(input){
//•	Предпазен найлон - 1.50 лв. за кв. метър
//•	Боя - 14.50 лв. за литър
//•	Разредител за боя - 5.00 лв. за литър
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let watering = Number(input[2]);
    let hours = Number(input[3]);

    let naylonCost = naylon * 1.5 + 2 * 1.5
    let paintCost = (paint  + (paint * 10 / 100)) * 14.5
    let wateringCost = watering * 5.0
    let productsCost = naylonCost + paintCost + wateringCost + 0.4
    
    let workersPaimentPerHour = productsCost * (30 / 100);
    let workersPaiment = hours * workersPaimentPerHour

    let totalValue = productsCost + workersPaiment

    console.log(totalValue)


}

repainting(
    ["10 ",
    "11 ",
    "4 ",
    "8 "]
)