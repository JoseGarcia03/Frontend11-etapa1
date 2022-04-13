
let btn = document.getElementById("btn")
const input = document.getElementById('name')
const form = document.getElementById('form')

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
// input.addEventListener('blur', ()=> {
//     input.style.background = 'red'
// })

// document.addEventListener('DOMContentLoaded', ()=> {
//     console.log('Se cargo el DOM')
// })

// Evento Change
input.addEventListener('change', (x)=> {
    console.log(x.target.value)
})

// Evento submit
form.addEventListener('submit', function(e){
    e.preventDefault()
    console.log("Hola")
})