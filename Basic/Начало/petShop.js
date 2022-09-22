function petShop(input){

    let dogs = Number(input[0]);
    let cats = Number(input[1])
    let dogFood = dogs * 2.5
    let catFood = cats * 4
    let total = dogFood + catFood
    console.log(`${total} lv.`)
}
petShop(
    ["5 ",
    "4 "]
)