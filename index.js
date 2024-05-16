let nomeHeroi = "Ronaldo";
let XP = 0
let nivel;
if (XP < 1000) {
    nivel = "Ferro";
} else if (XP >= 1001 && xp <= 2000) {
    nivel = "Bronze";
} else if (XP >= 2001 && xp <= 5000) {
    nivel = "Prata";
} else if (XP >= 5001 && xp <= 7000) {
    nivel = "Ouro";
} else if (XP >= 7001 && xp <= 8000) {
    nivel = "Platina";
} else if (XP >= 8001 && xp <= 9000) {
    nivel = "Ascendente";
} else if (XP >= 9001 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

console.log("O Herói do nome " + nomeHeroi + " está no nível de " + nivel);