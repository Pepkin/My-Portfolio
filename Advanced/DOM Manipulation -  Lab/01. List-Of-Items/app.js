function addItem() {
    //read input value
    const text = document.getElementById('newItemText').value;
    //create new <li>
    const li = document.createElement('li');
    li.textContent = text;
    //create ref to elem
    const ref = document.getElementById('items')
    //add new list to <li>
    ref.appendChild(li);
    
}