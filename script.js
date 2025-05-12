function converterTemperatura() {

    let resultadoConversao;
    let escolha = prompt(
        "Escolha a conversão:\n" +
        "1. Fahrenheit para Celsius\n" +
        "2. Celsius para Fahrenheit\n" +
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
    if (escolha === "1") {
        resultadoConversao = (5 / 9) * (temperatura - 32);
        alert(`${temperatura}°F = ${resultadoConversao.toFixed(1)}°C`);
    } else {
        resultadoConversao = (temperatura * 1.8) + 32;
        alert(`${temperatura}°C = ${resultadoConversao.toFixed(1)}°F`);


    }
}
converterTemperatura();