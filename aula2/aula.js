const nome = "Kedllon Kleber";
const sobrenome = "Alves Costa";
const idade = 29;
const peso = 85;
const alturaEmMt = 1.78;

const resAltura = alturaEmMt * alturaEmMt;

let imc;

const anoCorrente = 2021;

let anoNascimento;

imc = peso / (alturaEmMt * alturaEmMt);

anoNascimento = anoCorrente - idade;


console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} Kg`)
console.log(`tem ${alturaEmMt} e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}`)




//peso / (altura * altura)