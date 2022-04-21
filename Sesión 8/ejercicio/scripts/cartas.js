import { mostrarCards } from '../helpers/mostrar.js'
import { cards } from '../data/data.js'

let saludo = document.getElementById("saludo");
const cardsC = document.getElementById('cards')
let nombre = localStorage.getItem("nombre");
saludo.textContent = `Hola ${nombre}, te damos la bienvenida a Clash Royale`



mostrarCards(cards, cardsC)