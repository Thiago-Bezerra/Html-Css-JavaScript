document.getElementById('convert').onclick = tempConvert;
document.getElementById('clear').onclick = clearForm;

var showResult = document.getElementById("resultado")

function tempConvert() {
    var moedaSelecionada = document.getElementById("botoes").value;
    console.log(moedaSelecionada);

    let inputValue = document.getElementById("money").value;

    if (inputValue == "") {
        alert('Favor informar um número!');
        return;
    }

    switch (moedaSelecionada) {
        case "Dolar":
            let conversao1 = (inputValue / 5.26).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao1} U$`;
            break;

        case "Euro":
            let conversao2 = (inputValue / 6.19).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao2} €`;
            break;

        case "Peso":
            let conversao3 = (inputValue / 0.054).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao3} $`;
            break;

        case "Libra":
            let conversao4 = (inputValue / 7.26).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao4} £`;
            break;

        case "Iene":
            let conversao5 = (inputValue / 0.048).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao5} ¥`;
            break;

        case "Franco":
            let conversao6 = (inputValue / 5.69).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao6} Fr.`;
            break;

        case "Rublo":
            let conversao7 = (inputValue / 0.073).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao7} ₽`;
            break;

        case "Coroa":
            let conversao8 = (inputValue / 0.61).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao8} kr.`;
            break;

        case "Rupia":
            let conversao9 = (inputValue / 0.072).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao9} ₹`;
            break;

        case "Dinar":
            let conversao10 = (inputValue / 17.51).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao10}	د.ك`;
            break;

        case "Iuane":
            let conversao11 = (inputValue / 0.82).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao11} ¥`;
            break;

        case "Won":
            let conversao12 = (inputValue / 0.0045).toFixed(2);
            showResult.innerHTML = ` ${inputValue} R$ equivale a ${conversao12}	₩`;
            break;
    }
}

function clearForm() {
    document.getElementById("money").value = "";
    document.getElementById("botoes").value = "Dolar";
    document.getElementById("resultado").innerHTML = "";
}