
/* ================= MENU ===========================*/
let contador = 0

function clickBTN() {

    contador++
    let nav = document.getElementById('nav')

    if(contador == 1) {
        
        nav.classList.add('active')

        nav.addEventListener('click', (x) => {
            console.log(x.target.id)
            if(x.target.id == 'nav' || x.target.className == 'fechar') {
                nav.classList.remove('active')
            }
        } )

    } else if (contador == 2) {

        let nav = document.getElementById('nav')
        nav.classList.remove('active')
        contador = 0
    }
    
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