const pessoa = {
	nome: 'Luiz',
	sobrenome: 'Miranda',
	idade: 30,
	endereco:{
		rua: 'Av Brasil',
		numero: 320
	}
}
//Atribuição via desestruturação
const {nome,sobrenome,endereco:{rua,numero},...resto} = pessoa;
console.log(nome, sobrenome)
console.log(rua, numero)
console.log(resto)

const pessoa2 = {
	//nome: 'Luiz',
	sobrenome: 'Miranda',
	idade: 30,
	endereco:{
		rua: 'Av Brasil',
		numero: 320
	}
}
const {nome2='Não existe',sobrenome : sobrenome2} = pessoa2;
console.log(nome2, sobrenome2)

