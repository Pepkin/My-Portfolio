function previousDay(year, month, day){
    let theNextDay = new Date(year, month - 1, day - 1)
    let prevYear = theNextDay.getFullYear();
    let prevMonth = theNextDay.getMonth() + 1;
    let prevDay = theNextDay.getDate();

    console.log(`${prevYear}-${prevMonth}-${prevDay}`);
}
previousDay(2016, 9, 30)