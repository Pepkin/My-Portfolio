function palindrome(index){
    normalP = 0
    newP = 0
    holder = ""

    for(let i = 0; i < index.length; i++){
        normalP = index[i].toString()

        for(let b = normalP.length - 1; b > -1; b--){
            
            holder += normalP[b]
            
        }
        newP = holder
        newP = Number(newP)
        normalP = Number(normalP)

        if(newP === normalP){
            console.log(true);
        }else{
            console.log(false);
        }
        holder = ""
    }
    
}
palindrome([32,2,232,1010])