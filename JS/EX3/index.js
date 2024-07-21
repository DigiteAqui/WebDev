const valor = parseFloat(prompt("Insira o valor em metros"))
let medida = prompt("deseja converter para: \nmm) \ncm) \ndm) \ndam) \nhm) \nkm)")
let resultado = 0

switch (medida) {
    case"mm":
        medida = "milímetros"
        resultado = valor * 1000
        alert("O valor em " +medida +" é " +resultado)
        break
    case"cm":
        medida = "centímetros"
        resultado = valor * 100
        alert("O valor em " +medida +" é " +resultado)
        break
    case"dm":
        medida = "decímetros"
        resultado = valor * 10
        alert("O valor em " +medida +" é " +resultado)
        break
    case"dam":
        medida = "decâmetros"
        resultado = valor / 10
        alert("O valor em " +medida +" é " +resultado)
        break
    case"hm":
        medida = "hectômetros"
        resultado = valor / 100
        alert("O valor em " +medida +" é " +resultado)
        break
    case"km":
        medida = "quilômetros"
        resultado = valor / 1000
        alert("O valor em " +medida +" é " +resultado)
        break
    default:
        alert("Opção invalida");
        break
}