alert("Boas vindas ao nosso site!");

let nome = prompt("Digite o seu nome:");
let idade = prompt("Digite a sua idade:");
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemErro = alert("Erro! Preencha todos os campos");


if(nome && idade){
    if(idade >= 18){
        alert("Pode tirar a habilitação!");
    } else{
        alert("Não tem idade o suficiente para tirar habilitação");
    }
} else{
    alert(mensagemErro);
}