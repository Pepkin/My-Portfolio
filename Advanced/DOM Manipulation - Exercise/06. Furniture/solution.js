function solve() {
  const textArea = document.querySelector('textarea');
  const [generateBtn, buyBtn] = Array.from(document.querySelectorAll('button'));
  const directory = document.querySelector('.table tbody tr');
 

  generateBtn.addEventListener('click', generate)
  buyBtn.addEventListener('click', buy)

  function generate(event){
    const element = JSON.parse(textArea.value)
    const tr = document.createElement('tr')
    const td = document.createElement('td')
    const img = document.createElement('img')
    img.src = element.img
    td.appendChild(img)
    tr.appendChild(td)
    const td1 = document.createElement('td')
    const p1 = document.createElement('p')
    p1.textContent = element.name
    td1.appendChild(p1)
    tr.appendChild(td1)
    const td2 = document.createElement('td')
    const p2 = document.createElement('p')
    p2.textContent = Number(element.price)
    td2.appendChild(p2)
    tr.appendChild(td2)
    const td3 = document.createElement('td')
    const p3 = document.createElement('p')
    p3.textContent = Number(element.decFactor)
    td3.appendChild(p3)
    tr.appendChild(td3)
    const td4 = document.createElement('td')
    const input = document.createElement('input')
    input.type = 'checkbox'
    td4.appendChild(input)
    tr.appendChild(td4)
  }
}