function calculate() {
    const ethanolPrice = parseFloat(document.getElementById('ethanol-price').value);
    const gasolinePrice = parseFloat(document.getElementById('gasoline-price').value);
    const ethanolEfficiency = parseFloat(document.getElementById('ethanol-efficiency').value);
    const gasolineEfficiency = parseFloat(document.getElementById('gasoline-efficiency').value);

    if (isNaN(ethanolPrice) || isNaN(gasolinePrice)) {
        alert("Por favor, insira números válidos em todos os campos.");
        return;
    }

    const ethanolCostPerKm = ethanolPrice / ethanolEfficiency;
    const gasolineCostPerKm = gasolinePrice / gasolineEfficiency;

    let resultText;
    if (ethanolCostPerKm < gasolineCostPerKm) {
        resultText = "Etanol é mais econômico.";
    } else if (gasolineCostPerKm < ethanolCostPerKm) {
        resultText = "Gasolina é mais econômica.";
    } else {
        resultText = "Ambos os combustíveis têm o mesmo custo por quilômetro.";
    }

    document.getElementById('result').innerText = resultText;
}
