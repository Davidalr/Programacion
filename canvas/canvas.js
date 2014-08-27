/**
 * Created by davidlopez on 26/08/14.
 */
var dibujo, lienzo;
function inicio()
{
   dibujo = document.getElementById("dibujito");
   lienzo = dibujo.getContext("2d");

   dibujarGrilla(lienzo);
   lienzo.moveTo(0,0);
   lienzo.lineTo(300,0);
   lienzo.lineTo(300,300);
   lienzo.lineTo(0,300);
   lienzo.lineTo(0,0);
   lienzo.strokeStyle ="#F00";
   lienzo.stroke();

   lienzo.beginPath();
   lienzo.strokeStyle ="#00F";
   lienzo.arc(150,150,100, (Math.PI*2), false);
   lienzo.closePath();
   lienzo.stroke();
}

function dibujarGrilla(l)
{
  var ancho = 300 , alto =300;
  var linea;

  for (linea=0; linea < 10; linea++)
  {
      l.beginPath();
      l.strokeStyle = "#AAA";
      l.moveTo(linea * 10, 0);
      l.lineTo(linea * 10, 300);
      l.closePath();
      l.stroke();
  }

}