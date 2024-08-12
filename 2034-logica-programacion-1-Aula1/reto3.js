let numero = prompt('Ingrese un numero: ');
console.log('Numero ingresado:', numero);

let puntuaxionBase = 100;

if (puntuaxionBase >= 100){
    alert("¡Felicidades, has ganado " + numero + "!");
} else if (numero < 100){
    alert("Intentalo nuevamente para ganar: " + numero + "!");
}