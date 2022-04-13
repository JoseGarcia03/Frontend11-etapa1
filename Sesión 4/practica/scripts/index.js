
let btn = document.getElementById("btn")
const form = document.getElementById('form')

// Capuramos los inputs del formulario
const input = document.getElementById('name')
const lastName = document.getElementById('lastName')

// Escuchar evento con funcion flecha
// btn.addEventListener('click', ()=>{
//     alert('Evento Click')
// })

// Escuchar eventp con funcion anonimas
// btn.addEventListener('click',function (){
//     alert('Evento Click')
// })

// Funcion normal
// function accion(){
//     alert('Evento Click')
// }

// btn.addEventListener('mouseover', function(){
//     btn.style.background = "crimson"
// })

// btn.addEventListener('mouseout', ()=> {
//     btn.style.background = "white"
// })

// Evento Focus
// input.addEventListener('focus', ()=> {
//     input.style.outlineColor = 'red'
// })

// Evento Blur
// input.addEventListener('blur', (e)=> {
//     if (input.value.length < 5) {
//         alert('La contraseña debe ser minimo de 6 letras')
//         input.style.background = 'red'
//     }
// })

// document.addEventListener('DOMContentLoaded', ()=> {
//     console.log('Se cargo el DOM')
// })

// Evento Change
input.addEventListener('change', ({ target })=> {
    console.log(target.value)
})


// Evento submit
// form.addEventListener('submit', function(e){
//     e.preventDefault()
//     if (input.value, lastName.value === "") {
//         alert('Debes llenar todos los campos')
//     }
//     console.log(typeof(input.value))
// })

// OBJETOS
let heigth = "200cm"

let geekGirl = {
    name: "Maria",
    age: 31,
    "is married": false
}

let ventilador = {
    altura: heigth,
    color: "negro",
    potencia: "100W",
    helices: { 
        tamaño: "10cm",
        material: "plastico",
        color: "blanco"
    },
    precio: {
        precio1: 20,
        precio2: 40
    }
}

// console.log(ventilador.helices.hasOwnProperty("material"))

// console.log(ventilador.color)

// ventilador.color = "azul"

// console.log(ventilador.color)

// let mentor = {}

// console.log(mentor)

// mentor.nombre = "Jose"
// mentor.edad = 22

// console.log(mentor.hasOwnProperty("edad"))

// delete mentor.edad

// console.log(mentor.hasOwnProperty("edad"))


// DESESTRUCTURACION

let miObjeto = {
    tamano: 'Grande',
    color: "Azul",
    precio: 2000,
    cantidad: 7
}

const { tamano, color } = miObjeto

console.log(tamano, color)
