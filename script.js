//Animação das imagens

let time = 5000,
    currentImageIndex = 0,
    images = document.querySelectorAll("#slider img")
    max = images.length;




function nextImage() {

    images[currentImageIndex].classList.remove("selected")

    currentImageIndex++


    if(currentImageIndex >= max)
    currentImageIndex = 0

    images[currentImageIndex].classList.add("selected")
}



function start() {
    setInterval(() => {
        //troca de imagem
        nextImage()
    }, time)
}


window.addEventListener("load", start)




//Desabilitar ou nao o botão de Entrar
/*
const username = document.querySelector('#username')
const password = document.querySelector('#password')

username.addEventListener('keypress', toggleButton)
password.addEventListener('keypress', toggleButton)
function toggleButton() {
    const usernameinput = document.querySelector('#username')
    const passwordinput = document.querySelector('#password')
    

    if (usernameinput.value && passwordinput.value) {
        document.querySelector('#botao').disabled = false;
        return
    }
    document.querySelector('#botao').disabled = true;
} 
*/




//2ª tentativa habilitar botao

function btnActivation(){

    if(!document.getElementById('password' || 'username').value.length){
        document.getElementById("start_button").disabled = true;            
    }else { 
        document.getElementById("start_button").disabled = false;

    }           
}


