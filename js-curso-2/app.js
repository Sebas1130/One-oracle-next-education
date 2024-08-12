let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del Desafío.';


function ClickDeUsuario() {
    alert('El botón fue clicado');
}

function ClickProm() {
    let Ciudad = prompt('Que ciudad de Brasil te Gusta Mas: ');
    alert('Estuve en ' + Ciudad + ' y me acordé de ti');
}

function ClickAlert() {
    alert('Yo amo JS');
}

function ClickSuma() {
    let numero1 = parseInt(prompt('Digita el primer numero: '));
    let numero2 = parseInt(prompt('Digita el segundo numero: '));
    let ResultadoSuma = numero1 + numero2;
    alert('La suma de los numeros es: ' + ResultadoSuma );
}