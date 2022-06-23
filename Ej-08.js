/* Escribe un programa para una empresa de alquiler de coches. Tendremos que
preguntar al usuario la edad. Si el usuario es menor de 18, no podrá alquilar un
vehículo y se lo diremos en pantalla. En caso de ser mayor de edad, le preguntamos
si tiene carnet de conducir. Si la respuesta es negativa, no podrá alquilar un coche y
se lo advertiremos por pantalla. Si es mayor de edad le pediremos tanto nombre
como apellido , ciudad de recogida del vehículo y número de días que quiere alquilar
el coche (el alquiler del coche por día tiene un coste de 25 euros y en caso que lo
alquile una semana, el coste será de 150 euros). Imprimir por pantalla los datos del
cliente que vaya a alquilar el coche y el coste total del alquiler. */


let div1 = document.createElement('div')
let edad = parseInt(window.prompt('Por favor, introduzca su edad'))


 

if(edad >= 18){
    let carnet = (window.prompt('Por favor, indique si tiene carnet de conducir. \n S - Sí \n N - No').substring(0,1)).toUpperCase()
    
    if(carnet === 'S'){
        let nombre = window.prompt('Por favor, introduzca su nombre').toUpperCase()
        let apellido = window.prompt('Por favor, introduzca su apellido').toUpperCase()
        let ciudad = window.prompt('Por favor, introduzca la ciudad de recogida del vehículo').toUpperCase()
        let dias = parseInt(window.prompt('Por favor, introduzca el número de días que desea alquilar el vehículo'))
        let semanas = parseInt(dias/7)
        let alquiler = document.createElement('p')
        
        document.body.appendChild(alquiler)

        semanas > 1
        ? alquiler.innerHTML = (`El alquiler del coche estará registrado a nombre de: ${nombre} ${apellido} y podrá ser recogido en ${ciudad} por un costo total de ${(semanas * 150) + ((dias - (semanas * 7)) * 25)} euros`)
        : alquiler.innerHTML = (`El alquiler del coche estará registrado a nombre de: ${nombre} ${apellido} y podrá ser recogido en ${ciudad} por un costo total de ${dias * 25} euros`)
    }else{
        div1.innerHTML = '<p> Lo sentimos, pero necesita un carnet para poder gestionar el alquiler del coche </p>'
        document.body.appendChild(div1)}
 

}else{
    div1.innerHTML = '<p> Lo sentimos, pero necesita ser mayor de edad para poder gestionar el alquiler del coche </p>'
    document.body.appendChild(div1)}

