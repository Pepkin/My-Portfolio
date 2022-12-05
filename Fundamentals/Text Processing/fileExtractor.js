function fileExtractor(input){
    let path = input.split(`\\`)
    let file = path.pop()
    const lastComma = file.lastIndexOf('.')
    const fileName = file.substring(0,lastComma);
    const extension = file.substring(lastComma+1) 
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
fileExtractor('C:\\Internal\\training-internal\\Template.pptx')