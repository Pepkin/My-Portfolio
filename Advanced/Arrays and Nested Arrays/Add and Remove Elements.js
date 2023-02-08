function addandRemoveElements(arr){
    let result = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        if(command === 'add'){
            result.push(counter++)
        }else if(command === 'remove'){
            result.pop(counter++)
        }
    }
    if(!result.length){
        console.log('Empty');
    }else{
        console.log(result.join('\n'));
    }
}
addandRemoveElements(['add', 
'add', 
'add', 
'add'])
console.log('------------------');
addandRemoveElements(['remove', 
'remove', 
'remove'])