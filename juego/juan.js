/**
 * Created by david on 5/09/14.
 */
var tablero;
var fondo = {
     imagenURL:"fondo.png",
     imagenOK: false
};
var juan ={
     x: 200,
     y: 100,
    imagenURL: "juan-frente.png",
    imagenOK: false
};
function inicio()
{
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");
    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;
}

function confirmarFondo()
{
    fondo.imagenOK = true;
    dibujar();
}
function dibujar()
{
    if(fondo.imagenOK == true)
    {
        tablero.drawImage(fondo.imagen, 0 ,0);
    }
}
