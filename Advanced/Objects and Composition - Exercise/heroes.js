function heroes(input){
    let result = []
    for(let elem of input){
        let [name, level, items] = elem.split(' / ')
        level = Number(level)
        name.trim()
        items = items ? items.split(', ') : [];

        result.push({name, level, items})
    }
    console.log(JSON.stringify(result));
}
heroes(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])