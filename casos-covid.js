//Po = a população inicial de pessoas
// X = quantidade de pessoas paras as quais um paciente infectado pode transmitir
// t = tempo percorrido
//Pi = Pessoas infectadas

const Po = 1000;
const x = 4;
const t = 100;

const Pi = Po * x ** (t/7);

console.log(`A quantidade de pessoas infectadas é de: ${Pi} pessoas`);
