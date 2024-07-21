let acao = ""
let dinheiro = parseFloat(prompt("Qual a quantia de dinheiro na conta?"))
alert("Você possúi " + dinheiro + " R$")
let controle = 0
while (acao != "Sair") {
    acao = prompt("Você deseja realizar: \nDepósito) \nSaque) \nSair)")
    if(acao == "Depósito"){
        controle = parseFloat(prompt("Deseja depositar qual quantia?"))
        dinheiro = dinheiro + controle
        console.log(dinheiro)
        alert("Você possúi " + dinheiro + " R$")
    }
    else if(acao == "Saque"){
        controle = parseFloat(prompt("Deseja depositar qual quantia?"))
        dinheiro = controle
        console.log(dinheiro)
        alert("Você possúi " + dinheiro + " R$")
    }
    else if(acao == "Sair"){
        alert("Finalizando!")
    }
    else{
        alert("Opção inválida!")
    }
}