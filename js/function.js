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
      ``
    )
    
      if(articulo.marca === "UNIPOSCA"){
        articulo.diametro = Number(prompt(`Ingrese un diametro: 0.5mm, 0.7mm, 1.3mm, 2.5mm, 8mm, 15mm`)) + " mm";
      }else if(articulo.marca === "GROG"){
        articulo.diametro = Number(prompt(`Ingrese un diametro: 5mm, 10mm, 20mm, 25mm`)) + " mm";
      }else{
        articulo.diametro = Number(prompt(`Ingrese un diametro: 17mm`)) + " mm";
      }
    carrito.push(articulo);
}

console.log(carrito);
