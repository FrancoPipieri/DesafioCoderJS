let saldo = Number(prompt('Ingresa el monto que te queda a favor.'));
let salarioMensual = Number(prompt('Ingresa el Salario del mes actual.'));
let total = saldo + salarioMensual;
console.log('Te sobraron del mes pasado $' + saldo);
console.log('Este mes te Ingreso $' + salarioMensual);
alert(`Tu cuenta es $${total}`);
console.log(`Tu saldo es $${total}`);
let resto = false;


function cuenta(saldo, salarioMensual){
    if( total >1){
        return true;
    }else if(total <=0){
        return false;
    }
}

while(resto !==true){
    let gasto = Number(prompt('Ingresa tu Gasto.'));
    let resultado = cuenta(saldo,salarioMensual);
    if(resultado){
        total -= gasto ;
        alert(`Te quedan $${total}`);
        console.log(`Te quedan $${total}`);
    }else{
        alert('Te quedaste sin dinero.');
        resto = true;
    }
}


