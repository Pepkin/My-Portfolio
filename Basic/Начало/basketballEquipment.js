function basketballEquipment(input){
    let yearTax = Number(input[0]);
    let nikeies = yearTax - (yearTax * (40 / 100));
    let clothing = nikeies - (nikeies * (20 / 100));
    let ball = clothing / 4 ;
    let accessroies = ball / 5 ;
    let total = yearTax + nikeies + clothing + ball + accessroies

    console.log(total)



}

basketballEquipment(["365"])