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


/******************DESCARGAR CV*********************/
descargaCv = document.getElementById("descargar_cv");
descargaCv.addEventListener("click",()=>{
  const link = document.createElement("a");
  link.href = "./CV/SergioGomezCaro_CV.pdf";
  link.download = "SergioGomezCaro_CV.pdf"
  link.click();
});



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
const contacto = document.querySelectorAll(".contactar");

contacto.forEach(function(div){
  div.addEventListener("click",function(){
    window.open(this.dataset.url,"_blank");
  })
})

/****************HIDDEN*************/
const secciones = document.querySelectorAll('.hidden');

const ver = new IntersectionObserver((entradas)=>{
  entradas.forEach((entrada)=>{
    if(entrada.isIntersecting){
      entrada.target.classList.add('show'); // aparece
    }else{
      entrada.target.classList.remove("show"); //Desaparece //entrada.target significa “el elemento sobre el cual se está actuando”
    }
  })
},{
  threshold: 0.4 // se activa cuando el 20% de la sección es visible
});
secciones.forEach((sec) => ver.observe(sec)); //hace que todas las secciones con clase .hidden sean observadas por el IntersectionObserver


/******************HABILIDADES*****************/

const habilidades = document.querySelectorAll(".habilidades");

habilidades.forEach(hab =>{
  hab.addEventListener("click",()=>{

    // Buscamos el id destino del data-target
    const target = hab.dataset.target;
    const section = document.getElementById(target);

    // Si la sección ya está visible, la ocultamos (toggle)
    if(section && !section.classList.contains("ocultar")){
      section.classList.add('ocultar');
      return; // Detenemos aqui
    }else{
      // Ocultamos todas las secciones antes de mostrar la nueva
      document.querySelectorAll('.mostrar-habilidad').forEach(seccion => {
      seccion.classList.add('ocultar');
    })

  }

    // Si existe, la mostramos
    if(section){
      section.classList.toggle('ocultar');
    }

  })
})