let menuVisible = false;

// Funcion para mostrar y ocultar el menu

function mostrarOcultarMenu(){

    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    };
}

function seleccionar(){

    // oculta el menu al seleccionar una opcion.
    document.getElementById("nav").classList = "";
    menuVisible = false;

}



//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 