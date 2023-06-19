
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

function verificEnvio(event, inputClass){
    const inputs = document.getElementsByClassName(inputClass);

    if(inputs.value == null){
        event.preventDefault();
    }

}