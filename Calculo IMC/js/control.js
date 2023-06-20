function verificarEnvio(event, inputClass) {
     // Evita que o formulário seja enviado

    const inputs = document.getElementsByClassName(inputClass);
    var emptyField = false;

    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            emptyField = true;
            break;
        }
    }

    if (emptyField) {
        event.preventDefault();
        alert('Por favor, preencha todos os campos antes de enviar o formulário.');
    } 
}
function permitirApenasNumeros(event, inputId) {
    var scan = document.getElementById(inputId);
    var key = event.key;
    console.log(scan.id)
    // Verificar se a tecla pressionada é um número
    
    if (isNaN(key)) {
        event.preventDefault();
    }
    if(scan.id == 'txtIdade'){
    // Limitar para apenas 2 dígitos
    if (scan.value.length >= 2 && event.keyCode !== 8) {
        event.preventDefault();
    }
}

    else if (scan.id === 'txtAltura') {
        if (scan.value.length === 1) {
            scan.value += '.';
        } else if (scan.value.length > 2) {
            scan.value = scan.value.slice(0, 3);
        }   
    }
    else if (scan.id === 'txtPeso') {
        if (scan.value.length >= 3 && event.keyCode !== 8) {
            event.preventDefault();
        }
    }
}







