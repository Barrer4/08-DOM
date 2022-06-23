/* Crea un programa que te pida 2 números. Mostrar en pantalla la suma, la resta, la
multiplicación, la división y el resto de esos 2 números. Mostrar cada operación con
un color y un color de fondo distintos. */

let num1 = parseInt(window.prompt('Por favor, introduzca un número'))
let num2 = parseInt(window.prompt('Por favor, introduzca otro número'))

let sDiv = document.createElement('div')
let rDiv = document.createElement('div')
let mDiv = document.createElement('div')
let dDiv = document.createElement('div')
let rtDiv = document.createElement('div')

sDiv.innerHTML = (`<p id= "suma"> Suma = ${num1 + num2}</p>`)
rDiv.innerHTML = (`<p id=resta> Resta = ${num1 - num2}</p>`)
mDiv.innerHTML = (`<p id=multi> Multiplicación = ${num1 * num2}</p>`) 
dDiv.innerHTML = (`<p id=div> División = ${num1 / num2}</p>`) 
rtDiv.innerHTML = (`<p id=rest> Resto = ${num1%num2}</p>`)

document.body.appendChild(sDiv).style.color = "yellow"
document.body.appendChild(rDiv).style.color = "orange"
document.body.appendChild(mDiv).style.color = "green"
document.body.appendChild(dDiv).style.color = "purple"
document.body.appendChild(rtDiv).style.color = "red"

document.getElementById('suma').style.backgroundColor = "purple"
document.getElementById('resta').style.backgroundColor = "blue"
document.getElementById('multi').style.backgroundColor = "red"
document.getElementById('div').style.backgroundColor = "yellow"
document.getElementById('rest').style.backgroundColor = "green"


/* Esto se ve terrible, seguramente hay una manera más corta de hacerlo pero todo me da error*/