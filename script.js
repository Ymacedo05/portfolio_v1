function digitar(x) {


    let alvo = document.querySelector(x)
    let texto = alvo.innerHTML.split('')

    console.log(alvo)
    console.log(texto)

    //=================

    alvo.innerHTML = ''

    for(let i = 0; i < texto.length; i++) {
        console.log(texto[i])

        setTimeout(function(){
            alvo.innerHTML += texto[i]
        }, 100 * i)

    }

    setInterval(function(){
        digitar('#alvo')
    }, 7000)


}

digitar('#alvo')