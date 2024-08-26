const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none"
}



function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i","imes"], ["a","ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptada= stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])) {
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }

    return stringEncriptada
}
function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none"
}
function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";

}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"],["i","imes"], ["a","ai"], ["o", "ober"],["u", "ufat"]];
    stringDesencriptada= stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])) {
        stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }

    return stringDesencriptada
}
function copiarResultado() {
    let resultado = document.getElementById("resultado").value;

    let tempTextArea = document.createElement("textarea");
    tempTextArea.value = resultado;
    document.body.appendChild(tempTextArea);

    tempTextArea.select();
    Document.execCommand("copy");
    document.body.removeChild(tempTextArea);

    alert("Texto copiado al portapapeles: " + resultado);
}

 