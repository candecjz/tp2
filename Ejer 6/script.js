function validarFormulario() {
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const edad = document.getElementById('edad').value;
    const altura = document.getElementById('altura').value;
    const correo = document.getElementById('correo').value.trim();
    const resultado = document.getElementById('resultado');

    let mensaje = '';
    let esValido = true;

    if (nombre === '' || nombre.length > 50) {
        mensaje += 'El nombre no puede estar vacío y debe tener un máximo de 50 caracteres. ';
        esValido = false;
    }
    
    if (apellido === '' || apellido.length > 50) {
        mensaje += 'El apellido no puede estar vacío y debe tener un máximo de 50 caracteres. ';
        esValido = false;
    }
    
    if (edad < 0 || edad < 18) {
        mensaje += 'La edad no debe ser negativa y debe ser mayor de edad. ';
        esValido = false;
    }
    
    if (altura < 0 || altura > 230) {
        mensaje += 'La altura no puede ser negativa y no puede ser mayor a 230 cm. ';
        esValido = false;
    }
    
    if (correo === '' || !correo.includes('@')) {
        mensaje += 'El correo electrónico no puede estar vacío y debe incluir "@". ';
        esValido = false;
    }

    resultado.textContent = mensaje;

    if (esValido) {
        resultado.style.color = 'green';
        resultado.textContent = 'Todas las validaciones son correctas.';
    } else {
        resultado.style.color = 'red';
    }
}