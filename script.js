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

function toggleButton() {
    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    if (username && password) {
        document.querySelector('#botao').disabled = false;
        return
    }
    document.querySelector('#botao').disabled = true;
}