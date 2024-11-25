
function calcularNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas;

    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }
    return { saldoVitorias, nivel };
}
const vitorias = parseInt(prompt("Digite o número de vitórias:"));
const derrotas = parseInt(prompt("Digite o número de derrotas:"));

const { saldoVitorias, nivel } = calcularNivel(vitorias, derrotas);

console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`);
alert(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}.`);
