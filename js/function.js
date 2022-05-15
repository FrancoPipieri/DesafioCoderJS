
let diametro= 0;

class Articulo{

      constructor(marca, color, tinta, cantidad, diametro){
        this.marca=marca;
        this.color=color;
        this.tinta=tinta;
        this.cantidad=cantidad;
        this.diametro=diametro;
      }
}

let cantArt = Number(prompt(`Cuantos Articulos Desea?`));

let carrito = [];

for(let i = 0; i<cantArt; i++){
  
    let articulo = new Articulo(
      prompt(`Ingrese una marca: UniPosca, Grog, Markal`).toUpperCase(),
      prompt(`Ingrese el color que desee:`),
      prompt(`Ingrese el tipo de tinta que desea: al Agua o base Indeleble`),
      prompt(`Ingrese la cantidad que desea de este articulo:`),
      diametro
    )
    
      if(articulo.marca === "UNIPOSCA"){
        diametro = Number(prompt(`Ingrese un diametro: 0.5mm, 0.7mm, 1.3mm, 2.5mm, 8mm, 15mm`));
      }else if(articulo.marca === "GROG"){
        diametro = Number(prompt(`Ingrese un diametro: 5mm, 10mm, 20mm, 25mm`));
      }else{
        diametro = Number(prompt(`Ingrese un diametro: 17mm`));
      }
    carrito.push(articulo);
}

console.log(carrito);
