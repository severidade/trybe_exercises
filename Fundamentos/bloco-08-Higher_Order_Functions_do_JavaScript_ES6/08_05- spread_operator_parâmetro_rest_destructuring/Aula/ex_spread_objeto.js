const conhecimentos = {
    trabalho: true,
    hardSkills: true,
    softSkills: true,
}

const pessoa = {
    nome: "Nádia",
    idade: "28",
    cidade: "BH",
}

const pessoaTrybe = {
    ...pessoa, 
    ...conhecimentos,
}

console.log(pessoaTrybe);