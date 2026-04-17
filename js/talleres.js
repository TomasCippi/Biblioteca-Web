AOS.init({
    once : true
});
const menu = document.getElementById('menu_container');
function menutoggle() {    
    menu.classList.toggle('menu_transition'); 
    console.log(menu.classList);
}
