//Funcion para deshabilitar el boton enviar

let form = document.querySelector("form");
let enviar = document.querySelector(".enviar");

function validar(){
    let deshabilitar = false;
    if((form.nombreapellido.value=="")&&(form.email.value=="")&&(form.telefono.value=="")&&(form.mensaje.value=="")){
        deshabilitar=true;
    }
    if(deshabilitar==true){
        enviar.disabled=true;
    }
    else{
        enviar.disabled=false;
    }
}

form.addEventListener("keyup", validar);