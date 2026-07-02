// MAYOR QUE : >
// MENOR QUE : <
// MAYOR O IGUAL QUE: >=
// MENOR O IGUAL QUE: <=
// IGUAL QUE: ==
// DISTINTO DE: !=
// ESTRICTAMENTE IGUAL: ===

// USUARIO PUEDE TRABAJAR

let edad = 15;
let permiso = false;

if(edad >= 18){
    console.log("Usted puede trabajar por ser mayor de edad.");
}else if(permiso){
    console.log("Usted puede trabajar porque tiene permiso.");
}else{
    console.log("Usted no puede trabajar.");
}