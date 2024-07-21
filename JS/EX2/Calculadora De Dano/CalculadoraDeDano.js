const p1 = prompt("Nome do atacante")
const pa = parseFloat(prompt("Poder de ataque do " +p1))

const p2 = prompt("Nome do defensor")
let pv = parseFloat(prompt("Pontos de vida do " +p2))
const pd = parseFloat(prompt("Pontos de defesa do " +p2))
const escudo = prompt("Possui escudo?")

let dano = 0

if (pa > pd && escudo === "não") 
{
    dano = pa - pd
}
else if (pa > pd && escudo === "sim")
{
    dano = (pa - pd) / 2
}

pv -= dano

console.log(p1)
console.log(pa)
console.log(p2)
console.log(pv)
console.log(pd)
console.log(escudo)
console.log(dano)





alert (p1 + " causou " +dano + " em pontos de dano")
alert (
    p1 + " \nPoder de ataque " +dano 
    + "\n\n"
    +p2 + " \n Ponto de vida " +pv
    +" \nPoder de defesa " +pd
    +" \nPossui escudo " +escudo
)