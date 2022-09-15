const prompt = require("prompt-sync")();
const imc = require('./imc');

const valorPeso = prompt('Digite seu peso: ');
const peso = Number (valorPeso);

const valorAltura = prompt('Digite sua altura: ');
const altura = Number (valorAltura);

const resultado = imc (peso,altura);

console.log(`Seu IMC é: ${resultado}`);



