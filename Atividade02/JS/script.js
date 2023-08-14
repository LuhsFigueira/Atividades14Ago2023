// Função para calcular a média dos valores em um vetor
function calcularMedia(vetor) {
    if (vetor.length === 0) {
      return 0; // Retorna 0 se o vetor estiver vazio
    }
  
    let soma = 0;
    for (let i = 0; i < vetor.length; i++) {
      soma += vetor[i];
    }
  
    return soma / vetor.length;
  }
  
  // Função principal
  function insercaoNumeros() {
    const numeros = []; // Vetor para armazenar os números
  
    const qtdNumeros = parseInt(prompt("Quantos numeros deverão ser digitados?"));
  
    for (let i = 0; i < qtdNumeros; i++) {
      const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
      numeros.push(numero);
    }
  
    const media = calcularMedia(numeros);
    document.write(`A média dos valores é: ${media}`);
  }
  
  