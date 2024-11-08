let nombres = ["Joana","Barbara","Juan", "Marcos"];
console.log (nombres[3]);

nombres.push("Karina");
console.log (nombres);
nombres.unshift("Valeria");
console.log(nombres);

let numeros = [1,2,3,4,5,6,7,8];
let impares = numeros.filter(num => num % 2 !== 0);
console.log (impares);

let frutas1 = ["manzana", "platano", "mandarina", "durazno", "papaya"];
let frutas2 = ["fresa", "kiwi", "mango", "ciruela", "pera"];
let frutasCombinadas = [...new Set([...frutas1, ...frutas2])];
console.log(frutasCombinadas);

let num = [3,6,9,12,15,18];
num.reverse();
console.log(num);

let n = [22,24,26,28,30];
let dobles = n.map(num => num * 2 );
console.log (dobles);

let edades = [51,25,39,41,7];
let mayor = edades.filter (num => num > 18);
console.log (mayor);

let puntaje = [120.98,160.52,198.12,156.31];
let suma = puntaje.reduce((total, num) => total + num, 0);
console.log(suma);

let colores = ["rosa", "azúl", "negro", "naranja"];
colores.splice(0,1);
colores.splice(2,3);
console.log(colores);

let nu = [7,12,45,61,12,64,29];
let verifica = nu.includes(10);
console.log(verifica);