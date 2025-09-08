/****************NAVEGADOR*****************/
const navegador = document.getElementById("navegador");

window.addEventListener("scroll",function(){
    if(this.window.scrollY > 150){
        navegador.style.backgroundColor = "rgba(0, 0, 0, 1)";
        navegador.style.transition = "0.7s"
      }else{
        navegador.style.backgroundColor = "";
      }
})



/*****************EDUCACION**************/
const educacion = document.querySelectorAll(".titulo-educacion");

educacion.forEach(educacion => {
  educacion.addEventListener("click",() => {
    const flecha = educacion.parentElement; //Para activar el bloque entero y poder hacer que se despliegue.
    flecha.classList.toggle("active"); //hace que si el elemento no tiene la clase "active", se la añade; y si ya la tiene, se la quita.
  })
});


/******************PROYECTOS**************/
const proyecto = document.querySelectorAll(".proyecto");

// 1. Selecciona todos los elementos que tengan la clase "proyecto"
proyecto.forEach(function(div){
  div.addEventListener("click",function(){
    window.open(this.dataset.url,"_blank");
  });
});


/****************CONTACTO*************/
const linkedin = document.querySelectorAll(".linkedin");
const gmail = document.querySelectorAll(".gmail");

