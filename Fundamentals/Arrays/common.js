function common(array1, array2){
//     let holder1 = 0
//     let holder2 = 0
//     let common = 0
//     for(let i = 0; i < array1.length; i++){
//         holder1 = array1[i]
//         for(let p = 0; p < array2.length; p++){
//             holder2 = array2[p]
//             if(holder1 === holder2){
//                 console.log(holder1);
//             }
//         }
//     }
// }
    for(const element of array1){
        if(array2.includes(element)){
            console.log(element);
        }
    }
}
common(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']
)