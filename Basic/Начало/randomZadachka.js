function bookReading(input){

    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysNeeded = pages / pagesPerHour
    console.log(daysNeeded);


}
bookReading(["880", "5"])