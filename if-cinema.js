const temIngresso = true;
const censura = 18;
const idade = 18;
const pais = true;

if (temIngresso == true) {
  if (idade >= censura || pais == true) {
    console.log(`Vocé pode assistir o filme`);
  } else {
    console.log(`Procure um responsavel para entrar ou venda o ingresso`);
  }
} else {
  console.log(`Volte para fila e compre o ingresso`);
}
