function calculadora() {
  const operacao = Number(
    prompt(
      "Escolha uma operação: \n 1 - Soma (+)\n 2 - Subtração (-) \n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Dvisão Inteira (% (MOD))\n 6 - Potenciação (**)"
    )
  );

  if (!operacao || operacao > 6) {
    alert("Erro - Operação Invalida");
    calculadora();
  } else {
    let valor1 = Number(prompt("Insira o primeiro valor: "));
    let valor2 = Number(prompt("Insira o segundo valor: "));
    let resultado;
    if (!valor1 || !valor2) {
      alert("Erro - Parametros Invalidos");
      calculadora();
    } else {
      function soma() {
        resultado = valor1 + valor2;
        alert(`${valor1} + ${valor2} = ${resultado}`);
        novaOperacao();
      }
      function Subtracao() {
        resultado = valor1 - valor2;
        alert(`${valor1} - ${valor2} = ${resultado}`);
        novaOperacao();
      }
      function multiplicacao() {
        resultado = valor1 * valor2;
        alert(`${valor1} * ${valor2} = ${resultado}`);
        novaOperacao();
      }
      function divisaoreal() {
        resultado = valor1 / valor2;
        alert(`${valor1} / ${valor2} = ${resultado} `);
        novaOperacao();
      }
      function divisaointeira() {
        resultado = valor1 % valor2;
        alert(
          ` O resto da divisão entre ${valor1} e ${valor2} é igual a ${resultado}`
        );
        novaOperacao();
      }
      function potenciacao() {
        resultado = valor1 ** valor2;
        alert(`${valor1} elevado a ${valor2}ª e igual a ${resultado}`);
        novaOperacao();
      }

      function novaOperacao() {
        let novaOperacao = prompt(
          "Deseja fazer outro Operacão? \n 1 - Sim\n 2 - Não"
        );
        if (novaOperacao == 1) {
          calculadora();
        } else if (novaOperacao == 2) {
          alert("Até Mais");
        } else {
          alert("Digite uma operação valida");
          novaOperacao();
        }
      }
    }

    // if (operacao == 1) {
    //   soma();
    // } else if (operacao == 2) {
    //   Subtracao();
    // } else if (operacao == 3) {
    //   multiplicacao();
    // } else if (operacao == 4) {
    //   divisaoreal();
    // } else if (operacao == 5) {
    //   divisaointeira();
    // } else if (operacao == 6) {
    //   potenciacao();
    // }
    switch (operacao) {
      case 1:
        soma();
        break;
      case 2:
        Subtracao();
        break;
      case 3:
        multiplicacao();
        break;
      case 4:
        divisaoreal();
        break;
      case 5:
        divisaointeira();
        break;
      case 6:
        potenciacao();
        break;
    }
  }
}
calculadora();
