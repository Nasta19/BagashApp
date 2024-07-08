document.addEventListener("DOMContentLoaded", function() {
    const amountLabel = document.querySelector("#amountLabel");
    const amount = document.querySelector("#amount");
    const dollarBuy = document.querySelector("#dollarBuy");
    const dollarSell = document.querySelector("#dollarSell");
    const resultDiv = document.querySelector("#result");
    const submitButton = document.querySelector("#submit");
    const switcher = document.querySelector("#switcher");
    const switcherUy = document.querySelector("#switcherUy");
    const switcherArg = document.querySelector("#switcherArg");
    const uruguayanShopping = document.querySelector("#toggleShopping");
    const textSwitch = document.querySelector("#textSwitch");
    let isArgToUy = true; // Boolean to control the switch
    let isBuyingInUruguay = false; // Boolean to control conversion logic

    // Initial switch setup
    switcherArg.style.display = "none";
    switcherUy.style.display = "block";

    // Switch or Toggle function
    switcher.addEventListener("click", function() {
        if (isArgToUy) {
            amountLabel.textContent = "Ingrese el monto en UY a convertir";
            switcherUy.style.display = "none";
            switcherArg.style.display = "block";
        } else {
            amountLabel.textContent = "Ingrese el monto en ARG a convertir";
            switcherArg.style.display = "none";
            switcherUy.style.display = "block";
        }
        isArgToUy = !isArgToUy;
    });

    // Toggle buying in Uruguay
    uruguayanShopping.addEventListener("click", function () {
        isBuyingInUruguay = !isBuyingInUruguay;
        updateTextSwitch();
    });

    function updateTextSwitch() {
        if (isBuyingInUruguay) {
            textSwitch.innerHTML = 'Si eres de Uruguay y deseas comprar en Argentina <i id="toggleShopping" style="font-style: italic; cursor: pointer;">presiona aquí</i>';
        } else {
            textSwitch.innerHTML = 'Si eres de Argentina y deseas comprar en Uruguay <i id="toggleShopping" style="font-style: italic; cursor: pointer;">presiona aquí</i>';
        }
        const toggleShopping = document.querySelector("#toggleShopping");
        toggleShopping.addEventListener("click", function () {
            isBuyingInUruguay = !isBuyingInUruguay;
            updateTextSwitch();
        });
    }

    // Initial setup of text switch
    updateTextSwitch();

    // Conversion function
    submitButton.addEventListener('click', function() {
        const amountValue = parseFloat(amount.value);
        const dollarBuyValue = parseFloat(dollarBuy.value);
        const dollarSellValue = parseFloat(dollarSell.value);

        if (!isNaN(amountValue) && !isNaN(dollarBuyValue) && !isNaN(dollarSellValue)) {
            let result;
            if (isBuyingInUruguay) {
                // Logic for an Argentinian buying in Uruguay
                if (isArgToUy) {
                    result = (amountValue * dollarSellValue) / dollarBuyValue;
                    resultDiv.textContent = "La cantidad " + amountValue + " ARG son " + result.toFixed(2) + " UYU";
                } else {
                    result = (amountValue * dollarBuyValue) / dollarSellValue;
                    resultDiv.textContent = "La cantidad " + amountValue + " UYU son " + result.toFixed(2) + " ARG";
                }
            } else {
                // Regular conversion logic
                if (isArgToUy) {
                    result = (amountValue / dollarSellValue) * dollarBuyValue;
                    resultDiv.textContent = "La cantidad " + amountValue + " ARG son " + result.toFixed(2) + " UYU";
                } else {
                    result = (amountValue * dollarSellValue) / dollarBuyValue;
                    resultDiv.textContent = "La cantidad " + amountValue + " UYU son " + result.toFixed(2) + " ARG";
                }
            }
        } else {
            alert("Por favor, ingrese valores válidos.");
        }
    });
});
