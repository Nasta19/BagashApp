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
    const savedState = localStorage.getItem("isBuyingInUruguay");
    if (savedState !== null) {
        isBuyingInUruguay = JSON.parse(savedState);
        updateTextSwitch();
    }

    uruguayanShopping.addEventListener("click", function () {
        // Actualizar el estado y guardarlo en localStorage
        isBuyingInUruguay = !isBuyingInUruguay;
        localStorage.setItem("isBuyingInUruguay", JSON.stringify(isBuyingInUruguay));

        // Recargar la página
        location.reload();
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
            localStorage.setItem("isBuyingInUruguay", JSON.stringify(isBuyingInUruguay));
            location.reload();
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

            //Save jSon to LocalStorage
            const conversion = {
                amount: amountValue,
                dollarBuy: dollarBuyValue,
                dollarSell: dollarSellValue,
                result: result.toFixed(2),
                isArgToUy: isArgToUy,
                isBuying: isBuyingInUruguay,
                timestamp: new Date().toLocaleString()
            };

            let history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
            history.push(conversion);
            localStorage.setItem("conversionHistory", JSON.stringify(history));

            displayHistory();

        } else {
            alert("Por favor, ingrese valores válidos.");
        }
    });

    //Display history
    
    function displayHistory() {
        const historyContainer = document.querySelector(".history");
        const history = JSON.parse(localStorage.getItem("conversionHistory")) || [];
        historyContainer.innerHTML = "<p>Historial</p><p style='font-style: italic'>Aquí podras visualizar tu historial de conversiones</p>";

        //Inside the local Storage
        history.forEach((entry, index) => {
            let historyEntry = document.createElement("p");
            historyEntry.textContent = `${entry.timestamp}: ${entry.amount} ${entry.isArgToUy ? 'ARG' : 'UYU'} = ${entry.result} ${entry.isArgToUy ? 'UYU' : 'ARG'} (Dólar Compra: ${entry.dollarBuy}, Dólar Venta: ${entry.dollarSell})`;

            let deleteIcon = document.createElement("img");
            deleteIcon.setAttribute("src", "img/delete-symbol_3448953.png");
            deleteIcon.setAttribute("alt", "Delete icon");
            deleteIcon.style.width = "25px";
            deleteIcon.style.cursor = "pointer";
            deleteIcon.style.verticalAlign = "middle";

            //Delete entry function
            deleteIcon.addEventListener("click", function () {
                deleteEntry = confirm("¿Estas seguro de eliminar la entrada?")
                if (deleteEntry) {
                    history.splice(index, 1);
                    localStorage.setItem("conversionHistory", JSON.stringify(history));
                    displayHistory();
                }
            })

            historyContainer.appendChild(historyEntry);
            historyEntry.appendChild(deleteIcon);
        });
    }
    //Initial display
    displayHistory();
});
