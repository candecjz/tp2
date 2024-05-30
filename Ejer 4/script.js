function calcularIMC() {
    const peso = document.getElementById('peso').value;
    const estatura = document.getElementById('estatura').value;

    if (peso && estatura) {
        const imc = peso / (estatura * estatura);
        alert(`Tu IMC es ${imc.toFixed(2)}`);
    } else {
        alert('Por favor, ingrese valores válidos.');
    }
}