// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function semClick(event) {
   event.preventDefault()
    
}
function semTecla(event) {
    let letra = event.key
    if (letra !== 'a')
    event.preventDefault()
}

HREF_LINK.addEventListener("click", semClick)
INPUT_CHECKBOX.addEventListener("click", semClick)
INPUT_TEXT.addEventListener("keypress", semTecla)