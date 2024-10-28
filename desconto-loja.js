const entradaDados = require("readline-sync");
let valor = entradaDados.question("Digite o valor da compra: ");

let formaDePagamento = entradaDados.question(
  "Qual a forma de pagamento? AV = pagamento avista || CT = cartao "
);

if (formaDePagamento == "AV") {
  console.log("Você recebeu um desconto de 10%!!");
  const desconto = valor - (valor * 10) / 100;
  console.log(`O valor final é de ${desconto}`);
} else if (formaDePagamento == "CT") {
  let valorDaParcela = entradaDados.question(
    "Vai dividir em quantas vezes? Até 6x sem juros"
  );
  const valorFinal = valor / valorDaParcela;
  const unidade = valorDaParcela == 1 ? "parcela" : "parcelas";
  console.log(
    `Você vai pagar ${valorDaParcela} ${unidade} de ${valorFinal.toFixed(2)} reais`
  );
} else {
  console.log("Informe uma opçao valida");
}
