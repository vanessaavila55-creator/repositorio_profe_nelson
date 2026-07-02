//EJEMPLO CASO BECA

//REGISTRO SOCIAL DE HOGARES

//MAYOR A 80 : 0 % DE BECA
//MAYOR O IGUAL A 50 Y MENOR QUE 80: 30 % DE BECA
//MAYOR O IGUAL A 40 Y MENOR QUE 50: 50 % DE BECA
//MENOR QUE 40: 100 % DE BECA

let puntajeRSH = 40;

if( puntajeRSH >= 80){
    console.log("Usted no tiene descuento por beca.");
} else if(puntajeRSH >= 50){
    console.log("Usted tiene descuento de 30% por beca.");
}else if(puntajeRSH >= 40){
    console.log("Usted tiene descuento de 50% por beca.");
}else {
    console.log("Usted tiene descuento del 100% por beca.");
}
