function encodeAndDecodeMessages() {
    const textAreas = document.querySelectorAll('textarea')
    const buttons = document.querySelectorAll('button')

    buttons[0].addEventListener('click', encode);
    buttons[1].addEventListener('click', decode);

    function encode(event){
        const input = textAreas[0].value 
        let encodedMessage = ''
         for(let i = 0; i < input.length; i++){
            const element = input[i]
             encodedMessage += String.fromCharCode(element.charCodeAt(0) + 1)
         }
         textAreas[1].value = encodedMessage
         textAreas[0].value = ''
    }
    function decode(event){
        const input = textAreas[1].value 
        let decodedMessage = ''
         for(let i = 0; i < input.length; i++){
            const element = input[i]
             decodedMessage += String.fromCharCode(element.charCodeAt(0) - 1)
         }
         textAreas[1].value = decodedMessage
    }
}