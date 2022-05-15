class Articulo{

      constructor(marca, diametro, color, tinta, cantidad){
        this.marca=marca;
        this.diametro=diametro;
        this.color=color;
        this.tinta=tinta;
        this.cantidad=cantidad;
      }
      articuloCompleto(){
        return this.marca + ` ` + this.cantidad + `, ` + this.tinta + `, ` + this.color + `, ` + this.diametro
      }
}

let cantArt = Number(prompt(`Cuantos Articulos Desea?`));

let carrito = [];

for(let i = 0; i<cantArt; i++){
  
    let articulo = new Articulo(
      prompt(`Ingrese una marca: UniPosca, Grog, Markal`),
      prompt(`Ingrese el diametro del Marker: de 0.1mm a 25mm`),
      prompt(`Ingrese el color que desee:`),
      prompt(`Ingrese el tipo de tinta que desea: al Agua o base Indeleble`),
      prompt(`Ingrese la cantidad que desea de este articulo:`)
    );
    carrito.push(articulo);
}

console.log(carrito)