function restaurant(arr){
    let budeget = arr[0]
    let students = arr[1]
    let flourPrice = arr[2]
    let oneEggPrice = arr[3]
    let apronPrice = arr[4]
    let sum = 0
    let freePackages = 0

    freePackages = Math.floor(students / 5)

    sum = (students - freePackages) * flourPrice
    sum += students * 10 * oneEggPrice
    sum += (students + Math.ceil(students * 0.2)) * apronPrice

    let diff = Math.abs(sum - budeget)

    if(sum < budeget){
        console.log(`Items purchased for ${sum.toFixed(2)}$.`);
    }else{
        console.log(`${diff.toFixed(2)}$ more needed.`);
    }
}
    //1 Student - 1 flour, 10 eggs, 1 apron

    

restaurant([946, 4, 12.05, 0.42, 27.89])