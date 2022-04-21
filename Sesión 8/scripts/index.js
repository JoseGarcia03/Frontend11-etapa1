let nombre = "Jose Garcia"


localStorage.setItem('Mentor', 'Gustavo')
localStorage.setItem('Nombre', 'Juan')
localStorage.setItem('Hora', "['Hola', 'Adios']")
// sessionStorage.setItem('Mentor', nombre)

const mentor = localStorage.getItem("Mentor")
console.log(mentor)


// setTimeout(() => {
//     localStorage.setItem('Mentor', 'Jose')
// }, 2000);

const arreglo = {primero: "Lunes", segundo: "Martes", tercero: "Miercoles"}


localStorage.setItem('Dias de la semana', JSON.stringify(arreglo))

let dias = JSON.parse(localStorage.getItem('Dias de la semana'))

console.log(dias.primero)

//enviar
// export const flores = "flores"


//recibirla
// import { flores } from "./Medellin"