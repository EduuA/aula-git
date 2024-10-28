let x = 10;
//x++: primeiro ele retorna o x e depois soma
//++x: primeiro ele soma e depois ele retorna 
let y = x++;
console.log (`X: ${x}, Y: ${y}`);

y = ++x;
console.log(`X: ${x}, Y: ${y}`);