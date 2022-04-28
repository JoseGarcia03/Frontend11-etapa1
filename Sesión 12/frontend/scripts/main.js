import getHeroes from "../modules/getHeroes.js";  //Importacion por defecto
import printHeroes from "../modules/printHeroes.js";
import search from "../modules/search.js";


const url = "https://heroes-app-geek.herokuapp.com/heroes"
const main = document.getElementById('main')
const form = document.getElementById('form')

const heroes = await getHeroes(url)
printHeroes(heroes, main)


form.addEventListener('submit', (e)=> {
    e.preventDefault()
    const input = document.getElementById('search').value
    const results = search(input, heroes)
    if(results.length !== 0){
        printHeroes(results, main)
    }else {
        main.textContent = "NO HAY RESULTADOS"
    }
})