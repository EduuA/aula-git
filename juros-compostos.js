
const capital = 1000;
const taxaJuros = 0.125;
const tempo = 5;
const montante = capital * Math.pow((1 + taxaJuros), tempo);

console.log(montante);