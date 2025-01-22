const inputCelsius = document.getElementById("celsius");
const inputSubmit = document.getElementById("convert");
const celsiusShow = document.getElementById("celsiusValue");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");

inputSubmit.addEventListener('click', function (submit) {
    submit.preventDefault();

    const celsiusValue = parseFloat(inputCelsius.value);

    if (isNaN(celsiusValue)) {
        alert("Por favor, ingresa un valor numérico válido.");
        return;
    }
    
    const fahrenheitValue = (celsiusValue * 9/5) + 32;
    const kelvinValue = celsiusValue + 273.15;

    celsiusShow.textContent = `${celsiusValue} °C`;
    fahrenheit.textContent = `${fahrenheitValue.toFixed(2)} °F`;
    kelvin.textContent = `${kelvinValue.toFixed(2)} °K`;
    inputCelsius.value = "";
});