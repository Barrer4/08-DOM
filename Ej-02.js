/* Crea una variable con tu nombre. Después haz un párrafo que diga “Hola, me llamo (tu nombre)”. */

let nombre = 'Sandra'
let parrafo1 = document.createElement('div')
parrafo1.innerHTML = (`<p>Hola me llamo ${nombre}</p>`)

document.body.appendChild(parrafo1)


