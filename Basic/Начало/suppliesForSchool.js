function suppliesForSchool(input) {
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let deregent = Number(input[2]);
    let discount = Number(input[3]);                  
//•	Пакет химикали - 5.80 лв. 
//•	Пакет маркери - 7.20 лв. 
//•	Препарат - 1.20 лв (за литър)
    let pensCost = pens * 5.8
    let markersCost = markers * 7.2
    let deregentCost = deregent * 1.2
    let total = pensCost + markersCost + deregentCost
    let paydPrice = total - (total * (25 / 100))

console.log(paydPrice)
}

suppliesForSchool(
    ["2 ",
    "3 ",
    "4 ",
    "25 "
    ]
)