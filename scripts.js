function encriptar(){
    const texto = document.getElementById('texto').value;

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

    let texto = textoEncriptado.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');
    
    document.getElementById('resultado').value = texto;
  }

 