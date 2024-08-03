

function mostrarFormulario () { 
    document.getElementById("formulario").style.display = "block"; 
}


function nomostrarFormulario() {
    document.getElementById("formulario").style.display = "none";
}



document.getElementById("boton-formulario").addEventListener("click", mostrarFormulario);
document.getElementById("boton-formulario").addEventListener("dblclick", nomostrarFormulario);
document.getElementById("enviar").addEventListener("click", nomostrarFormulario);

    
 
