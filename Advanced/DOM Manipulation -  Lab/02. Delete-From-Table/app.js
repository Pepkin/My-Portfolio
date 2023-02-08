function deleteByEmail() {
    const input = document.querySelector('input[name="email"]').value;
    const rows = document.querySelectorAll('#customers tbody tr')
    const rowArray = Array.from(rows);

    let deleted = false

    for(let row of rowArray){
        const col = row.children[1]

        if(col.textContent == input){
            row.remove();
            deleted = true
        }
    }

    const message = document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.';
}