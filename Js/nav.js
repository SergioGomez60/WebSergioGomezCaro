const navegador = document.getElementById("navegador");

window.addEventListener("scroll",function(){
    if(this.window.scrollY > 150){
        navegador.style.backgroundColor = "rgba(0, 0, 0, 1)";
        navegador.style.transition = "0.7s"
      }else{
        navegador.style.backgroundColor = "";
      }
})