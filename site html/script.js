// cache the DOM 
var button= document.getElementById("button")
var body = document.getElementById("body")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var img = document.getElementById("imagine")
var asteptari = document.getElementById("asteptari")
//adaugat de functie
button.addEventListener("click",altaViata)
function altaViata()
{
    nume.innerHTML = " Functie: Sefu' lor  "
    prenume.innerHTML = " Locul de munca: La munca, nu la intins mana "
    img.src="poza2.jpg"
    asteptari.innerHTML = " Experiente : <ol><li>Las ciubuc cat un salariu</li>"
    body.style.backgroundColor="orange"
    body.style.color="blue"
    body.style.img="width:300x height:300px"
}