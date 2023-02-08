function sorting(arr){
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b))
    console.log(arr.join('\n'));
}
sorting(['alpha', 
'beta', 
'gamma'])
console.log('------------------------');
sorting(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'])
console.log('------------------------');
sorting(['test', 
'Deny', 
'omen', 
'Default'])