function printeveryNthElementfromanArray(arr, number){
    return arr.filter((elem, index) => index % number == 0)
}
printeveryNthElementfromanArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)