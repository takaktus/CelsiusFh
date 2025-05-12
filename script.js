function converterTemperatura() {

    let escolha = prompt(
        "Escolha a conversão:\n" +
        "1. Celsius para Fahrenheit\n" +
        "2. Fahrenheit para Celsius\n" +
        "Digite 1 ou 2:"
    );

    if (escolha !== "1" && escolha !== "2") {
        alert("Opção inválida! Por favor, recomece.");
        return; 
    }

    // 1.Temperatura
    let temperatura = Number(prompt("Digite a temperatura a ser convertida:"));

    if (isNaN(temperatura)) {
        alert("Valor inválido! Digite apenas números.");
        return;
    }

    // 4. Conversão com if/else/alert
   
converterTemperatura();