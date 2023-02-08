function carFactory({model, power, color, carriage, wheelsize}){
    const engines = {
        small: { power: 90, volume: 1800 },
        normal: { power: 120, volume: 2400 },
        monster: { power: 200, volume: 3500 },
    }
    const Hatchback = {
         type: 'hatchback', color: color 
    }
    const Coupe = {
        type: 'coupe', color: color
    }
    
    if(wheelsize % 2 == 0){
        wheelsize--;
    }

    let engine = {};
    if(power <= 90){
        engine = engines.small
    }else if(power <= 120){
        engine = engines.normal
    }else if(power <= 200){
        engine = engines.monster
    }

    let car = {
        model,
        engine,
        carriage: {
            type: carriage,
            color
        },
        wheels: [wheelsize,wheelsize,wheelsize,wheelsize,],
    }
    return car
}
carFactory({ model: 'VW Golf II',
power: 90,
color: 'blue',
carriage: 'hatchback',
wheelsize: 14 }
)