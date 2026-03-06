function encriptar() 
{
    let e = document.getElementById("valore").value;
    let n = document.getElementById("valorn").value;
    let texto = document.getElementById("textoe").value;

    let resultado = "";

    for(let i = 0; i < texto.length; i++)
    {
        let ascii = texto.charCodeAt(i);
        let cifrado = (Math.pow(ascii, e)) % n;

        resultado += cifrado + " ";
    }

    document.getElementById("rta").innerHTML = "Respuesta: " + resultado;
}