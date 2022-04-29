let datoNombre = prompt('Ingresa tu nombre');

datoNombre = datoNombre.toUpperCase();

if (datoNombre==='FRANCO'){
    alert ('Ganaste un lindo Premio');
}else{
    alert('Perdiste Amiguito');
}

let edad = Number(prompt('Ingresa tu Edad'));

if (edad < 12){
    alert(datoNombre + ' eres un niño');
} else if ((edad > 11) && (edad < 18)){
    alert(datoNombre + ' es un adolecente');
}else if ((edad > 18) && (edad <= 60)){
    alert(datoNombre + ' es un adulto');
}else{
    alert(datoNombre + ' es un anciano');
}

let numero=Number(prompt('Indica un Numero'))
for(let i=1; i<=numero; i++){
    alert('Hola ' + datoNombre)
}
