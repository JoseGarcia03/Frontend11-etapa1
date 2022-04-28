//Metodos HTTP
// GET POST PUT DELETE

// API
const mentores = "http://localhost:4000/mentores"
// const estudiantes = "http://localhost:4000/estudiantes"

async function getMentores(){

    try { // Intenta varias veces hacer el fetch
        const res = await (await fetch(mentores)).json()
        // res.forEach(elemt => {
        //     const { nombre , Edad } = elemt
        //     document.write(`<h1>${nombre}</h1>`)
        //     document.write(`<h2>${Edad}</h2>`)
        // })
        // const db = await res.json()
    } catch (error) { // Captura el error
        console.log(error)
    }

    // fetch(mentores) // Hace GET
    // .then((res)=> res.json())
    // .then((data)=> console.log(data))
};

getMentores()
