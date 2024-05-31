function calcularArea() {
    const ladoA = +document.getElementById('ladoA').value;
    const ladoB = +document.getElementById('ladoB').value;
    const ladoC = +document.getElementById('ladoC').value;
    const resultado = document.getElementById('resultado');

    if (ladoA > ladoC && ladoA > 0 && ladoB > 0 && ladoC > 0) {
        const areaTri = (ladoB * (ladoA - ladoC)) / 2;
        const areaRect = ladoB * ladoC;
        const total = areaRect + areaTri;
        resultado.style.color = 'green';
        resultado.textContent = `El área del terreno es ${total} metros cuadrados.`;
    } else {
        resultado.style.color = 'red';
        resultado.textContent = 'Lado C debe ser menor que Lado A, y todos los valores deben ser mayores que 0.';
    }
}