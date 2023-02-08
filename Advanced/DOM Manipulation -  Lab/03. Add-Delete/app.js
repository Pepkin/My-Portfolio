function addItem() {
        
    const text = document.getElementById('newItemText').value;
    
    const li = document.createElement('li');
    li.textContent = text;
    
    const ref = document.getElementById('items')
   
    ref.appendChild(li);

    const deleteBtn = document.createElement('a');
    deleteBtn.href = "#"
    deleteBtn.textContent = '[Delete]'
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', click)

    function click(event){
        li.remove();
    }
    
}