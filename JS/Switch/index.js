const resultado = prompt("Escolha uma alternativa: \na) \nb) \nc)")

const conta = parseFloat(resultado)

switch (conta) {
    case 1:
        alert ("O resultado é 'a'")
        break
    case 2:
        alert ("O resultado é 'b'")
        break
    case 3:
        alert ("O resultado é 'c'")
        break
    default:
        alert ("Você é lindo")
}