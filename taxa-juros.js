//i = taxa de juros
//m = montante
//c = capital
//n = numero de periodos

const m = 90000;
const c = 60000;
const n = 24;
const i = (m / c) ** (1 / n) - 1;

console.log(`Valor da taxa de juros: ${i}`);
