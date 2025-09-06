function calcularIMC() {
  let peso = Number(document.getElementById("txtpeso").value)
  let altura = Number(document.getElementById("txtaltura").value)
  const res = document.getElementById("txtimc")

  if (altura >= 10) altura = altura / 100
  
  if (peso <= 0 || altura <= 0) {
   alert ("Esses valores não são validos informe valores válidos.")
  }

  const imc = peso / (altura * altura)
  const classificacao = classificarIMC(imc)

  res.innerHTML = `Seu IMC é ${imc.toFixed(2)}<br>${classificacao}`
}

function classificarIMC(imc) {
  return imc < 18.5
  ? "Classificação: Abaixo do peso"
  : imc < 24.9
  ? "Classificação: Peso normal"
  : imc < 29.9
  ? "Classificação: Sobrepeso"
  : "Classificação: Obesidade"
}