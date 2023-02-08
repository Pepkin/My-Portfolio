function calc() {
    const num1 = document.getElementById('num1')
    const num2 = document.getElementById('num2')
    let number1 = Number(num1.value);
    let number2 = Number(num2.value);
    const output = document.getElementById('sum')
    const result = number1 + number2
    output.value = result
}
