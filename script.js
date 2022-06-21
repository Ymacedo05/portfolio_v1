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