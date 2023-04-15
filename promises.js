function rand(min,max){
	min *= 1000;
	max *= 1000;
	return Math.floor(Math.random()*(max-min)+min);
}

function esperaAi(msg,tempo){
	return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			if (typeof msg != 'string') {
				reject('CAI NO ERRO');
				return;
			}
			resolve(msg);
			return;
		},tempo);
	});
}

/*esperaAi('Frase 1', rand(1,3))
	.then(response => {
		console.log(response);
		return esperaAi('222', rand(1,3));
	})
	.then(response => {
		console.log(response);
		return esperaAi('Frase 3', rand(1,3));
	})
	.then(response => {
		console.log(response);
	})
	.catch(e=>{
		console.log('ERRO: ',e)
	});*/
// Métodos para promises
//Promise.all Promise.race Promise.resolve Promise.reject

/*const promises = [
	// 'Primeiro valor',
	esperaAi("Promise 1",rand(1,5)),
	esperaAi("Promise 2",rand(1,5)),
	esperaAi("Promise 3",rand(1,5)),
	esperaAi(1000,rand(1,5)),
	// 'Outro valor',
	];*/
/*Promise.all(promises)
	.then((valor)=>{
		console.log(valor);
	})
	.catch((e)=>{
		console.log(e);
	});*/
/*Promise.race(promises)
	.then((valor)=>{
		console.log(valor);
	})
	.catch((e)=>{
		console.log(e);
	});
*/
/*function baixaPagina(){
	const emCache = false;
	if (emCache) {
		return Promise.resolve('Pagina em cache');
	}else{
		return esperaAi('Baixei a pagina',3000);
	}
}*/
function baixaPagina(){
	const emCache = true;
	if (emCache) {
		return Promise.reject('Pagina em cache');
	}else{
		return esperaAi('Baixei a pagina',3000);
	}
}
baixaPagina()
	.then(dados=>{
		console.log(dados);
	})
	.catch(e=>console.log('ERRO',e));