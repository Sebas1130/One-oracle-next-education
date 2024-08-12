let Dia = prompt('Que día de la semana es:');
console.log('Dia de la semana:', Dia);

let DiaFestivo1 = 'sabado';
let DiaFestivo2 = 'domingo';

if (Dia == DiaFestivo1) {
    alert("¡Buen fin de semana, Disfruta tu: " + DiaFestivo1 + "!");
} else if (Dia == DiaFestivo2){
    // Se agrega un console.log para verificar el valor de "numeroSecreto" cuando el jugador se equivoca
    console.log('Valor del número secreto:', numeroSecreto);
    alert("¡Buen fin de semana, Disfruta tu: " + DiaFestivo2 + "!");
} else {
    alert("¡Buena semana, Disfruta tu: " + Dia + "!");
}