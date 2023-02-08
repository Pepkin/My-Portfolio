function tickets(arr, criteria){
    class Ticket {
        constructor(destination, price, availability){
            this.destination = destination
            this.price = price
            this.status = availability
        }
    }

    let ticket = []
    for(const line of arr){
        let [destination, price, availability] = line.split('|')
        price = Number(price);
        const currentTicket = new Ticket(destination, price, availability)
        ticket.push(currentTicket);
    }

    let sorted = ticket.sort((a,b) => {
        if(criteria === 'destination'){
            return (a.destination).localeCompare(b.destination)
        }else if(criteria === 'price'){
            return a.price - b.price;
        }else if(criteria === 'status'){
            return (a.status).localeCompare(b.status)
        }
    })
    return sorted;
}
tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination')