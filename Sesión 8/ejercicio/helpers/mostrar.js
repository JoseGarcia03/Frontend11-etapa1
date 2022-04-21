export function mostrarCards(data, container){
    container.innerHTML = ""
    data.forEach((element)=>{
        const { img } = element
        container.innerHTML += `<img src="${img}">`
    })
}