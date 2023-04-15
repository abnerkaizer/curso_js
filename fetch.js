fetch('pagina1.html')//retorna uma promise
	.then(resp => {
		if (resp !== 200) {
			throw new Error('ERRO 404 Nosso');
			return resp.text();//retorna outra promise
		}
	})
	.then( html => console.log(html));
	.catch( e => console.log(e));

async function carregaPagina(el) {
	try{
		const href = el.getAttribute('href');
		const response = await response.text();
		carreaResultado(html);
	}catch(e){
		console.log(e);
	}
}

function carregaResultado(response) {
	const resultado = document.querySelector('.resultado');
	resultado.innerHTML = response;
}