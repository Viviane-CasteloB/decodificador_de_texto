const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");
const btnCopiar = document.querySelector(".botoes_copiar");

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


//Logica para deixar a imagem de fundo apenas quando nao houver conteudo criptografado no textarea
//   Condicao inicial do formulario onde a imagem de fundo e o botao de copiar estao ocultos
mensagem.style.backgroundImage = "url('/img/menino.jpg')";  
btnCopiar.style.display = "none";

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;

    //Logica para a imagem do boneco sumir e o botão copiar aparecer

    if (mensagem.value.trim() != "") {
      mensagem.style.backgroundImage = "none";
      //botao de copia aparecer quando houver texto
      btnCopiar.style.display = "block";
    }
    textArea.value = "";
}


function encriptar(stringEncriptada) {
  var cod = stringEncriptada.replaceAll("e" , "enter");
  cod = cod.replaceAll("i" , "imes");
  cod = cod.replaceAll("a" , "ai");
  cod = cod.replaceAll("o" , "ober");
  cod = cod.replaceAll("u" , "ufat");
  return cod;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}


function desencriptar(stringDesencriptada) {
  var cod = stringDesencriptada.replaceAll("enter" , "e");
  cod = cod.replaceAll("imes" , "i");
  cod = cod.replaceAll("ai" , "a");
  cod = cod.replaceAll("ober" , "o");
  cod = cod.replaceAll("ufat" , "u");
  return cod;
}


function copyText() {
  // Seleciona o texto
  var textToCopy = document.getElementById("copiar");
  copiar.select();
  
  // Copia o texto para a área de transferência
  document.execCommand("copy");

  // Alerta para confirmar a cópia
  alert("Texto copiado: " + copiar.value);
}

function copyText() {
  // Seleciona o texto
  var textToCopy = document.getElementById("textToCopy");
  textToCopy.select();
 

  // Copia o texto para a área de transferência
  document.execCommand("copy");

  // Alerta para confirmar a cópia
  alert("Texto copiado! Cole na área de digitação o texto (ctrl + v) para descriptografar");
}


