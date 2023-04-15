//métodos ligados a classe e não a uma instancia dela.

class ControleRemoto{
	constructor(tv){
		this.tv = tv;
		this.volume = 0;
	}
	aumentarVolume(){
		if (this.volume<30) {
			this.volume += 1;
		}
	}
	diminuirVolume(){
		if (this.volume>=0) {
			this.volume -= 1;
		}
	}
	//Método da classe, não tem acesso aos dados das instancias.
	static updateTV(){
		console.log('opa');
	}
}

const controle1 = new ControleRemoto('LG');
const controle2 = new ControleRemoto('LG');

controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();

console.log(controle1);
console.log(controle2);

ControleRemoto.updateTV();

console.log(controle1);
console.log(controle2);