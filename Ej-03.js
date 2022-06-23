/* Crea un programa que te pida un nombre y una edad. Si la edad es menor a 18 años
mostrar en pantalla “Hola (nombre), eres menor de edad.”. Si es mayor mostrar en
pantalla “Hola (nombre), eres mayor de edad.”. Hacedlo con if, switch y condicional
ternario. */

let nombre = window.prompt('Por favor, introduzca su nombre:')
let edad = parseInt(window.prompt('Por favor, introduzca su edad:'))
let frase = document.createElement('div')




/*
if(edad < 18){
    frase.innerHTML = (`<p>Hola ${nombre}, eres menor de edad.</p>`)
    document.body.appendChild(frase)
}else if(edad >= 18){
    frase.innerHTML = (`<p>Hola ${nombre}, eres mayor de edad.</p>`)
    document.body.appendChild(frase)
}

switch (edad) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        frase.innerHTML = (`<p>Hola ${nombre}, eres menor de edad.</p>`)
        document.body.appendChild(frase)
        break;
    default:
        frase.innerHTML = (`<p>Hola ${nombre}, eres mayor de edad.</p>`)
        document.body.appendChild(frase)
        break;
}

*/

edad < 18
? document.body.appendChild(frase).innerHTML = (`<p>Hola ${nombre}, eres mayor de edad.</p>`)
: document.body.appendChild(frase).innerHTML = (`<p>Hola ${nombre}, eres mayor de edad.</p>`)
