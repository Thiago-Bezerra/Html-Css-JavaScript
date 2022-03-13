function cmedia() {
    var No1 = parseInt(document.getElementById("1°b").value);
    var No2 = parseInt(document.getElementById("2°b").value);
    var No3 = parseInt(document.getElementById("3°b").value);
    var No4 = parseInt(document.getElementById("4°b").value);
  
    var notaFinal = (No1 + No2 + No3 + No4) / 4;
    var notaFixada = notaFinal.toFixed(1);
  
    if (notaFinal >= 6) {
      document.getElementById("teste").innerHTML =
        "Parabéns, você foi aprovado!!! A sua nota é: " + notaFixada;
      alert.classmate += "alert,alert-success";
    } else {
      document.getElementById("teste").innerHTML =
        "Que pena, foi reprovado... Na próxima você consegue, a sua nota é: " +
        notaFixada;
      alert.classmate += "alert, alert-danger";
    }
  }
  document.getElementById("calculo").onclick = cmedia;
  