function lockedProfile() {
    Array.from(document.querySelectorAll('.profile button')).forEach((e) => 
       e.addEventListener('click', onClick)
    );

    function onClick(event){
        const parent = event.target.parentElement;
        const unlockedCheck = parent.querySelector('input[value="unlock"]')
        if(unlockedCheck.checked){
            const hiddemDiv = parent.querySelector('div');
            if(hiddemDiv.style.display != 'block'){
                hiddemDiv.style.display = 'block'
                event.target.textContent = 'Hide it'
            }else{
                event.target.textContent = 'Show more'
                hiddemDiv.style.display = 'none'
            }
        }
    }
}