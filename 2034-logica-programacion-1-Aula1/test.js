let nombre = prompt('Cual es tu nombre: ');
let mensaje = `¡Hola, ${nombre}}`;
let pregunta = prompt('¿Cuál es el lenguaje de programación que más te gusta: ');
let valor1 = 3;
let valor2 = 5;
let resultado = valor1 + valor2;
let resultado2 = valor1 - valor2;

console.log(mensaje);
alert(mensaje);
console.log(pregunta);
console.log(valor1);
console.log(valor2);
console.log(`La suma entre ${valor1} y ${valor2} es igual a ${resultado}`);
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado2}`);

let edad = prompt('Cual es tu edad: ');
if (edad >= 18){
  alert("Eres mayor de edad. Tu edad es: " + edad + "!");
} else if (edad < 18){
  alert("No eres mayor de edad. Tu edad es: " + edad + "!");
}

let numero = prompt('Ingrese un numero: ');
console.log('Numero ingresado:', numero);

if (numero > 0){
    alert("Tu Numero es positivo: " + numero + "!");
} else if (numero < 0){
    alert("Tu Numero es negativo: " + numero + "!");
} else if (numero == 0){
    alert("Tu Numero es: " + numero + "!");
}

let numeroUsuario = 1;

while (numeroUsuario <= 10){
    console.log(numeroUsuario);
    // Incrementamos el contador cuando no acierta
    //intentos = intentos +1;
    // intentos += 1
    numeroUsuario++;
}


let nota = 5;
if (nota >= 7){
  alert("Aprobado. Tu nota es de: " + nota + "!");
} else if (nota < 7){
  alert("Reporvado. Tu nota es de: " + nota + "!");
}

let numeroRandom = Math.random();
console.log('Tu numero es: ', numeroRandom);

let numeroRandom2 = Math.floor(Math.random()*10)+1;
console.log('Tu numero del 1 al 10 es: ', numeroRandom2);

let numeroRandom3 = Math.floor(Math.random()*1000)+1;
console.log('Tu numero del 1 al 10 es: ', numeroRandom3);