function PriceValue(){
    var cantidad = parseInt(document.getElementById('cantidad').value);
    var opcion = parseInt(document.getElementById('selectform').value);
    var estudiante = 40, trainee = 100, junior = 170; 

    switch(opcion){
        case 0:
            var pvalue = cantidad * estudiante;
            break;
        case 1:
            var pvalue = cantidad * trainee;
            break;
        case 2:
            var pvalue = cantidad * junior;
            break;
    }

    if(cantidad > 0){
        document.getElementById('valorprecio').innerText = ('Total a pagar: '+ '$' + pvalue);
    }
    else{
        alert('Ingrese cantidad de entradas');
    }
}

function Delete(){
    document.getElementById('cantidad').value = '';
    document.getElementById('valorprecio').innerText = ('Total a pagar: '+ '$');
}