let x=10, y=2; // mesma coisa de let x=10; let y =2;

let resultado = x + y;
console.log(resultado);

resultado = x - y;
console.log(resultado);

resultado = x * y;
console.log(resultado);

resultado = x / y;
console.log(resultado);


//infinity e NaN

let z = 0/2; // 0
console.log(z);

z = 2/0;
console.log(z); //Infinity

z=0/0;
console.log(z);// NaN

//sqrt

let raiz = Math.sqrt(16);
console.log(raiz);

let potencia = Math.pow(2, 5);
//potencia 2 ** 5
console.log(potencia);

//incrementacao

let c = 12;

//c = c + 3;
c += 3;
console.log(c);

//c = c - 3;
c -= 3;
console.log(c);

//c = c * 3;
c *= 3;
console.log(c);

//c = c / 3;
c /= 3;
console.log(c);

let resto = 12 % 5;
console.log(resto);