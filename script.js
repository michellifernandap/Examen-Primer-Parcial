document.getElementById('formularioNacimiento').addEventListener('submit', function(event) {
    event.preventDefault();

    var nombre = document.getElementById('nombre').value.trim();
    var apellidos = document.getElementById('apellidos').value.trim();
    var dia = parseInt(document.getElementById('dia').value);
    var mes = parseInt(document.getElementById('mes').value);
    var ano = parseInt(document.getElementById('ano').value);

    if (!/^[a-zA-Z ]+$/.test(nombre) || !/^[a-zA-Z ]+$/.test(apellidos)) {
        alert("El nombre y apellidos solo deben contener letras.");
        return;
    }

    if (dia < 1 || dia > 31 || mes < 1 || mes > 12 || ano < 1950 || ano > 2023) {
        alert("Fecha de nacimiento no valida.");
        return;
    }

    mostrarResultados(nombre, apellidos, dia, mes, ano);
});

function mostrarResultados(nombre, apellidos, dia, mes, ano) {
    var nombreCompleto = nombre + " " + apellidos;
    var edad = new Date().getFullYear() - ano;
    var resultadoHTML = `
        Buenos días ${nombreCompleto}<br>
        Tu nombre tiene ${nombreCompleto.length} caracteres, incluidos espacios.<br>
        La primera letra A de tu nombre está en la posición: ${nombreCompleto.indexOf('A') + 1}<br>
        La última letra A de tu nombre está en la posición: ${nombreCompleto.lastIndexOf('A') + 1}<br>
        Tu nombre menos las 3 primeras letras es: ${nombreCompleto.slice(3)}<br>
        Tu nombre todo en mayúsculas es: ${nombreCompleto.toUpperCase()}<br>
        Tu edad es: ${edad} años.
    `;

    document.getElementById('resultado').innerHTML = resultadoHTML;
}



const choices = document.querySelectorAll('.choice');
const resultText = document.getElementById('result-text');
const opponentChoiceText = document.getElementById('opponent-choice-text');

let userChoice = '';

function handleUserChoice(event) {
  userChoice = event.target.id;
  choices.forEach(choice => {
    if (choice.id !== userChoice) {
      choice.style.display = 'none';
    }
  });
  event.target.classList.add('selected');
  resultText.innerText = 'Esperando elección del oponente...';
  setTimeout(() => {
    const choicesArr = ['roca', 'papel', 'tijeras'];
    const opponentChoice = choicesArr[Math.floor(Math.random() * choicesArr.length)];
    choices.forEach(choice => {
      choice.style.display = 'none';
    });
    document.getElementById(opponentChoice).classList.add('selected');
    opponentChoiceText.innerText = `El oponente eligió: ${opponentChoice}`;
    resultText.innerText = getResultText(userChoice, opponentChoice);
    setTimeout(() => {
      choices.forEach(choice => {
        choice.style.display = 'block';
      });
      resultText.innerText = '';
      opponentChoiceText.innerText = '';
      choices.forEach(choice => {
        choice.classList.remove('selected');
      });
    }, 1000);
  }, 1000);
}

function getResultText(userChoice, opponentChoice) {
  switch (userChoice) {
    case 'roca':
      switch (opponentChoice) {
        case 'roca':
          return '¡Empate!';
        case 'papel':
          return '¡Perdiste! Papel cubre roca.';
        case 'tijeras':
          return '¡Ganaste! Roca aplasta tijeras.';
      }
      break;
    case 'papel':
      switch (opponentChoice) {
        case 'roca':
          return '¡Ganaste! Papel cubre roca.';
        case 'papel':
          return '¡Empate!';
        case 'tijeras':
          return '¡Perdiste! Tijeras cortan papel.';
      }
      break;
    case 'tijeras':
      switch (opponentChoice) {
        case 'roca':
          return '¡Perdiste! Roca aplasta tijeras.';
        case 'papel':
          return '¡Ganaste! Tijeras cortan papel.';
        case 'tijeras':
          return '¡Empate!';
      }
      break;
  }
}
 
choices.forEach(choice => {
  choice.addEventListener('click', handleUserChoice);
});



document.getElementById('btnCoseno').addEventListener('click', function() {
    var valor = prompt("Introduce un valor para calcular su coseno:");
    if (valor !== null) {
        alert(`El coseno de ${valor} es: ${Math.cos(valor).toFixed(10)}`);
    }
});

document.getElementById('btnNumeros').addEventListener('click', function() {
    var numeros = [];
    for (var i = 0; i < 6; i++) {
        var num = prompt(`Introduce el número ${i + 1}:`);
        if (num !== null) {
            numeros.push(parseFloat(num));
        }
    }
    var maximo = Math.max(...numeros);
    var minimo = Math.min(...numeros);
    var media = numeros.reduce((a, b) => a + b, 0) / numeros.length;
    alert(`Número mayor: ${maximo}, número menor: ${minimo}, media: ${media.toFixed(2)}`);
});



