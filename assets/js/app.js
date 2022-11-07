var inputUno = document.getElementById("inputUno")
var inputDos = document.getElementById("inputDos")
var inputTres = document.getElementById("inputTres")
var botonVerificar = document.getElementById("botonVerificar")
var validacionFinal = document.getElementById("validacionFinal")

botonVerificar.addEventListener("click", () => {

        inputUno = parseInt(inputUno.value)
        inputDos = parseInt(inputDos.value)
        inputTres = parseInt(inputTres.value)

    var sumaInt = inputUno + inputDos + inputTres

    if (sumaInt <= 10){
        validacionFinal.innerHTML = `LLevas ${sumaInt} stickers`
        return
    } 
    else{
        validacionFinal.innerHTML = `LLevas demasiados stickers`
        return
    }
})