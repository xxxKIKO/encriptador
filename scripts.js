function encriptar(){
    const texto = document.getElementById('texto').value;

    if (texto.trim() === '') {
        alert("Por favor, inserta o teclea un texto en el área correspondiente para poder encriptar/desencriptar.");
        return;
    }

    let textoEncriptado = texto.replace(/e/g, 'enter');
    textoEncriptado = textoEncriptado.replace(/i/g, 'imes');
    textoEncriptado = textoEncriptado.replace(/a/g, 'ai');
    textoEncriptado = textoEncriptado.replace(/o/g, 'ober');
    textoEncriptado = textoEncriptado.replace(/u/g, 'ufat');
      
    document.getElementById('resultado').value = textoEncriptado;
}

document.getElementById('resultado').textContent = textoEncriptado;

function desencriptar() {
    const textoEncriptado = document.getElementById('texto').value;

    if (textoEncriptado.trim() === '') {
        alert("Por favor, inserta o teclea un texto en el área correspondiente para poder encriptar/desencriptar.");
        return;
    }

    let texto = textoEncriptado.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    document.getElementById('resultado').value = texto;
  }

  function copiarTexto() {
    var textarea = document.getElementById("resultado");
      // Seleccionar el contenido del textarea
    textarea.select();
      // Copiar el contenido al portapapeles
    document.execCommand("copy");
      // Deseleccionar el contenido
    textarea.setSelectionRange(0, 0);
      // Mostrar una notificación o mensaje de éxito
      textarea.value = "";
    alert("El texto ha sido copiado al portapapeles");
  }

  function pegarTexto() {
    var textarea = document.getElementById("texto");
  
    // Pegar el contenido del portapapeles en el textarea
    navigator.clipboard.readText()
      .then(function(text) {
        textarea.value = text;
        console.log("Texto pegado en el textarea: " + text);
      })
      .catch(function(error) {
        console.error("Error al pegar el texto: " + error);
      });
  }
  