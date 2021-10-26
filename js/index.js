function mostrarError(){
    let nome = document.querySelector('#sm').value;
    let altura = parseFloat(document.querySelector('#altura').value);
    let peso = parseFloat(document.querySelector('#peso').value);
    let imc = peso/(altura*altura);

    if (isNaN(altura) || isNaN(peso)) {
        swal(nome + " Número Invalido!", "Digite um número válido", "error");
    }else{
        document.querySelector('#box2').innerHTML = '<p> Seja bem vindo '+ '<span>' + nome +'</span>'+ '</p>' + '<p>' + 
        'Conforme suas informações'+ '</p>' + '<h1>' +'<span>' +'Seu IMC: ' + '</span>' + imc.toFixed(2) +  '</h1>' ;
       
    }if (imc < 17){
        document.querySelector('#box3').innerHTML = '<h2>' + '<span>' + 'Alerta! '+ '</span>' + ' Muito abaixo do peso' + '</h2>'
        + '<p>'+ 'Procure por um médico - ' + '<span>'+'  URGENTE.' +'</span>' + '</p>';
    }else if (imc >= 17 || imc <=18.49){
        document.querySelector('#box3').innerHTML = '<h2>' + '<span>' + 'Alerta! '+ '</span>' + ' Abaixo do peso' + '</h2>'
        + '<p>'+'Procure por um médico ' + '</p>';
    }if (imc >= 18.50 || imc >= 24.99){
        document.querySelector('#box3').innerHTML = '<h2>' + '<span>' + 'Parabens! '+ '</span>' + ' Peso normal' + '</h2>';
    }if (imc >= 25 || imc >= 29.99){
        document.querySelector('#box3').innerHTML = '<h2>' + '<span>' + 'Alerta! '+ '</span>' + ' Acima do peso' + '</h2>';
    }if (imc >= 30 || imc >= 34.99){
        document.querySelector('#box3').innerHTML = '<h2>' + '<span>' + 'Alerta! '+ '</span>' + ' Obesidade I' + '</h2>' 
        + '<p>'+ 'Procure por um médico ' + '</p>';
    }if (imc >= 35 || imc >= 39.99){
        document.querySelector('#box3').innerHTML = '<h2>' + '<span>' + 'Alerta! '+ '</span>' + ' Obesidade II (severa)' + '</h2>' + '<p>'+
        'Procure por um médico - ' + '<span>'+'  URGENTE.' +'</span>' + '</p>';
    }if (imc > 40){
        document.querySelector('#box3').innerHTML = '<h2>' + '<span>' + 'Alerta! '+ '</span>' + ' Obesidade III (mórbida)' + '</h2>' + '<p>'+
        'Procure por um médico - ' + '<span>'+'  URGENTE.' +'</span>' + '</p>';
    }
    
}

function diagnostico(){
    
}