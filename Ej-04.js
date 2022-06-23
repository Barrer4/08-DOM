/* Lo mismo que en el ejercicio 3. Pero si es menor de edad que el mensaje sea rojo y
si es mayor de edad que el mensaje sea verde. */


let nombre = window.prompt('Por favor, introduzca su nombre:')
let edad = parseInt(window.prompt('Por favor, introduzca su edad:'))
let frase = document.createElement('p')



if(edad < 18){
    frase.innerHTML = (`<p>Hola ${nombre}, eres menor de edad.</p>`)
    document.body.appendChild(frase).style.color = "red"
}else if(edad >= 18){
    frase.innerHTML = (`<p>Hola ${nombre}, eres mayor de edad.</p>`)
    document.body.appendChild(frase).style.color = "green"
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
        document.body.appendChild(frase).style.color = "red"
        break;
    default:
        frase.innerHTML = (`<p>Hola ${nombre}, eres mayor de edad.</p>`)
        document.body.appendChild(frase).style.color = "green"
        break;
}



edad < 18
? document.body.appendChild(frase).innerHTML = (`<p>Hola ${nombre}, eres menor de edad.</p>`)
: document.body.appendChild(frase).innerHTML = (`<p>Hola ${nombre}, eres mayor de edad.</p>`)

/*No conseguí añadir el color en el ternario*/