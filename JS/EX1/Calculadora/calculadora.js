const n1 = prompt("Informe o valor de x")
const n2 = prompt("Informe o valor de y")

const x = parseFloat(n1)
const y = parseFloat(n2)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

alert(
    "Resultados:\n" +
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nMultiplicação: " + multiplicacao +
    "\nDivisão: " + divisao
  )