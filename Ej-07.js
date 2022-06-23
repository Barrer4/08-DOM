/* Crea una página web con su Header (con tres enlaces), su Main(con tres divs,
dentro de cada div podéis meter lo que queráis por ejemplo una noticia) y su Footer
(con un enlace al inicio de la página). Los enlaces del Header nos deberían llevar
cada uno a uno de los divs. */

//header
let header = document.createElement('div')
document.body.appendChild(header)

header.innerHTML =
`<a href= #div1 id=header> Go to 1</a> 
<a href= #div2> Go to 2</a> 
<a href= #div3> Go to 3</a> 
`




//main
let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')

div1.innerHTML = (`<p id= "div1"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem libero, vulputate quis quam eget, ultrices semper sem. Morbi lobortis, felis eget auctor gravida, enim sem laoreet turpis, a hendrerit mi ex faucibus erat. Etiam ornare nulla non venenatis blandit. Fusce facilisis odio sit amet quam interdum, et sagittis odio sollicitudin. In at sapien porta, luctus diam et, posuere tortor. Mauris dignissim quis orci eu egestas. Mauris vitae pulvinar sapien, vel placerat tellus. Aliquam ac cursus leo. Nullam turpis felis, ullamcorper vel imperdiet eu, tempor a leo. Sed finibus dignissim tellus sit amet pretium. Donec sollicitudin, purus non dapibus congue, leo orci imperdiet massa, a pulvinar est urna non risus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec eleifend tellus. Cras pulvinar nibh et porttitor pretium. Sed tortor libero, fringilla vel tincidunt sit amet, auctor sit amet lacus. Quisque fermentum, urna ut commodo iaculis, dolor risus lacinia elit, sed imperdiet eros est ac diam. Vestibulum in orci eu lacus blandit tempor et semper ipsum. Duis in finibus orci, et semper est. Cras sit amet pulvinar velit, ac laoreet arcu. Nulla congue diam arcu, id euismod tortor interdum mollis. Nulla efficitur scelerisque dapibus. Phasellus aliquam non turpis eget faucibus. Mauris dictum elit eget turpis congue ultricies. Maecenas in lacus vel metus pharetra eleifend. Sed vel lacus hendrerit, venenatis mi ut, scelerisque velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>`)
div2.innerHTML = (`<p id="div2"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem libero, vulputate quis quam eget, ultrices semper sem. Morbi lobortis, felis eget auctor gravida, enim sem laoreet turpis, a hendrerit mi ex faucibus erat. Etiam ornare nulla non venenatis blandit. Fusce facilisis odio sit amet quam interdum, et sagittis odio sollicitudin. In at sapien porta, luctus diam et, posuere tortor. Mauris dignissim quis orci eu egestas. Mauris vitae pulvinar sapien, vel placerat tellus. Aliquam ac cursus leo. Nullam turpis felis, ullamcorper vel imperdiet eu, tempor a leo. Sed finibus dignissim tellus sit amet pretium. Donec sollicitudin, purus non dapibus congue, leo orci imperdiet massa, a pulvinar est urna non risus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec eleifend tellus. Cras pulvinar nibh et porttitor pretium. Sed tortor libero, fringilla vel tincidunt sit amet, auctor sit amet lacus. Quisque fermentum, urna ut commodo iaculis, dolor risus lacinia elit, sed imperdiet eros est ac diam. Vestibulum in orci eu lacus blandit tempor et semper ipsum. Duis in finibus orci, et semper est. Cras sit amet pulvinar velit, ac laoreet arcu. Nulla congue diam arcu, id euismod tortor interdum mollis. Nulla efficitur scelerisque dapibus. Phasellus aliquam non turpis eget faucibus. Mauris dictum elit eget turpis congue ultricies. Maecenas in lacus vel metus pharetra eleifend. Sed vel lacus hendrerit, venenatis mi ut, scelerisque velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>`)
div3.innerHTML = (`<p id="div3"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lorem libero, vulputate quis quam eget, ultrices semper sem. Morbi lobortis, felis eget auctor gravida, enim sem laoreet turpis, a hendrerit mi ex faucibus erat. Etiam ornare nulla non venenatis blandit. Fusce facilisis odio sit amet quam interdum, et sagittis odio sollicitudin. In at sapien porta, luctus diam et, posuere tortor. Mauris dignissim quis orci eu egestas. Mauris vitae pulvinar sapien, vel placerat tellus. Aliquam ac cursus leo. Nullam turpis felis, ullamcorper vel imperdiet eu, tempor a leo. Sed finibus dignissim tellus sit amet pretium. Donec sollicitudin, purus non dapibus congue, leo orci imperdiet massa, a pulvinar est urna non risus.

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nec eleifend tellus. Cras pulvinar nibh et porttitor pretium. Sed tortor libero, fringilla vel tincidunt sit amet, auctor sit amet lacus. Quisque fermentum, urna ut commodo iaculis, dolor risus lacinia elit, sed imperdiet eros est ac diam. Vestibulum in orci eu lacus blandit tempor et semper ipsum. Duis in finibus orci, et semper est. Cras sit amet pulvinar velit, ac laoreet arcu. Nulla congue diam arcu, id euismod tortor interdum mollis. Nulla efficitur scelerisque dapibus. Phasellus aliquam non turpis eget faucibus. Mauris dictum elit eget turpis congue ultricies. Maecenas in lacus vel metus pharetra eleifend. Sed vel lacus hendrerit, venenatis mi ut, scelerisque velit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>`)

document.body.appendChild(div1)
document.body.appendChild(div2)
document.body.appendChild(div3)



//footer
let footer = document.createElement('div')
footer.innerHTML =
`<a href= #header> Go back to header</a> `


document.body.appendChild(footer)



//Tuve que invertir como 3 días para resolver este