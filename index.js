const inputNumero = document.getElementById("numero");
const inputSubmit = document.getElementById("convert");
const factorialValue = document.getElementById("factorialValue");

inputSubmit.addEventListener('click', function (submit) {
    submit.preventDefault();

    const number = parseFloat(inputNumero.value);
    let resultado = 1;
    
    if (isNaN(resultado)) {
        alert("Por favor, ingresa un valor numérico válido.");
        return;
    }
    else {
        for (let i=2; i<=number; i++){
            resultado = i * resultado;
        }
    }
    factorialValue.textContent = resultado;
    inputNumero.value = "";
}); 