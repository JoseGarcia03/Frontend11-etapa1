// CallBacks
function crearCita(cita, logCita){
    let miCita = '¡Como yo siempre digo, ' + cita
    logCita(miCita)
}

function logCita(miCita){
    console.log(miCita)
}

crearCita("come siempre tus vegetales!", logCita)


function solicitudServidor(consulta, obtenerResultados){
    setTimeout(function(){
        let respuesta = consulta + 'lleno!'
        obtenerResultados(respuesta)
    }, 5000);
}

function obtenerResultados(resultados){
    console.log("Respuesta del servidor" + resultados)
}

solicitudServidor("¡El vaso esta medio", obtenerResultados)

let array = [5, 4, 3, 1]

// ForEach
// const f = function(){
//     console.log("Elemento")
// }
// array.forEach(f)

array.forEach((value, index, arr)=> {
    console.log(index, value)
})

// every
console.log(array.every((value) => value >= 10))

// map
let array2 = ['Hola', 'Dia', 'Noche', 'Sol']

let newArr = array2.map((value)=> value.length)
console.log(newArr)

// filter
let mascotas = [{nombre: "Flobby"}, {nombre: "Bruno"}, {nombre: "sacha"}]

let filtro = mascotas.filter((value)=> value.nombre.includes("o"))
console.log(filtro)