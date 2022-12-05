function storeProvision(stash, order){
    let currentProvision = {

    }
    for(let i = 0; i < stash.length - 1; i+= 2){
        let product = stash[i]
        let quantity = Number(stash[i + 1])
        currentProvision[product] = quantity

    }
    
    for(let i = 0; i < order.length - 1; i+= 2){
        let orderProduct = order[i]
        let orderQuantity = Number(order[i + 1])
        if(stash.includes(orderProduct)){
            currentProvision[orderProduct] = orderQuantity + Number(currentProvision[orderProduct])
        }else{
            currentProvision[orderProduct] = orderQuantity
        }
        

    }
    for(const key of Object.keys(currentProvision)){
        console.log(`${key} -> ${currentProvision[key]}`);
    }
    
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
    )