const modal = document.querySelector(".modal")
const maskIframe = document.querySelector(".mask-modal")

function cliqueModal(){
    modal.style.left = '50%'
    maskIframe.style.visibility = 'visible'
    modal.style.transition = '0.5s linear'
}
function hiddenModal(){
    modal.style.left='-30%'
    maskIframe.style.visibility='hidden'
    modal.style.transition='0.4 ease in out'
}

function smoothScroll(target) {
    
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}


document.getElementById('home-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    smoothScroll('#home-section'); // Rola até a seção Home
});

document.getElementById('about-link').addEventListener('click', function(event) {
    event.preventDefault(); 
    smoothScroll('#about-section');
});

function cliqueModal() {
    document.querySelector('.modal').style.display = 'block';
    document.querySelector('.mask-modal').style.display = 'block';
}

function hiddenModal() {
    document.querySelector('.modal').style.display = 'none';
    document.querySelector('.mask-modal').style.display = 'none';
}

