var inputUno = document.getElementById("inputUno")
var inputDos = document.getElementById("inputDos")
var inputTres = document.getElementById("inputTres")
var botonVerificar = document.getElementById("botonVerificar")
var validacionFinal = document.getElementById("validacionFinal")

botonVerificar.addEventListener("click", () => {

        inputUno1 = parseFloat(inputUno.value)
        inputDos2 = parseFloat(inputDos.value)
        inputTres3 = parseFloat(inputTres.value)

    var sumaInt = inputUno1 + inputDos2 + inputTres3

    if (sumaInt <= 10){
        validacionFinal.innerHTML = `LLevas ${sumaInt} stickers`
        return
    } 
    else{
        validacionFinal.innerHTML = `LLevas demasiados stickers`
        return
    }
})