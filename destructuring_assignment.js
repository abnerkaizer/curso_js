const numeros = [10, 20,30,40,50,60,70,80,90];
const [primeiroNumero,segundoNumero,...resto] = numeros;//rest operator,spread
console.log(primeiroNumero);
console.log(segundoNumero);
console.log(resto);

const [um, , tres] = numeros;//pula deixando vazio
console.log(um,tres);

const numbers = [
	[1,2,3],
	[4,5,6],
	[7,8,9]
];
console.log(numbers[1][2]);
const [list1,lista2,lista3] = numbers;
console.log(lista3);
