function extractText() {
    const list = document.getElementById('items');
    const text = Array.from(list.children);
    const result = text.map(li => li.textContent).join('\n');
    const output = document.getElementById('result');
    output.value = result;
}