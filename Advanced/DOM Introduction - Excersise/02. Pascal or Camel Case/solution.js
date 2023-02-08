function solve() {
  const input = document.getElementById('text').value;
  const neededCase = document.getElementById('naming-convention').value;
  let result = ''
  const toPascal = (input) => 
    input
    .split(' ')
    .map(n => n[0].toUpperCase() + n.slice(1).toLowerCase())
    .join('')
  

  const toCamelCase = (input) => {
    let text = toPascal(input)
    return text[0].toLowerCase() + text.slice(1)
  }

  if(neededCase === 'Pascal Case'){
    result += toPascal(input)
  }else if(neededCase === 'Camel Case'){
    result += toCamelCase(input)
  }else{
    result += 'Error!'
  }

  const output = document.getElementById('result');
  output.textContent = result;
}