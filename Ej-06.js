/* Crea un programa que te pregunte qué operación deseas realizar (Suma, Resta,
Multiplicación, División y Resto). Después te pedirá dos números y aparecerán los
dos números introducidos y el resultado de la operación de forma visual. */

let num1 = parseInt(window.prompt('Por favor, introduzca un número'))
let num2 = parseInt(window.prompt('Por favor, introduzca otro número'))
let op = parseInt(window.prompt('Por favor, indique el tipo de operación a realizar: \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División \n 5 - Resto'))

let div1 = document.createElement('div')
document.body.appendChild(div1)

switch (op) {
    case 1:
        div1.innerHTML = (`<p id= "suma"> ${num1} + ${num2} = ${num1 + num2}</p>`)

        break;
    case 2:
        div1.innerHTML = (`<p id= "resta"> ${num1} - ${num2} = ${num1 - num2}</p>`)    

        break;
    case 3:
        div1.innerHTML = (`<p id= "multi"> ${num1} x ${num2} = ${num1 * num2}</p>`)    

        break;
    case 4:
        div1.innerHTML = (`<p id= "div"> ${num1} / ${num2} = ${num1 / num2}</p>`)    

    case 5:
        div1.innerHTML = (`<p id= "resto"> ${num1} % ${num2} = ${num1 % num2}</p>`)           
        break;

    default:
        div1.innerHTML = (`<p> No ha introducido una operación válida. Por favor, refresque la página </p>`)
        break;
}
