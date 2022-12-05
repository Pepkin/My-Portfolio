function charCode(char1, char2){
    let rangeStart = Math.min(char1.charCodeAt(),char2.charCodeAt())
    let rangesEnd = Math.max(char1.charCodeAt(),char2.charCodeAt())
    let finalString = ''
    for(let currentChar = rangeStart + 1; currentChar < rangesEnd; currentChar++){
        let singleChar = String.fromCharCode(currentChar)
        finalString += `${singleChar} `

    }
    console.log(finalString);
}
charCode('#',':')