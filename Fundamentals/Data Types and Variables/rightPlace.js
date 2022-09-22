function rightPlace(given, char, goal){
    let result = given.replace('_',char)
    if(result == goal){
        console.log('Matched');

    }else{
        console.log('Not Matched');
    }
}
rightPlace('Str_ng', 'i', 'String')