class Articulo{

      constructor(id, marca, color, tinta, cantidad, diametro){
        this.id = id;
        this.marca=marca;
        this.color=color;
        this.tinta=tinta;
        this.cantidad=cantidad;
        this.diametro=diametro;
      }
}


let carrito = [];

mostrarMenu();

function mostrarMenu(){

  let opcion = 0;

  while(opcion!==2){

    opcion = Number(prompt(`Seleccione una de las siguientes opciones:
                                    
                            1. Ingresar al Carrito de Compra
                            2. Salir`));
    switch(opcion){
      case 1:{
        comprarProductos();
        break;
      }
      default:{
        alert(`Adios!`);
        break;
      }
    }
  }

}

  function comprarProductos(){

    let compra = Number(prompt(`Seleccione una opcion de Compra:
                              1. Agregar Articulos
                              2. Eliminar Articulos
                              3. Listar Articulos
                              4. Buscar Articulo`));

      switch(compra){
        case 1: {
        agregarArticulo();
        break;
        }
        case 2: {
        eliminarArticulo();
        break;
        }
        case 3: {
        listarArticulo();
        break;
        }
        case 4: {
        buscarArticulo();
        break
        }
        default:{
        alert(`Opcion Invalida`)
        break
        }
      }

  }

  function agregarArticulo(){
    let cantArt = Number(prompt(`Cuantos Articulos Desea?`));


    for(let i = 0; i<cantArt; i++){
  
      let id = 1;

      if(carrito.length>0){
        id = carrito[carrito.length-1].id+1;
      }

      let marca = prompt(`Ingrese una marca: UniPosca, Grog, Markal`).toUpperCase();
      let color = prompt(`Ingrese el color que desee:`);
      let cantidadIguales = prompt(`Ingrese la cantidad que desea de este articulo:`);

      let articulo = new Articulo(id, marca, color, ``, cantidadIguales, ``);

        if(articulo.marca === `UNIPOSCA`){
          articulo.tinta = prompt(`Ingrese el tipo de tinta que desea: al Agua o base Indeleble`);
          articulo.diametro = Number(prompt(`Ingrese un diametro: 0.5mm, 0.7mm, 1.3mm, 2.5mm, 8mm, 15mm`)) + ` mm`;
        }else if(articulo.marca === `GROG`){
          articulo.tinta = prompt(`Ingrese el tipo de tinta que desea: al Agua o base Indeleble`);
          articulo.diametro = Number(prompt(`Ingrese un diametro: 5mm, 10mm, 20mm, 25mm`)) + ` mm`;
        }else{
          articulo.tinta = `Pasta de Oleo`;
          articulo.diametro = Number(prompt(`Ingrese un diametro: 17mm`)) + ` mm`;
        }

      carrito.push(articulo);

    }

  console.log(`CARRITO DE COMPRA:`)
  console.log(carrito)

  }

  function eliminarArticulo(){
      let id = Number(prompt(`Ingrese el Id del Articulo que desea Eliminar:`));
      let artEliminado = carrito.find((articulo)=>articulo.id === id);

      if(!artEliminado){
      alert(`Artaiculo  No Encontrado!`)
      }else{
        let index = carrito.indexOf(artEliminado);

        carrito.splice(index, 1)
        console.log(`Articulo eliminado ` + ` ` +artEliminado.marca+ ` ` +artEliminado.color+ ` ` + artEliminado.diametro )
      }
  }

  function listarArticulo(){
    console.log(`LISTA DE ARTICULOS DEL CARRITO:`)

    carrito.forEach(
      (articulo)=>{
        console.log(articulo.id+ ` ` +articulo.marca+ ` ` +articulo.color+ ` ` + articulo.diametro);
      }
    )
  }

  function buscarArticulo(){
    let artBuscado = prompt(`Ingrese la Marca del articulo que quiere buscar`).toUpperCase();
    let encontrado = carrito.filter((articulo)=>articulo.marca.indexOf(artBuscado)!==-1);

    console.log(`Articulo Encontrado: `, encontrado)
  }
