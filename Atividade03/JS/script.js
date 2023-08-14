// Função principal
function insercaoNumeros() {
    const numeros = []; // Vetor para armazenar os números
  
    const qtdNumeros = parseInt(prompt("Quantos numeros deverão ser digitados?"));
  
    for (let i = 0; i < qtdNumeros; i++) {
      const numero = parseFloat(prompt(`Digite o número ${i + 1}:`));
      numeros.push(numero);
    }
  
    document.write(numeros.sort((a, b) => a - b)); //Metodo para ordernar do menor para o maior número
  }