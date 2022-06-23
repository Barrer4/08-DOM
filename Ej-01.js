/* Crea un título y un párrafo en un archivo JS y haz que aparezcan en pantalla. */

let div1 = document.createElement('div') 
div1.innerHTML = (`<h1>Yo soy un título</h1> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vehicula venenatis nulla, vitae laoreet lacus volutpat eu. Cras lacinia et tellus in luctus. Sed interdum convallis ultricies. Vivamus lectus mi, venenatis vel ipsum id, feugiat interdum nulla. Nam non purus in nulla iaculis consequat vitae in ante. Nullam dictum pulvinar sagittis. Aenean finibus venenatis massa at malesuada. Etiam volutpat risus at nunc ornare, eget mattis tortor tincidunt. Nunc eget orci pellentesque, ullamcorper nisi a, lobortis odio. Donec non vestibulum tortor, at ullamcorper turpis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Duis at lorem at leo suscipit dapibus id id nibh. Nunc id malesuada felis. Duis euismod urna in scelerisque molestie. Suspendisse at tellus eget justo viverra dapibus.</p>`)
document.body.appendChild(div1)


