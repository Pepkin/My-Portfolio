function lastKNumbers(n, k){
    let result = [1];
    let sum = 0;
    

    for(let i = 0; i < n - 1; i++){
        let manqk = i - k + 1;
        if(manqk < 0){
            manqk = 0;
        }
        for(let j = i; j >= manqk; j--){
            if((i - k) < 0){

            }
            sum += result[j];
        }
        result.push(Number(sum));
        sum =0;
    }
    return result;
}
lastKNumbers(6,3)
lastKNumbers(8,2)