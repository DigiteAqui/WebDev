const nome = prompt("Insira seu vulgo")
let cidades = ""
let contagem = 0
let continuar = prompt("Você já visitou alguma cidade? sim/não")

while ( continuar === "sim") {
    let cidade = prompt("Qual cidade visitada?")
    cidades +=" - " +cidade +"\n"
    contagem++
    continuar = prompt("Você visoutou mais cidades? sim/não")
}

alert (
    "Turista: " +nome
    +"\nCidades visitadas: " +contagem
    +"\nNomes das cidades: \n" +cidades
)