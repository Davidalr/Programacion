/**
 * Created by davidlopez on 14/08/14.
 */
function Pokemon(n , v, a)
{
    this.grito = "pika!!";
    this.nombre = n;
    this.vida = v;
    this.ataque = a;
    this.gritar = function()
    {
        alert(this.grito);
    }
}

function inicio ()
{
    var rattata = new Pokemon ("Rattata", 40, 2);
    rattata.vida = rattata.vida - 15;
   nombrePokemon.innerText = rattata.nombre;
}



















//function Pokemon (nombrePokemon, vidaPoke , ataPoke)
//{
  //  var estructuraPokemon =
   // {
   //    nombre: nombrePokemon,
   //    vida: vidaPoke,
   //    ataque: ataPoke,
   //    datos:{tipo:"tierra" , debilidad:"fuego"}
    //};

  //  return estructuraPokemon;
//}

//var pikachu = Pokemon("Pikachu",100,55);
//var bulbasaur = Pokemon("Bulbasaur",90,50);

//console.log(pikachu);





//var pi = 3.14159265
//pi = Math.floor(pi);
//document.write(pi);

//var maxima ;
//maxima = Math.max(5,23,4,5,12,24,23,100);
//document.write(maxima);

