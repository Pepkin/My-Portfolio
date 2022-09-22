function foodDelivery(input) {
//•	Пилешко меню –  10.35 лв. 
//•	Меню с риба – 12.40 лв. 
//•	Вегетарианско меню  – 8.15 лв. 
    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegiMenu = Number(input[2]);
    let chickenMenuPrice = chickenMenu * 10.35
    let fishMenuPrice = fishMenu * 12.40
    let vegiMenuPrice = vegiMenu * 8.15
    let fullPrice = chickenMenuPrice + fishMenuPrice + vegiMenuPrice
    let dessert = fullPrice * (20 / 100)
    let delivery = 2.50
    let total = fullPrice + delivery + dessert

    console.log(total);

}

foodDelivery(
    [
        "2 ",
        "4 ",
        "3 "
    ]
)