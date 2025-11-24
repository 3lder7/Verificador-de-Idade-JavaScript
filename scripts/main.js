function verificar() {
  //definindo variáveis e o ano
  var agora = new Date();
  var anojava = agora.getFullYear(); //ano atual
  var anotxt = window.document.getElementById("anotxt");
  var ano = Number(anotxt.value); //transformando ano de txt para number, e fazer o cálculo
  var calc = anojava - ano;
  var box = window.document.getElementsByName("box");
  var gen = "";
  var periodo = "";
  var img = window.document.createElement("img");
  img.setAttribute("id", "foto");

  //verificação de erro
  if (ano == "" || isNaN(ano)) {
    window.alert("ERRO! Verifique o preenchimento.");
    return 0;
  } else if (ano > anojava) {
    window.alert("ERRO! Ano inválido.");
    return 0;
  } else if (ano == anojava) {
    window.alert("ERRO! Ano não pode ser o atual.");
    return 0;
  }

  if (box[0].checked) {
    gen = "Masculino";
    if (calc >= 1 && calc <= 11) {
      periodo = "Criança";
      img.setAttribute("src", "images/crianca.png");
    } else if (calc >= 12 && calc <= 18) {
      img.setAttribute("src", "images/adolescente.png");
      periodo = "Adolescente";
    } else if (calc >= 19 && calc <= 29) {
      img.setAttribute("src", "images/jovem.png");
      periodo = "Jovem";
    } else if (calc >= 30 && calc <= 49) {
      img.setAttribute("src", "images/adulto.png");
      periodo = "Adulto";
    } else {
      img.setAttribute("src", "images/idoso.png");
      periodo = "Idoso";
    }
  } else if (box[1].checked) {
    gen = "Feminino";
    if (calc >= 1 && calc <= 11) {
      periodo = "Criança";
      img.setAttribute("src", "images/criancaf.png");
    } else if (calc >= 12 && calc <= 18) {
      img.setAttribute("src", "images/adolescentef.png");
      periodo = "Adolescente";
    } else if (calc >= 19 && calc <= 29) {
      img.setAttribute("src", "images/jovemf.png");
      periodo = "Jovem";
    } else if (calc >= 30 && calc <= 49) {
      img.setAttribute("src", "images/adultof.png");
      periodo = "Adulto";
    } else {
      img.setAttribute("src", "images/idosaf.png");
      periodo = "Idoso";
    }
  } else {
    window.alert("ERRO! Gênero não definido.");
    return 0;
  }

  //-------------
  var res = window.document.getElementById("res");
  //-------------
  img.style.margin = "15px";
  res.innerHTML = `Detectamos um <strong>${periodo}</strong> de <strong>${calc}</strong> anos de idade, do gênero <strong>${gen}</strong>`;
  res.appendChild(img);
}