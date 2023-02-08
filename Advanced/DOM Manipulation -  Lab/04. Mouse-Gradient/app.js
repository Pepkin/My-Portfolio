function attachGradientEvents() {
    const box = document.getElementById('gradient')
    box.addEventListener('mousemove', hover)
    const result = document.getElementById('result')

    function hover(event){
        let percent = Math.floor(event.offsetX / 3);
        result.textContent = percent + '%'
    }
}