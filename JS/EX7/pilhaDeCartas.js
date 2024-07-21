let baralho = []

for(let opcao = ""; opcao != "sair";)
{
    opcao = prompt(baralho +"\nO que deseja fazer? \n•Adicionar Carta \n•Puxar uma Carta \n•Sair")

    if(opcao == "adicionar carta")
    {
        baralho.unshift(prompt("Insira a carta desejada"))
    }
    else if(opcao == "puxar uma carta")
    {
        let consultando = baralho.shift()
        window.alert(consultando)
    }
    else if(opcao == "sair")
    {
        break
    }
}