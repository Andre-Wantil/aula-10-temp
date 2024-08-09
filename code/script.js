let allResults = document.getElementById('allResults')

// Função para mostrar o resultado na página
function mostrarResultado(resultado) {
  document.getElementById('allResults').innerHTML = resultado;
}

// Contador de 1 a 10 usando while
function contador1a10() {
  let resultado = ``;
  for (let i = 0; i < 10; i++) {
    console.log(i + 1)
    resultado += `${i + 1} `
  }

  mostrarResultado(resultado);
}

// Contador de 10 a 0 usando while
function contador10a0() {
  let resultado = ``;
  for (let i = 10; i > -1; i--) {
    console.log(i)
    resultado += `${i} `
  }

  mostrarResultado(resultado);
}

// Contagem regressiva com número fornecido pelo usuário
function contagemRegressiva() {
  let startPoint = document.getElementById('inputNumber').value;
  let resultado = ``;
  if (startPoint < 1) {
    return allResults.innerHTML = `Insira um número maior que 0!`
  }
  
  for (startPoint; startPoint > -1; startPoint--) {
    resultado += `${startPoint} `
    console.log(startPoint)
  }

  mostrarResultado(resultado);
}

// Contagem progressiva com número fornecido pelo usuário
function contagemProgressiva() {
  let endPoint = document.getElementById('inputNumber').value;
  let resultado = ``;
  if (endPoint > 999) {
    return allResults.innerHTML = `O número inserido é muito grande!`
  } else if (endPoint <= 0) {
    return allResults.innerHTML = `O número inserido é nulo!`
  }
  
  for (let i = 0; i < endPoint; i++) {
    resultado += `${i + 1} `
    console.log(i + 1)
  }

  mostrarResultado(resultado);
}

function gerarTabuada() {
  let base = document.getElementById('inputNumber').value;
  let resultado = ``;
  
  for (let i = 0; i < 11; i++) {
    let multiplicacao = base * i;
    resultado += `${base} * ${i} = ${multiplicacao} <br>`;
  }

  mostrarResultado(resultado);
}