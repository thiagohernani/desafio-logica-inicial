let heroi = ['THIAGO FINAL BOSS', 10001];

if (heroi[1] <= 1000) {
  heroi[1] = "Ferro";
}

switch (true) {
  case heroi[1] >= 1001 && heroi[1] <= 2000:
    heroi[1] = "Bronze";
    break;
  case heroi[1] >= 2001 && heroi[1] <= 5000:
    heroi[1] = "Prata";
    break;
  case heroi[1] >= 5001 && heroi[1] <= 7000:
    heroi[1] = "Ouro";
    break;
  case heroi[1] >= 7001 && heroi[1] <= 8000:
    heroi[1] = "Platina";
    break;
  case heroi[1] >= 8001 && heroi[1] <= 9000:
    heroi[1] = "Ascendente";
    break;
    case heroi[1] >= 9001 && heroi[1] <= 10000:
    heroi[1] = "Imortal";
    break;
  case heroi[1] >= 10000:
    heroi[1] = "Radiante";
    break;
}

console.log(`O Héroi de nome ${heroi[0]} está no nível de ${heroi[1]}!`)
