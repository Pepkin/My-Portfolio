function toggle() {
    const button = document.getElementsByClassName('button')[0]
    const text = document.getElementById('extra')
    const buttonContent = button.textContent;

    if(buttonContent === 'More'){
        text.style.display = 'block'
        button.textContent = 'Less'
    }else{
        text.style.display = 'none'
        button.textContent = 'More'
    }
}