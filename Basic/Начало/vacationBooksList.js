function vacationBooksList(input) {
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let neededDays = Number(input[2]);

    let fullBookHours = pages / pagesPerHour
    let hoursPerDay = fullBookHours / neededDays

    console.log(hoursPerDay)
}

vacationBooksList(
    ["432 ",
    "15 ",
    "4 "]
    )