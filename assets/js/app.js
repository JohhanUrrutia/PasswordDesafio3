var inputUno = document.getElementById("inputUno")
var inputDos = document.getElementById("inputDos")
var inputTres = document.getElementById("inputTres")
var botonVerificar = document.getElementById("botonVerificar")
var validacionFinal = document.getElementById("validacionFinal")

botonVerificar.addEventListener("click", () => {

    if (isNaN(parseInt(inputUno.value))){
        inputUno = 1
    } else if (parseInt(inputUno.value) != NaN){
        inputUno = parseInt(inputUno.value)
        console.log("Entro al else if 1")
    }

    if (isNaN(parseInt(inputDos.value))){
        inputDos = 1
    } else if (parseInt(inputDos.value) != NaN){
        inputDos = parseInt(inputDos.value)
        console.log("Entro al else if 2")
    }

    if (isNaN(parseInt(inputTres.value))){
        inputTres = 1
    } else if (parseInt(inputTres.value) != NaN){
        inputTres = parseInt(inputTres.value)
        console.log("Entro al else if 3")
    }

    var sumaInt = inputUno + inputDos + inputTres

    if (sumaInt < 11){
        validacionFinal.innerHTML = `LLevas ${sumaInt} stickers`
    } else{
        validacionFinal.innerHTML = `LLevas demasiados stickers`
    }
})