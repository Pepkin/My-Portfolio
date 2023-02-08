function calculator() {
    let sumElement1;
    let sumElement2;
    let resultElement;

    return {
        init: (selector1, selector2, resultSelectror) => {
            sumElement1 = document.querySelector(selector1)
            sumElement2 = document.querySelector(selector2)
            resultElement = document.querySelector(resultSelectror)
        },
        add: () => {
            resultElement.value = +sumElement1.value + +sumElement2.value
        },
        subtract: () => {
            resultElement.value = +sumElement1.value - +sumElement2.value
        }
    }
}
const calculate = calculator (); 
calculate.init ('#num1', '#num2', '#result'); 
