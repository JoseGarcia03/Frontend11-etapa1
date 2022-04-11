// console.log("Prueba del objeto document", document);

// Este captura solo por ID
const div = document.getElementById("contenedor");

// Este captura todos los class que coincidan
const div2 = document.getElementsByClassName('contain')
// console.log("capturado por className", div2)

const h3 = document.getElementsByTagName('h3')
// console.log("Capturado por etiqueta", h3)

// Este captura por ID, Class y Etiqueta
const jose = document.querySelector("h3")

// console.log(jose)

const allDiv = document.querySelectorAll('div')
// console.log(allDiv)


const image = document.querySelector('img')

image.setAttribute('src', 'https://pics.filmaffinity.com/Red-326602450-large.jpg')
image.setAttribute('id', 'poster')
// console.log(image)


const titulo = document.querySelector('h3');
titulo.setAttribute('class', 'title-pink');


const div4 = document.querySelector('div');
div4.classList.replace('hola', 'jose');

console.log(div4.classList);