const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5,
};

const pokemon2 = {...pokemon1}

pokemon2.nome = "squirtle"
pokemon2.tipo = "agua"

console.log(pokemon2)

pokemon1.ataques = []
pokemon1.ataques.push = {nome: "Investida", dano: 40, tipo: "Normal", precisao: 100}

console.log(pokemon1)

pokemon2.ataques

console.log(pokemon2)

pokemon1.ataques.push = {nome: "folha navalha", dano: 45, precisão: 100, tipo: "grama"}
pokemon2.ataques = {nome: "jato de água", dano: 40, precisão: 100, tipo: "água"}

console.log(pokemon1,pokemon2)

