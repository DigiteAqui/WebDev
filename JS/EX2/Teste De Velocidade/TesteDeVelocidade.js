const car1 = prompt("Nome do primeiro Veículo")
const vel1 = parseFloat(prompt("Velocidade do primeiro Veículo"))

const car2 = prompt("Nome do segundo Veículo")
const vel2 = parseFloat(prompt("Velocidade do segundo Veículo"))

if (vel1 > vel2) 
{
    alert("O " +car1 +" é mais rápido")
}
else if ( vel2 > vel1)
{
    alert("O " +car2 +" é mais rápido")
}
else
{
    alert("Os dois tem a mesma velocidade")
}