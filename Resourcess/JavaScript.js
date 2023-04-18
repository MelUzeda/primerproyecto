const slides = document.querySelector (".slide");
const botonSiguiente = document.querySelector (".nextBtn");
const botonAnterior= document.querySelector (".prevBtn");

slides.forEach(function(slide, index) {
    slide.style.botton = `${index * 100}%`;
});

let counter = 0;

botonSiguiente.addEventListener("click", function(){
    counter++;
    carousel();
})
botonAnterior.addEventListener("click", function(){
    counter--;
    carousel();
})
function carousel(){
    if (counter< slides.length -1){
        botonSiguiente.style.display="block";
    }else{
        botonSiguiente.style.display="none";
    }
    if(counter >0){
        botonAnterior.style.display = "block";
    }else{
        botonAnterior.style.display="none";
    }
    slides.forEach(function (slide){
        slide.style.transform = `translateY(-$[counter * 100%]%)`;
    });
    botonAnterior.style.display="none";
}
