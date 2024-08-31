





function sumarUno ( numero){

    let promesa = new Promise (function(resolve, reject){

        console.table('vemos que numero va ', numero)
        if (numero >= 7) {
            reject('El numero es muy alto');
        }

        setTimeout(function(){

            resolve( numero +1)

            }, 800);
        
    });

   
    return promesa;
}




sumarUno(4)

.then (sumarUno)
.then (sumarUno)
.then (sumarUno)
.then(numeroNuevo => {
    console.log(numeroNuevo)
})
.catch( error => {
    console.log('ERROR DE PROMESA');
    console.log(error)
})


