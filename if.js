const entradaDados = require("readline-sync");
let idade = entradaDados.question("Digite sua idade: ");

if (idade >= 18 && idade <= 20) {
  console.log(`Voce é jovem`);
} else if (idade > 20 && idade <= 64) {
  console.log(`Vocé é adulto`);
} else if (idade > 64) {
  console.log(`Vocé é um idoso`);
} else {
  const f = 18 - idade;
  const unidade = f == 1 ? "ano" : "anos";
  const unidade2 = f == 1 ? "falta" : "faltam";
  console.log(
    `Voce ainda não é maior de idade, ainda ${unidade2} ${f} ${unidade} para atingir a maioridade!`
  );
}
