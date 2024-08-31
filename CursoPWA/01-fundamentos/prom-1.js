function sumarUno ( numero, callBack){

        if(numero >= 7){
            callBack ('numero muy alto ');
            return;
        }

    setTimeout(function(){
    //  return numero +1

    callBack( numero +1)
    }, 800);
}





sumarUno(5,function(nuevoValor){

    sumarUno(nuevoValor, function(nuevoValor2){

       sumarUno(nuevoValor2, function(nuevoValor3){

        console.log(nuevoValor3)
            
        })
    })
});

