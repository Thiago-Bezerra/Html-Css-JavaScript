// var numeroSecreto = parseInt(Math.random() * 11);

// function Chutar() {
//   var elementoResultado = document.getElementById("resultado");
//   var chute = parseInt(document.getElementById("valor").value);
//   console.log(chute);
//   if (chute == numeroSecreto) {
//     elementoResultado.innerHTML = "Você acertou";
//   } else if (chute > 10 || chute < 0) {
//     elementoResultado.innerHTML = "Você deve digitar um número de 0 a 10";
//   } else {
//     elementoResultado.innerHTML = "Errou";
//   }
// }
let respostaComputador = 0;
respostaComputador = Math.floor(Math.random() * 11);

let count = 0;

function chutar() {
    var valorInput = parseInt(document.getElementById("valor").value);
    let resultado = document.getElementById("resultado");
    count++;

    if (count <= 3) {
        if (valorInput === respostaComputador) {
            resultado.innerHTML =
                "<span style = 'color: #5bd36f'>Parabéns! Você acertou.</span> <br> Tentativa: " +
                count;
        } else if (valorInput > respostaComputador) {
            resultado.innerHTML =
                "O número que você jogou é maior que o número correto <br> Tentativa: " +
                count;
        } else if (valorInput < respostaComputador) {
            resultado.innerHTML =
                "O número que você jogou é menor que o número correto <br> Tentativa: " +
                count;
        } else {
            resultado.innerHTML = "<span style = 'color: red'>Erro</span> ";
        }
    } else {
        resultado.innerHTML =
            "<span style = 'color: #ff7f08'>Acabaram suas chances</span> <br> O número era: " +
            respostaComputador;
    }
}

function restart() {
    document.getElementById("valor").value = "";
    resultado.innerHTML = "";
    count = 0;
    respostaComputador = Math.floor(Math.random() * 11);
}