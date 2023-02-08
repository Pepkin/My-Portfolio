function calories(arr){
    let foodChart = {}
    while(arr.length != 0){
        let food = arr.shift()
        let calorie = arr.shift()
        foodChart[food] = Number(calorie)
    }
    console.log(foodChart);
}
calories(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])