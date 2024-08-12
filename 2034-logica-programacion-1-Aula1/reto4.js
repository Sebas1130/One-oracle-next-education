let nombre = prompt("Me indicas tu nombre por favor:");
let edad = prompt("Me indicas tu edad por favor:");
let numeroDeCuentaUsuario = prompt("Me indicas tu numero de cuenta por favor:");
let numeroDeCuenta = 50;
let saldoDisponible = 1000;

if (numeroDeCuenta == numeroDeCuentaUsuario){
    alert(`Saldo disponible ${saldoDisponible}`);
} else{
    alert(`Ingresa un numero de cuenta valido ${numeroDeCuentaUsuario}`);
}