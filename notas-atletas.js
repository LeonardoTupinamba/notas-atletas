let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88],
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33],
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8],
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5],
  },
];

function calcularMedia(atletas) {
  for (let i = 0; i < atletas.length; i++) {
    let notas = atletas[i].notas;

    // Ordena as notas em ordem crescente
    notas = notas.sort((a, b) => a - b);

    // Remove a menor e a maior nota
    let notasComputadas = notas.slice(1, 4);

    // Calcula a soma das notas
    let soma = 0;
    notasComputadas.forEach(function (nota) {
      soma += nota;
    });

    // Calcula a média
    let media = soma / notasComputadas.length;

    // Exibe os resultados
    console.log("Atleta: " + atletas[i].nome);
    console.log("Notas Obtidas: " + atletas[i].notas.join(","));
    console.log("Média Válida: " + media);
    console.log(""); // linha em branco para separar
  }
}

// Executa a função
calcularMedia(atletas);
