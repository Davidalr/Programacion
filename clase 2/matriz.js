/**
 * Created by davidlopez on 12/08/14.
 */
//var menu = ["productos", "ventas" , "contacto"];
//document.write(menu);
//var dofa = [["Fuerza","Oportunidad"],["Debilidades","Amenazas"]];
//document.write (dofa);

function explosion()
{
    alert("boom!!");
    document.write("<h1>BOOM! elegiste una area minada :(</h1>");
}

function ganaste()
{
    document.write("Eres un ganador :)");
}


function aleatorio(minimo, maximo) {
    return Math.floor(Math.random() * (maximo - minimo + 1) + minimo);

}
var campo = new Array();

for(i=0; i<3; i++)
{;
    campo[i] = new Array();
    for(j=0; j<3; j++)
    {
        campo[i][j]=aleatorio(0, 1);


    }


}
console.log(campo);
//var campo = [[1 , 0 , 0],
         //    [0 , 1 , 0],
           //  [1 , 1 , 1] ];

var textos = ["cesped", "bomba"]


var x,y;
alert ("Estas en un campo minado\n" + "Elige una posicion entre el 0 y el 2 para X y para Y");

x = prompt("pocision en X? (entre 0 y 2)");
y = prompt("pocision en Y? (entre 0 y 2)");

if (x < 3 && y < 3)
{
    var posicion = campo [x][y];
    document.write("Elegiste" + textos[posicion]);
    if(posicion == 1)
    {
       explosion();
    }
    else
    {
        ganaste();
    }
}
else
{
    document.write("!te saliste del campo");
    explosion();
}

