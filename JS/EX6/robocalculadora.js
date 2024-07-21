const num = prompt("Digite um número entre 1 e 20")
let tabuada = "A Tabuada completa é: \n"
let controle = 0
let n

if(num > 0 && num <=20)
    {
    while (controle <= 10)
        {
            n = num * controle
            controle ++
            tabuada += n + " \n"
        }

    alert(tabuada)
    }
else 
{
    alert("Insira um número válido!")
}