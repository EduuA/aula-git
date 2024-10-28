//ab = area da base
//al = area lateral
//at = area total
//r = raio
//h = altura

const h = 3;
const r = 2;
const ab = 2 * Math.PI * r ** 2;
const al = 2 * Math.PI * r * h;
let at = 2 * ab + al;

console.log(at);

at = 2 * Math.PI * r * (r + h);

console.log(at);