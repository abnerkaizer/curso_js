//Filter -> Sempre retorna um array com a mesma quantidade ou menos que o original,map, reduce

//Retorne os números maiores que 10
const numeros = [5,50,80,1,2,3,5,8,7,11,15,22,27];
const maiores10 = numeros.filter((valor,indice,array) =>{
	return valor > 10
});
//console.log(maiores10);

const pessoas = [
	{nome: 'Mara', idade: 23},
	{nome: 'Eduardo', idade: 55},
	{nome: 'Luiz', idade: 29},
	{nome: 'Letícia', idade: 19},
	{nome: 'Rosana', idade: 32},
	{nome: 'Wallace', idade: 47},
];
//Retorne as pessoas cujo nome tem 5 letras ou mais

const letras5 = pessoas.filter(pessoa => pessoa.nome.length >=5);
//console.log(letras5);

//Pessoas com idade > 50
const mais50 = pessoas.filter(pessoa => pessoa.idade > 50);
//console.log(mais50)

//Pessoa com nome terminado em a
const a = pessoas.filter(pessoa => pessoa.nome.toLowerCase().endsWith("a"));
//console.log(a);

//Map -> altera os valores do array.

// dobrar os valores

const numerosD = numeros.map((n)=>n*2);
//console.log(numerosD);

//Para cada elemento
//Retorne apenas uma string com o nome

const nomes = pessoas.map(valor=>valor.nome);
//console.log(nomes);

//Remova a chave nome apenas
const semNomes = pessoas.map(valor=>valor.idade);
//console.log(semNomes)

//Adicione id em cada objeto
const comId = pessoas.map((valor,indice)=>{
	const novo = {... valor}//spread, assim o original não é alterado
	novo.id = indice+1;
	return novo;
})
//console.log(comId);
//console.log(pessoas);

//Reduce, soma todos os numeros por exemplo

let total = numeros.reduce((acumulador,valor,indice,array)=>{
	acumulador += valor;
	return acumulador;
},0);//valor inicial
//console.log(total);

//Retorne um array com os pares, é melhor usar o filter pra isso

total = numeros.reduce((acumulador,valor)=>{
	if (valor%2===0) acumulador.push(valor);
		return acumulador;
},[]);//valor inicial
//console.log(total);

//Retorne um array com o dobro dos valores, é melhor usar o map pra isso
total = numeros.reduce((acumulador,valor)=>{
	acumulador.push(valor*2);
	return acumulador;
},[]);//valor inicial
//console.log(total);

//Retorne a pessoa mais velha

const maisVelha = pessoas.reduce((acumulador,valor)=>{
	if (acumulador.idade>valor.idade) {
		return acumulador;
	}
	return valor;
});
//console.log(maisVelha);

//Retorne a soma do dobro de todos os pares

const somaDobraPares = numeros
	.filter(valor=> valor%2===0)
	.map(valor=>valor*2)
	.reduce((acc,valor)=>acc+valor);

console.log(somaDobraPares);