function sameNumbers(number){
    let arr = String(number).split('').map(n => Number(n))
    let isSame = arr.filter(n => n !== arr[0]).length ? false: true;
    let sum = arr.reduce((acc, num) => acc + num);

    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222)