const weight = Number(prompt("Digite seu peso em quilos(KG)"));
const height = Number(prompt("Digite sua altura em metros(m)"));

// fórmula do IMC
const imc_Calc = weight / (height * height);

// formatando o resultado para duas casas após a vírgula
const imcFormat = imc_Calc.toFixed(2);

// mudando o nome da variavél para mais legibilidade
const imc = imcFormat;
console.log(imc);

if (weight == "" || height == "") {
  alert("Digite seu peso/altura correto");
} else {
  switch (true) {
    case imc < 18.5:
      console.log("Abaixo do Peso");
      break;

    case imc >= 18.5 && imc < 24.9:
      console.log("Peso Normal");
      break;

    case imc >= 25 && imc < 29.9:
      console.log("Acima do peso");
      break;

    case imc >= 30:
      console.log("Obesidade");
      break;

    default:
      alert("IMC não calculado corretamente :(");
  }
}
