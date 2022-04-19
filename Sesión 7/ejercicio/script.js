let personajes = [
    {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
    },
    {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
    },
    {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
    },
    {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
    },
    {
        "id": 5,
        "name": "Jerry Smith",
        "status": "Alive",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
    },
    {
        "id": 6,
        "name": "Adjudicator Rick",
        "status": "Dead",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/8.jpeg"
    },
    {
        "id": 7,
        "name": "Agency Director",
        "status": "Dead",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/9.jpeg"
    },
    {
        "id": 8,
        "name": "Alan Rails",
        "status": "Dead",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/10.jpeg"
        
    },
    {
        "id": 9,
        "name": "Albert Einstein",
        "status": "Dead",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/11.jpeg"
    },
    {
        "id": 10,
        "name": "Alexander",
        "status": "Dead",
        "species": "Human",
        "image": "https://rickandmortyapi.com/api/character/avatar/12.jpeg"
    }
]

const section = document.getElementById('root')
const btnLive = document.getElementById('btnLive')
const btnDead = document.getElementById('btnDead')

btnLive.addEventListener('click', ()=> {
    section.innerHTML = ""
    const life = personajes.filter((person)=> person.status === "Alive")
    life.forEach((value)=>{
        const { image, id } = value
        section.innerHTML += `
        <div onclick="mostrarDetalle(${id})" class="card" id="card">
            <img src="${image}" alt="personaje">
        </div>
        `
    })
})

function mostrarDetalle(id){
    let description = personajes.find((elemt)=> elemt.id === id)
    const { name } = description
    alert(name)
}