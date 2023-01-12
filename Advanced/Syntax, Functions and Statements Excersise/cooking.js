function cooking(...arr) {
  let dish = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let command = arr[i];
    switch (command) {
      case "chop":
        dish /= 2;
        console.log(dish);
        break;
      case "dice":
        dish = Math.sqrt(dish);
        console.log(dish);
        break;
      case "spice":
        dish += 1;
        console.log(dish);
        break;
      case "bake":
        dish *= 3;
        console.log(dish);
        break;
      case "fillet":
        dish *= 0.8;
        console.log(dish);
    }
  }
}
cooking("32", "chop", "chop", "chop", "chop", "chop");
