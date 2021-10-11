let info = {
	personagem: 'Margarida',
	origem: 'Pato Donald',
	nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

let info2 = {
	personagem: 'Tio Patinhas',
	origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178 ",
	nota: 'O último MacPatinhas',
	recorrente: false,
};

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

// console.log(`Olá ${info['personagem']}!`);
// console.log(`Olá ${info.personagem}!`);

info['recorrente'] = true;
// console.log(info);

// for (const key in info) {
// 	console.log(key);
// }

// for (const key in info) {
// 	console.log(key, info[key]);
// }

console.log(`${info.personagem} e ${info2['personagem']}`); // as duas formas de evocar chave e valor. 
console.log(`${info.origem} e ${info2.origem}`);
console.log(`${info.nota} e ${info2.nota}`);

if ( info.recorrente === true && info2.recorrente) {
	console.log(`Ambos recorrentes`);
} else {
	console.log(`Somente um é recorrente`)
}