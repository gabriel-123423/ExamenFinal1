
  function validarFormulario(){

    const nombre=document.getElementById("nombre").value.trim();
    const correo=document.getElementById("correo").value.trim();
    const edad= parseInt(document.getElementById("edad").value);
    
    const mensajeError=document.getElementById("mensajeError")
    
    mensajeError.textContent="";
    
    if(nombre==="" || correo==="" || isNaN(edad)){
        mensajeError.textContent="Todos los campos son obligatorios";
        return false;
    }
    
        alert("Formulario enviado con exito")
        return true;
    
    }
    document.addEventListener('DOMContentLoaded', function() {
      const botonEnviar = document.getElementById('btnEnviar');
      const mensajeExito = document.getElementById('mensajeExito');
      const formulario = document.getElementById('formulario-contacto');
    
      botonEnviar.addEventListener('click', function(evento) {
        evento.preventDefault(); 
    
        mensajeExito.style.display = 'block'; 
    
        formulario.reset(); 
      });
    });
  
function validarRegistro() {
  const codigo = document.getElementById("codigo").value;
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const direccion = document.getElementById("direccion").value;

  if (codigo === '' || nombre === '' || apellidos === '' || direccion === '') {
    alert("Todos los campos son obligatorios.");
    return false; 
  }

  alert("Cliente registrado correctamente");
  return false; 
}
function comprar(producto) {
  const mensaje = document.getElementById("mensajeCompra");
  mensaje.innerHTML = `✅ Has comprado: <strong>${producto}</strong>`;
  mensaje.style.display = 'block';
}
function saludar(){
      alert('Estoy saludando desde un archivo externo')
}