
/* ================= MENU ===========================*/
let contador = 0
let nav = document.getElementById('nav')

function clickBTN() {
    
    
    nav.classList.toggle('active')

    
}

let targets = document.getElementsByClassName('fechar')
for(let c = 0; c < targets.length; c++) {

    targets[c].addEventListener('click', () => {
        nav.classList.toggle('active')
    })
}



/* ================= EFEITO MAQUINA DE ESCREVER ================ */
function digitar(x) {


    let alvo = document.querySelector(x)
    let texto = alvo.innerHTML.split('')


    //=================

    alvo.innerHTML = ''

    for(let i = 0; i < texto.length; i++) {

        setTimeout(function(){
            alvo.innerHTML += texto[i]
        }, 120 * i)

    }

    setTimeout(function(){
        digitar('#alvo')
    },6000)


}


digitar('#alvo')

/* =================== ANIMAÇÃO SCROLL ==================== */


function aniScroll() {

    let barraTop = window.scrollY + ((window.innerHeight *3)/4)
    let alvo = document.querySelectorAll('[data-anime]')

    alvo.forEach( (elementos) => {
        

        if(barraTop > elementos.offsetTop) {
            elementos.classList.add('active')
        } else {
            elementos.classList.remove('active')
        }
    })
   
}

aniScroll()

window.addEventListener('scroll', () => {
    aniScroll()
})