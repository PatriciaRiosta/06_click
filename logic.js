console.log("Conectado, OK!")

let toggleLogInOut = document.querySelector("#toggleInOut")
let removerBoton = document.querySelector("#definicionBtn")
let megusta_gato = document.querySelector("#megusta_gato")
let numeroGato = document.querySelector("#numeroGato")

// Toggle Inicio de Seción 
toggleLogInOut.addEventListener('click', (evento) => {
if (evento.target.innerText === "Iniciar Sesion"){
    evento.target.innerText = "Cerrar Sesion";
}else{
    evento.target.innerText = "Iniciar Sesion"
}
})

//remover boton

removerBoton.addEventListener('click', function (evento){
   removerBoton.remove()
})

//incrementar likes

megusta_gato.addEventListener('click', function(evento){
    numeroGato.innerText ++;

})

document.getElementById("megusta_perro").addEventListener("click",mifuncion);
function mifuncion() {
    console.log("Documento enlazado exitosamente");
    alert("Te ha gustado");
}