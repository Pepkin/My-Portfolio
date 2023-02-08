function focused() {
    const input = document.querySelectorAll('input')

    for(let box of input){
        box.addEventListener('focus', () => {
            box.parentElement.className = 'focused'
        })
        box.addEventListener('blur', () => {
            box.parentElement.className = 'blurred'
        })
    }
    
}