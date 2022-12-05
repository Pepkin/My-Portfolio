function cityMap(city){
    for (const key of Object.keys(city)) {
        console.log(`${key} -> ${city[key]}`);
    }
}
cityMap(city ={
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
})