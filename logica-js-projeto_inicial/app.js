alert ('Boas Vindas');
let nome = 'Lua';
let idade = 25;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
//alert('Preencha Todos os Campos');
let menssagemErro = 'Erro! Preencha todos os campos';
alert(menssagemErro);
let nome2 = prompt('Digite um nome!');
let idadeHabilitacao = prompt('Digite sua idade!');
if(idadeHabilitacao >= 18){
    alert('Você é maior de idade e pode tirar a Habilitação');
}   else{
    alert('Você é menor de idade, espere completar 18, para tirar a Habilitação');
}
