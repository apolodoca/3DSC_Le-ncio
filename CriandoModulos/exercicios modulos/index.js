

//Crie um módulo ESM "personagem"
//Crie funções para:
//imprimir um objeto
//exporte a função imprimir dados personagem para outro modulo
//importe seu modulo no seu arquivo index e utilie ele

import {imprimirDadosPessoa} from "./lib_exercicios/personagem"

const personagem = imprimirDadosPessoa("King arthur", 85, 98)
console.log(personagem + "\n")

//Crie um modulo cjs
//Importe as funções (path, fs)
//exporte path e fs
//Finalmente importe eles aqui


import {path, fs} from "./lib_exercicios/fs.cjs"

console.log(path + "\n" + fs)
