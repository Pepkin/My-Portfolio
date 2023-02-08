function rotator(arr, rotations){
    rotator = 0;
    while(rotator <= rotations){
        arr.unshift(arr.pop())
    }
    return arr.join(' ')
}
rotator(['1', 
'2', 
'3', 
'4'], 
2)