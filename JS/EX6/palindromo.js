const p1 = prompt("Insira uma palavra para verificar")
let p2 = ""

for (let i = p1.length - 1; i >= 0; i--)
    {
        p2 += p1[i]
    }

if(p1 === p2)
    {
        alert(p1 +" é um palindromo")
    }
else {
        alert(p1 + " não é um palíndromo!\n\n" + p1 + " !== " + p2)
    }