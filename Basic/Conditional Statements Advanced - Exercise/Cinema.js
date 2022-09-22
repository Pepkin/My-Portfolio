function Cinema(input){
    let type = input[0]
    let rolls = Number(input[1]);
    let columns = Number(input[2]);

    let income = 0
    switch(type){
        case "Premiere": 
            income = rolls * columns * 12.00 
            break;
        case "Normal":
            income = rolls * columns * 7.50
            break;
        case "Discount":
            income = rolls * columns * 5.00
            break;
    }
    console.log(`${income.toFixed(2)} leva`)

}
Cinema(["Normal",
"21",
"13"])

