document.addEventListener("DOMContentLoaded", function() {
    const argAmount = document.querySelector("#argAmount");
    const dollarBuy = document.querySelector("#dollarBuy");
    const dollarSell = document.querySelector("#dollarSell");
    const resultDiv = document.querySelector("#result");
    const submitButton = document.querySelector("#submit");

    submitButton.addEventListener('click', function() {
        const argAmountValue = parseFloat(argAmount.value);
        const dollarBuyValue = parseFloat(dollarBuy.value);
        const dollarSellValue = parseFloat(dollarSell.value);

        if (!isNaN(argAmountValue) && !isNaN(dollarBuyValue) && !isNaN(dollarSellValue)) {
            const result = (argAmountValue / dollarSellValue) * dollarBuyValue;
            resultDiv.textContent = "La cantidad " + argAmountValue + " ARG son " + result.toFixed(2) + " UYU";
        } else {
            alert("Por favor, ingrese valores válidos.");
        }
    });
});


