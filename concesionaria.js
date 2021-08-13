// quire que lo importorte nada mas 

const autos= require("./autos.js")



const concesionaria = {
        autos:autos ,
        //-------------------------------------------------------------------------------
buscarAuto:function(patente){

        let Autoencontrado;

        this.autos.forEach(auto=>{

        if (auto.patente==patente){Autoencontrado=autos}})

        return (Autoencontrado===undefined)? null : Autoencontrado ;}, // QUITO }
        //--------------------------------------------------------------------------------
venderAuto:function(patente){

        let Autoencontrado=this.buscarAuto(patente)

        if (Autoencontrado){return Autoencontrado.vendido=true}
          // simpre me olvido para concatenar uso alt + 96 ` lalalalal ${ lo que quiero mostar  }`
        else {return `patente no encontrada ${patente}`}},

        //---------------------------------------------------------------------------------
autosParaLaVenta:function(){
            return this.autos.filter(auto => auto.vendido===true)
        },

/*
┌─────────┬──────────┬───────────┬────────┬─────┬──────────┬────────┬──────┬──────────┬─────────┐
│ (index) │  marca   │  modelo   │ precio │ km  │  color   │ cuotas │ anio │ patente  │ vendido │
├─────────┼──────────┼───────────┼────────┼─────┼──────────┼────────┼──────┼──────────┼─────────┤
│    0    │  'Ford'  │ 'Fiesta'  │ 150000 │ 200 │ ' Azul'  │   12   │ 2019 │ 'JJK116' │  false  │
│    1    │ 'Toyota' │ 'Corolla' │ 100000 │  0  │ 'Blanco' │   14   │ 2019 │ 'JJK116' │  false  │
└─────────┴──────────┴───────────┴────────┴─────┴──────────┴────────┴──────┴──────────┴─────────┘*/
        //------------------------------------------------------------------------------------
autosNuevos:function(){
            const autossinvender=this.autosParaLaVenta();
            // uso filter para que busque dentro la lista ( los objetos que quiero)
            return autossinvender.filter(auto => auto.km < 100)
        },
/*
┌─────────┬──────────┬───────────┬────────┬────┬──────────┬────────┬──────┬──────────┬─────────┐
│ (index) │  marca   │  modelo   │ precio │ km │  color   │ cuotas │ anio │ patente  │ vendido │
├─────────┼──────────┼───────────┼────────┼────┼──────────┼────────┼──────┼──────────┼─────────┤
│    0    │ 'Toyota' │ 'Corolla' │ 100000 │ 0  │ 'Blanco' │   14   │ 2019 │ 'JJK116' │  false  │
└─────────┴──────────┴───────────┴────────┴────┴──────────┴────────┴──────┴──────────┴─────────┘*/

listaDeVentas:function(){
    let array_auto=autos;
    let listaprecios=[];
    let listavendidos=array_auto.filter(vender=> vender.vendido==true) ;
    listavendidos.forEach(element => listaprecios.push(element.precio)) ;
   
    return listaprecios;
},

/*
┌─────────┬────────┐
│ (index) │ Values │
├─────────┼────────┤
│    0    │ 100000 │
└─────────┴────────┘*/

/*listaDeVentas: function(){
    return this.autos.filter((autos)=>(autos.vendido==true))
}*/

totalDeVentas:function(){
    let array_auto=autos;
    
    let listavendidos=array_auto.filter(vender=> vender.vendido==true) ;
    
   let total=listavendidos.reduce(function(num1,item){return num1 + item.precio},0)
   return total
},
// 250000

puedeComprar_version2:function(str,usuario){
let acumulador=autos
console.table(acumulador);
/*
┌─────────┬──────────┬───────────┬────────┬─────┬──────────┬────────┬──────┬──────────┬─────────┐
│ (index) │  marca   │  modelo   │ precio │ km  │  color   │ cuotas │ anio │ patente  │ vendido │
├─────────┼──────────┼───────────┼────────┼─────┼──────────┼────────┼──────┼──────────┼─────────┤
│    0    │  'Ford'  │ 'Fiesta'  │ 150000 │ 200 │ ' Azul'  │   12   │ 2019 │ 'APL123' │  false  │
│    1    │ 'Toyota' │ 'Corolla' │ 100000 │  0  │ 'Blanco' │   14   │ 2019 │ 'JJK116' │  false  │
└─────────┴──────────┴───────────┴────────┴─────┴──────────┴────────┴──────┴──────────┴─────────┘*/

let nuevoObjeto = acumulador.filter(elemento=>elemento.marca==str );
console.table(nuevoObjeto);

/*
 ┌─────────┬────────┬──────────┬────────┬─────┬─────────┬────────┬──────┬──────────┬─────────┐
 │ (index) │ marca  │  modelo  │ precio │ km  │  color  │ cuotas │ anio │ patente  │ vendido │
 ├─────────┼────────┼──────────┼────────┼─────┼─────────┼────────┼──────┼──────────┼─────────┤
 │    0    │ 'Ford' │ 'Fiesta' │ 150000 │ 200 │ ' Azul' │   12   │ 2019 │ 'APL123' │  false  │
 └─────────┴────────┴──────────┴────────┴─────┴─────────┴────────┴──────┴──────────┴─────────┘ 
*/
let verifico=((usuario.capacidadDePagoTotal>nuevoObjeto[0].precio)&& (usuario.capacidadDePagoEnCuotas> nuevoObjeto[0].precio/nuevoObjeto[0].cuotas))? true : false;
console.log(` capacidad De Pago Total es de :${usuario.capacidadDePagoTotal}`);
console.log(`el precio del auto modelo  ${nuevoObjeto[0].modelo}  es de :${nuevoObjeto[0].precio}`);
console.log(usuario.capacidadDePagoEnCuotas);
console.log(nuevoObjeto[0].precio);
console.log(nuevoObjeto[0].cuotas);
return verifico
}  ,
puedeComprar: function (auto, persona) {

        let costoTotal = auto.precio > persona.capacidadDePagoTotal ? false : true
                
        let capacidadDePago = (auto.precio / auto.cuotas) > persona.capacidadDePagoEnCuotas ? false : true
                
        let respuesta = costoTotal && capacidadDePago
                
        return respuesta; },


autosQuePuedeComprar:function(usuario){
    
    let autos_stock= this.autos.filter((autos)=>(autos.vendido==false));
   // console.log(autos_stock)
    let autos_disponibles=autos_stock.filter(element=> element.precio>100000);
  //  console.log(autos_stock)
   // console.log(autos_disponibles)
   if(usuario.capacidadDePagoTotal>autos_stock[0].precio && 
        usuario.capacidadDePagoEnCuotas>autos_stock[0].precio/autos_stock[0].cuotas){
           return  autos_stock}
   else{return autos_disponibles }        
    //console.log(autos_disponibles[0].precio)

    // console.log( "autos encontrada para la venta " + autos_stock[0].marca +" "+ autos_stock[1].marca)
}

        }// ULTIMA
let usuario={ capacidadDePagoEnCuotas: 7200  ,capacidadDePagoTotal: 100000000 } //devolver 1 lista de autos
let usuario2={ capacidadDePagoEnCuotas: 30000 , capacidadDePagoTotal: 100000000} //devolver 2 listas de autos

console.table(concesionaria.autosQuePuedeComprar(usuario));
console.table(concesionaria.autosQuePuedeComprar(usuario2));



//console.log(concesionaria.puedeComprar(nombre_auto,usuario2))
let nombre_auto="Toyota";
let nombre_auto_2="Ford";
console.log(concesionaria.puedeComprar_version2(nombre_auto,usuario))
console.log(concesionaria.puedeComprar_version2(nombre_auto_2,usuario2))


//console.log(concesionaria. totalDeVentas())

//console.table(concesionaria.listaDeVentas());

//console.log(concesionaria.venderAuto('JJK6'));

//console.log(concesionaria.venderAuto('JJK116'));

//console.table(concesionaria.autosParaLaVenta());

//console.table(concesionaria.autosNuevos());









