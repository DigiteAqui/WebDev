let opcao = ""

while (opcao != "Encerrar") {
    opcao = prompt("O que você deseja fazer? \nCalculadora) \nBússola) \nTermometro) \nNível) \nEncerrar)")

    if (opcao == "Calculadora") {
        alert("Você escolheu a Calculadora")
    }
    else if(opcao == "Bússola") {
        alert("Você escolheu a Bússola")
    }
    else if(opcao == "Termometro") {
        alert("Você escolheu o Termometro")
    }
    else if(opcao == "Nível") {
        alert("Você escolheu o Nível")
    }
    else if(opcao == "Encerrar"){
        alert("Finalizando!")
    }
    else{
        alert("Opção inválida!")
    }
}
