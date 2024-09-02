document.addEventListener('DOMContentLoaded', function(){ //esta funcion escucha cuando esta listo el html
    crearGaleria();
})

function crearGaleria(){
    
    const CANTIDAD_IMAGENES =16;
    
    const galeria = document.querySelector('.galeria-imagenes')



    for (let i = 1; i<= CANTIDAD_IMAGENES; i++){
        const imagen = document.createElement('IMG') //POR CONVENCION PONEMOS EN MAYUSCULAS EL ELEMNTO QUE CREAMOS EN EL HTML
        imagen.src = `src/img/gallery/full/${i}.jpg` //apuntamos a la direccion de las imagenes
        imagen.alt = 'Imagen de la galeria' //el alt para la imagen


        //event handler

        imagen.onclick = function (){
            mostrarImagen(i)
        }

        galeria.appendChild(imagen)

    }
}


function mostrarImagen(i){

    const imagen = document.createElement('IMG') 
    imagen.src = `src/img/gallery/full/${i}.jpg` 
    imagen.alt = 'Imagen de la galeria'


        //generar modal

        const modal = document.createElement('DIV')
        modal.classList.add('modal')
        
        //cerrar modal
        modal.onclick =cerrarModal

        //agregar al html 

        const body = document.querySelector('body')
        body.classList.add('overFlow-hidden')
        body.appendChild(modal)


        //mostrar en pantalla
        modal.appendChild(imagen)
}   


function cerrarModal() {
    const modal = document.querySelector('.modal');
    if (modal) {
        modal.classList.add('fadeOut');
        setTimeout(() => {
            modal.remove();
            const body = document.querySelector('body');
            body.classList.remove('overFlow-hidden');
        }, 400); // Coincide con la duración de la animación
    }
}
