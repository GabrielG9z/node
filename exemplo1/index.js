let dolar = 5.09;
let dolar10 = 10 * dolar;
console.log(`U$ 10 equivale a R$ ${dolar10}`);
console.log('---------------------------------')
let aluno = 'Chaves'
let nota1 = 6.54;
let nota2 = 5.31;
let media = (nota1 + nota2) /2;
// console.log(`O aluno ${aluno} tirou a nota: ${nota1} em Front-End, e no Back-End foi de: ${nota2} no final teve a media de ${media}`);

// Variável nao precisa ser declarada o valor imediatamente
let situacao;
if(media>=7){
    situacao = "Aprovado";
}else{
    situacao = "Reprovado";
}
// console.log(`O aluno ${aluno} alcançou a média de: ${media} está ${situacao}.`);
console.log("O aluno "+aluno+" alcançou a média de: "+media+" e está "+situacao);
console.log('----------------------------------------------------------------------');


// Criando um objeto.
var dados = {
    nome : "Gabriel",
    idade : 22,

}
console.table(dados);
// Acessando os dados do objeto.
console.log(dados.nome);