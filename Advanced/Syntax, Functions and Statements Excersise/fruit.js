function fruit(fruit, kilogram, price){
    let inKg = kilogram / 1000;
    let priceSum = inKg * price;
    console.log(`I need $${priceSum.toFixed(2)} to buy ${inKg.toFixed(2)} kilograms ${fruit}.`);
}
fruit('orange', 2500, 1.80)