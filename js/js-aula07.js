/*
 * Programa - menu responsivo + modal popUP
 * Autor: Nerildo Viana
 * Licença: GNU
 * Data: 2024/04/11
 * versão: v1.0
*/
// Menu responsivo usando função publica
// Irá manipular a propriedade do display após um teste condicional
function menu(){
    let menu = document.getElementById("menu");
    if(menu.style.display == "block"){
        menu.style.display = "none";
    }else{
        menu.style.display = "block";
    }
}
// Modal ou popUP
const modalBnt = document.querySelector(".modal-bnt");
const modal = document.querySelector(".modal-overlay");
const closeBnt = document.querySelector(".close-bnt");
// função privada ao objeto da classe onde, irá adicionar uma nova classe, via evento click
modalBnt.addEventListener("click",function(){
    modal.classList.add("open-modal");
});
// função privada ao objeto da classe onde, irá remover uma classe, via evento click
closeBnt.addEventListener("click",function(){
    modal.classList.remove("open-modal");
});