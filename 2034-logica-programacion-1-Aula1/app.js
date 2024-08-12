alert('Bienvenido al juego del número secreto');
// variables
let NumeroMaximo = 100;
let numeroSecreto = Math.floor(Math.random()*NumeroMaximo)+1;
let numeroUsuario = 0;
let intentos = 1;
// let palabra = 'intento';
let intentosMaximos = 5;

console.log(numeroSecreto);
while (numeroUsuario != numeroSecreto){
    numeroUsuario = parseInt(prompt(`Elige un número entre 1 y ${NumeroMaximo}`));
    // Se agrega un console.log para verificar el valor de "numeroUsuario" después de la entrada del usuario
    console.log(numeroUsuario);

    if (numeroUsuario == numeroSecreto) {
        // alert('Adivinaste, el numero es: ' + numeroUsuario + ' lo hiciste en: ' + intentos + ' ' + palabra);
        alert(`Adivinaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'intento' : 'intentos'}`);
    } else if (numeroUsuario > numeroSecreto){
        alert('El número secreto es menor');
    } else if (numeroUsuario < numeroSecreto){
        alert('El número secreto es mayor');
    }
    // Incrementamos el contador cuando no acierta
    //intentos = intentos +1;
    // intentos += 1
    intentos++;
    palabra = 'intentos'
    if (intentos > intentosMaximos){
        alert('Llegaste al número maximo de ' + intentosMaximos +' intentos');
        break
    }
}