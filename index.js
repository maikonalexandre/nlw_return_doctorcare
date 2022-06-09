window.addEventListener('scroll', onScroll)

function onScroll(){
    scroll();
    backupbutton();
    activateMenu();
}

function activateMenu(){
const targetLine = scrollY + innerHeight / 2;



console.log(targetLine);

}
function scroll(){
    if(scrollY > 0){
        navscroll.classList.add("scroll");
    }
    else{
        navscroll.classList.remove("scroll");
    }
}
function backupbutton(){
    if(scrollY > 600){
       backtop.classList.add("show");
    }
    else{
        backtop.classList.remove("show");
    }
}
function abrirmenu(){
bodymenu.classList.add("menuexpand");
}
function closemenu(){
    bodymenu.classList.remove("menuexpand");

}
ScrollReveal({ origin:'top',
distance:'30px',
duration:700,}).reveal(`#home, 
#home img, 
#home .stats, 
#services,
#sevices .cards,
#services .cards .card,
#about,
#about header`
);








