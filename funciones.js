//Ejercicio 1
function sum() {
     let suma = 0; 
   
     while (true) { //Bucle para preguntar si es un numero
         let numeros = prompt("Introduce un numero para hacer la suma"); 
         //Se convierten a numeros
         let numero = parseInt(numeros);
         //Si no se convierte a numero porque es una cadena de texto, se hace el break
         if (isNaN(numero)) {
             break;
         }
         //Si es un numero se añade a la variable suma y se suma
         suma += numero;
     }
     return suma;
 }

//Ejercicio 2
function addOnlyNums(){
    let suma = 0; 
    while (true) { 
        let numeros = prompt("Introduce un numero para hacer la suma"); 
        let numero = parseInt(numeros);

        if(numeros===""){
            break;
        }else if (!isNaN(numero)) {
                suma += numero;

        }
    }
    return suma;
}

//Ejercicio 3
function countTheArgs(...argumentos){
       return argumentos.length;
}

//Ejercicio 4
function combineTwoArrays(arr1,arr2){
    let concatenar= [...arr1, ...arr2];
    return concatenar;
}

//Ejercicio 5
function sumEveryOther(...argumentos){
    let suma=0;
    for(let x=0;x<argumentos.length;x+=2){
        suma += argumentos[x];
    }
    return suma;
}

//Ejercicio 6
function divisible(){
     let numero=prompt("Dime un numero y te digo si es divisible entre 3");
    parseInt(numero);
    if(numero %3 ==  0){
        document.write("El numero es divisible entre 3");
    }else{
        document.write("El numero no es divisible entre 3");
    }
}
//Ejercicio 7
function divisibleEntre(){
    let numero=prompt("Dime un numero y te digo si es divisible");
    let divisor=prompt("Dime el numero por el que quieres dividir y te digo si se puede o no");
    parseInt(numero);
    parseInt(divisor);
    if(numero % divisor==0){
        document.write("El numero "+ numero+" es divisible entre "+divisor);
    }else{
        document.write("El numero "+ numero+" no es divisible entre "+divisor);

    }
}
//Ejercicio 8
function rango(valor,rangoInf,rangoSup){
    return valor >= rangoInf && valor <= rangoSup;
}

//Ejercicio 9
function tieneTresDigitos(){
    let numero=prompt("Introduce un numero y compruebo si tiene 3 digitos o no");
    parseInt(numero);
    if(numero.length==3){
         si=document.write("El numero tiene 3 digitos");
    }else{
        no=document.write("El numero no tiene 3 digitos") ;
    }
    return si || no;
}

//Ejercicio 10
function areaRectangulo(lado1,lado2){
    let area= lado1 * lado2;
    return area;
}

//Ejercicio 11
function imc(){
    let peso=parseFloat(75);
    let altura=parseFloat(1.73);
    let proporcion=peso / (altura*altura);
    return proporcion;
}

//Ejercicio 12

function precioFinal(pOriginal,descuento){
    let dHecho= (pOriginal *descuento) / 100;
    let pFinal=pOriginal-dHecho;
    document.write("EL precio original es "+pOriginal+" el descuento hecho es del  "+descuento+" y el precio final es "+pFinal);
    return pFinal;
}

//Ejercicio 13
function factorial(num){
    let resultado=1;
    for(i=num;i>1;i--){
        resultado *= i;
    }
    return resultado;
}












