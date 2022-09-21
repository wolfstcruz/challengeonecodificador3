const inputTexto= document.querySelector(".input-texto")
const mensaje= document.querySelector(".mensaje")
const btncopy = document.querySelector(".copiar")
btncopy.style.display = "none"
//Las "llaves" de encriptación que utilizaremos son las siguientes:

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none"
    inputTexto.value = ""
    btncopy.style.display = "block"
}

//En la siguiente función se aplica una array "anidada" para generar una matriz, lo cual permite identificar las
// llaves de encriptación y traducirlas segun la posision de cada elemento "0", "1", o anexar "n" posibilidades de posicion
function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase(); 

    for ( let i= 0; i< matrizCodigo.length; i++ ) {
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll
            (matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada;


    }

    function btnDesencriptar(){ 
        const textoEncriptado = desencriptar(inputTexto.value)
        mensaje.value = textoEncriptado
        inputTexto.value = ""

    }

    function desencriptar(stringDesencriptada){
        let matrizCodigo = [["e", "enter"],["i", "imes"],["a", "ai"],["o", "ober"],["u", "ufat"]];
        stringDesencriptada = stringDesencriptada.toLowerCase();
    
        for ( let i= 0; i< matrizCodigo.length; i++ ) {
            if(stringDesencriptada.includes(matrizCodigo[i][1])){
                stringDesencriptada=stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo [i][0])
            }
        }
        return stringDesencriptada;
}

function copiar(){
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)   // Interactuar con el Portapapeles, escribe y lee datos hacia y desde el portapapeles.
    mensaje.value = ""
    alert("Texto copiado")
}




